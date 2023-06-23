import Head from 'next/head';
import 'normalize.css';
import '@/styles/globalStyles.css';
import { ThemeProvider } from 'styled-components';
import { globals } from '@/styles/StyledTheme';
import Layout from '@/components/layout/components/Layout';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Built by House of Sprocqué" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon.png?<generated>" type="image/<generated>" sizes="<generated>" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#00ff00" />
      </Head>
      <DefaultSeo 
        titleTemplate = '%s | Doc Sprocket'
      />
      <ThemeProvider theme={globals}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
