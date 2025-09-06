import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Devext - حلول التطوير والبرمجة المتقدمة",
  description = "نقدم حلول التطوير والبرمجة المتقدمة، تطبيقات ويب، تطبيقات موبايل، وحلول تقنية شاملة لجميع احتياجاتك التقنية",
  keywords = "تطوير ويب, برمجة, تطبيقات موبايل, حلول تقنية, تطوير تطبيقات, برمجة مواقع, تطوير برمجيات",
  canonical = "",
  ogImage = "/images/navbar/Logo_Devext-removebg-preview 1.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  nofollow = false,
  structuredData = null
}) => {
  const fullTitle = title.includes("Devext") ? title : `${title} | Devext`;
  const fullCanonical = canonical ? `https://devext.io${canonical}` : "https://devext.io";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <html lang="en" dir="ltr" />
      <meta name="language" content="English" />
      <meta name="locale" content="en_US" />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://devext.io${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Devext" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://devext.io${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Devext Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Force LTR Direction */}
      <style>{`
        html, body {
          direction: ltr !important;
          text-align: left !important;
        }
        * {
          direction: ltr !important;
        }
      `}</style>
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/images/Fav. icon.svg" />
      <link rel="apple-touch-icon" href="/images/Fav. icon.svg" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
