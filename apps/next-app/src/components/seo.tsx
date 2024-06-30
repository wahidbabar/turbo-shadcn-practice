import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  locale: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, locale }) => {
  const siteName = "My Next.js Blog";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default SEO;
