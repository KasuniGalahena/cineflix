import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          border: '1px solid #d5d5d5',
          borderRadius: '12px',
          padding: '15px',
          fontSize: '15px',
          color: '#2a2a2a',
        },
      }}
    />
    <Component {...pageProps} />
  </>
}
