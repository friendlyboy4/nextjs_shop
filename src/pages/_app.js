import Head from 'next/head';
import 'normalize.css';
import '@/styles/globalStyles.css';
import { ThemeProvider } from 'styled-components';
import { globals } from '@/styles/StyledTheme';
import Layout from '@/components/layout/components/Layout';
import { DefaultSeo } from 'next-seo';

const SEO = {
  titleTemplate: 'Doc Sprocket | %s'
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Built by House of Sprocqué" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
