import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <meta name='application-name' content='MyApp' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Icons'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
