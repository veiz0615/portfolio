import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "next/font/google";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className={notoSansJp.className}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
