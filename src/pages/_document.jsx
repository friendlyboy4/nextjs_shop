import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Jost&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         })

//       const initialProps = await Document.getInitialProps(ctx)
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       }
//     } finally {
//       sheet.seal()
//     }
//   }
//   return (
//     <Html lang="en">
//       <Head>
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true}/>
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Jost&display=swap" rel="stylesheet"/>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }