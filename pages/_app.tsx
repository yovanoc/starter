import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import SEO from "../next-seo.config";
import { appWithTranslation } from "next-i18next";
import { client } from "graphql/gqless";
import AppContainer from "components/AppContainer";
import { darkTheme, globalStyles } from "components/stitches.config";
import { ThemeProvider } from "next-themes";

if (process.env.NODE_ENV === "development") {
  import("@gqless/logger").then(({ createLogger }) => {
    const logger = createLogger(client, {
      // Custom options...
    });
    logger.start();
  });
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles();
  return (
    <AppContainer>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: darkTheme.className }}
        defaultTheme="system"
      >
        <DefaultSeo {...SEO} />
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContainer>
  );
}

export default appWithTranslation(MyApp);
