import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, path }) {
  const siteName = "Codify Internal Portal";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = "https://codify.ptjagad.com"; // Ganti dengan URL asli Anda

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Codify internal operational portal for business transformation."} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/Logo_Codify.png`} />
      <meta property="og:url" content={`${siteUrl}${path || ''}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/Logo_Codify.png`} />
    </Helmet>
  );
}

export default SEO;
