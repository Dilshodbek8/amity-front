import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#0A8FDC" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          {/* <script src="https://telegram.org/js/telegram-web-app.js" />
=======
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://telegram.org/js/telegram-web-app.js" />
>>>>>>> a7045959632bcb408e0268fe4aeda8a92c990059
          <script src="../../Bot/bot.js" />
          <script src="../../public/tawkto" /> */}
        </Head>
        <body>
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
