import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "react-photo-view/dist/react-photo-view.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "./../utils/i18next";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Layout>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </I18nextProvider>
      </Layout>
    </>
  );
}
