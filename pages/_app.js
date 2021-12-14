import * as React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { AuthUserProvider } from '@/contexts/AuthUserContext'

// Import Font Styles
// You can find fonts at https://fonts.adobe.com/
// @import url('https://use.typekit.net/tyl1imq.css');
// import '@/styles/fonts.css';

// Add a custom scrollbar
// import '@/styles/custom-scrollbar.css'

// Import Tailwind Styles
import '@/styles/tailwind.css'

// Global styles
import '@/styles/globals.css'

// import 'nprogress/nprogress.css';
import '@/styles/custom-nprogress.css'

// Web3 modal
import '@/styles/custom-web3.css'

NProgress.configure({
  showSpinner: false,
})

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  )
}

export default MyApp
