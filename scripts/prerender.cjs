/**
 * Custom prerender script using modern Puppeteer
 * This replaces react-snap for better compatibility with modern JavaScript
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const PORT = 45678;

// Read routes from prerender-routes.json or use defaults
function getRoutes() {
  const routesFile = path.join(__dirname, '..', 'prerender-routes.json');
  if (fs.existsSync(routesFile)) {
    const data = JSON.parse(fs.readFileSync(routesFile, 'utf8'));
    return  data.blogRoutes || [];
  }
  // Default routes
  return [
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
}

// Simple static file server
function createServer() {
  return http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
    
    // Handle SPA routing - serve index.html for non-file routes
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, fallbackContent) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fallbackContent);
          });
        } else {
          res.writeHead(500);
          res.end('Server Error');
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
}

async function prerender() {
  const routes = getRoutes();
  console.log(`\n🚀 Starting prerender for ${routes.length} routes...\n`);

  const server = createServer();
  server.listen(PORT);
  console.log(`📡 Server running on http://localhost:${PORT}\n`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set a reasonable viewport
    await page.setViewport({ width: 1440, height: 900 });

    // Set user agent to identify as prerender
    await page.setUserAgent('ReactSnap');

    let successCount = 0;
    let errorCount = 0;

    for (const route of routes) {
      try {
        const url = `http://localhost:${PORT}${route}`;
        console.log(`📄 Rendering: ${route}`);

        // Navigate to the page
        await page.goto(url, { 
          waitUntil: 'networkidle0',
          timeout: 130000 
        });

        // Wait for content to load (wait for body to have content)
        await page.waitForFunction(
          () => document.querySelector('#root')?.innerHTML?.length > 100,
          { timeout: 10000 }
        ).catch(() => {
          console.log(`   ⚠️ Content might not be fully loaded for ${route}`);
        });

        // Additional wait for async content
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the rendered HTML
        const html = await page.content();

        // Determine the output path
        let outputPath;
        if (route === '/') {
          outputPath = path.join(DIST_DIR, 'index.html');
        } else if (route === '/404.html') {
          outputPath = path.join(DIST_DIR, '404.html');
        } else {
          // Create directory structure for clean URLs
          const routeDir = path.join(DIST_DIR, route);
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          outputPath = path.join(routeDir, 'index.html');
        }

        // Write the prerendered HTML
        fs.writeFileSync(outputPath, html, 'utf8');
        console.log(`   ✅ Saved: ${outputPath.replace(DIST_DIR, 'dist')}`);
        successCount++;

      } catch (error) {
        console.error(`   ❌ Error rendering ${route}: ${error.message}`);
        errorCount++;
      }
    }

    console.log(`\n✨ Prerender complete!`);
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📁 Output: ${DIST_DIR}\n`);

  } catch (error) {
    console.error('❌ Prerender failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
}

prerender();
