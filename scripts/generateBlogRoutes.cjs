/**
 * Script to fetch blog slugs from API and generate routes for react-snap
 * Run before build: node scripts/generateBlogRoutes.cjs
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const API_URL = 'https://back.devext.io/api/blogs?limit=100&posted=true';

function fetchBlogs() {
  return new Promise((resolve, reject) => {
    https.get(API_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('📝 Fetching blog posts from API...');
    const response = await fetchBlogs();
    
    const blogs = response.data || response.blogs || response;
    
    if (!Array.isArray(blogs)) {
      console.log('⚠️ No blogs found or unexpected response format');
      console.log('Response:', JSON.stringify(response, null, 2).slice(0, 500));
      return;
    }

    // Extract canonical slugs
    const blogRoutes = blogs
      .filter(blog => blog.canonical)
      .map(blog => `/DigitalTrends/${blog.canonical}`);

    console.log(`✅ Found ${blogRoutes.length} blog posts`);

    // Static routes
    const staticRoutes = [
      '/',
      '/about',
      '/services',
      '/calculator',
      '/contact',
      '/DigitalTrends',
      '/ecommerce-design',
      '/CustomWebDesignServices',
      '/CustomWebDevelopment',
      '/AppDevelopment'
    ];

    // All routes combined
    const allRoutes = [...staticRoutes, ...blogRoutes];

    // Read current package.json
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Update reactSnap include
    packageJson.reactSnap = packageJson.reactSnap || {};
    packageJson.reactSnap.include = allRoutes;

    // Write updated package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log('✅ Updated package.json with blog routes:');
    blogRoutes.forEach(route => console.log(`   - ${route}`));
    console.log(`\n📦 Total routes to prerender: ${allRoutes.length}`);

    // Also create a routes file for reference
    const routesFilePath = path.join(__dirname, '..', 'prerender-routes.json');
    fs.writeFileSync(routesFilePath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      totalRoutes: allRoutes.length,
      staticRoutes,
      blogRoutes,
      allRoutes
    }, null, 2));

    console.log('✅ Created prerender-routes.json for reference');

  } catch (error) {
    console.error('❌ Error fetching blogs:', error.message);
    process.exit(1);
  }
}

main();
