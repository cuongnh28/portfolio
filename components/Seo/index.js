import React from 'react';
import Head from 'next/head';

const Seo = ({
  title = 'Alex',
  description = 'Hey! I am Alex, a full-stack developer from Vietnam.',
  OGImage = 'https://portfolio.haidinh.link/profile.jpeg',
  OGType = 'website',
  canonicalUrl = 'https://portfolio.haidinh.link/',
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Alex`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta name='author' content='Alex' />
        <meta name='author' content='Dinh Van Hai' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />

        {/* canonical link */}
        <link rel='canonical' href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content={OGType} />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={OGImage} />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='article:section' content={title} />
        <meta property='article:published_time' content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
