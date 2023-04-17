import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  ogsite?: string;
  twhandle?: string;
};

const SEO = ({
  title = "Foot Locker - Home of Shoes",
  description = "Home of Shoes",
  image = "",
  url = process.env.NEXT_PUBLIC_APP_URL,
  keywords = "shoes, footwear",
  ogsite = "Foot Locker",
  twhandle = "@jeghaire",
}: SEOProps): JSX.Element => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:locale" content="en_NG" key="oglocale" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content={description} key="desc" />
      <meta name="keywords" content={keywords} key="kwords" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={image} key="ogimg" />
      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:site_name" content={ogsite} key="ogsite" />
      <meta property="twitter:title" content={title} key="twtitle" />
      <meta property="twitter:description" content={description} key="twdesc" />
      <meta property="twitter:image" content={image} key="twimg" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twcard"
      />
      <meta key="twsite" name="twitter:site" content={twhandle} />
      <meta key="twhandle" name="twitter:creator" content={twhandle} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
