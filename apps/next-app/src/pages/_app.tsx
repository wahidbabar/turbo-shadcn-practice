import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages} locale="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
