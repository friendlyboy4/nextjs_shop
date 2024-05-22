import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GoogleTagManager } from "@next/third-parties/google";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleTagManager htmId={process.env.GOOGLE_TAG_MANAGER_ID} />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={+true}
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gasoek+One&family=Inter:wght@200..600&family=Jost&family=Roboto+Slab&family=Roboto&family=Outfit&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
