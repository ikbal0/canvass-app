import '../styles/globals.css'
import '../styles/layout.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../component/navigation-h.css'
import Head from 'next/head'
import Header from '../component/layout/Header'
import Navigation from '../component/navigation-h'
import Footer from '../component/layout/footer'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from "next-auth/react"

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {

  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </SessionProvider>
    )
      
  }

  return (
    <>
      <Head>
        <title>Personal Template</title>
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Navigation/>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
