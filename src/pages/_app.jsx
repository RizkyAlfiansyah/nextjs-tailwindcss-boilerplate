import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  if (typeof window !== "undefined") {
    return (
      <>
        <Head>
          <title>Coachcube</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Coachcube" />
          <meta name="og:title" property="og:title" content="Coachcube" />
          <link rel="icon" href="/icon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  } else {
    return <></>
  }
}

export default MyApp;
