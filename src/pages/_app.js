import Head from "next/head";
import "normalize.css";
import "@/styles/globalStyles.css";
import { ThemeProvider } from "styled-components";
import { globals } from "@/styles/StyledTheme";
import Layout from "@/components/layout/components/Layout";
import { DefaultSeo } from "next-seo";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="msapplication-TileColor"
          content="#ffc40d"
        />
        <meta
          name="theme-color"
          content="#00ff00"
        />
      </Head>
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <DefaultSeo titleTemplate="%s | Doc Sprocket" />
      <ThemeProvider theme={globals}>
        <Layout emu={pageProps.emu}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
