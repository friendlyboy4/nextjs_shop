import Script from "next/script";

export default function GoogleAnalytics({ GA_TRACKING_ID, GTM_ID }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        TRACKING
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('set', {cookie_flags: 'SameSite=None;Secure'});
          `,
        }}
      />
    </>
  );
}
