import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          borderRadius: '50px',
          background: '#333',
          color: '#fff',
          padding: '15px',
          fontSize: '15px',
        },
      }}
    />
    <Component {...pageProps} />
  </>
}
