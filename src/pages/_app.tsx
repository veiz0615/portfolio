import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Noto_Sans_JP, Lora } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], weight: '400' })
const loraEn = Lora({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <div className={clsx(notoSansJp.className, loraEn.className)}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
