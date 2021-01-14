import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'emotion-theming'

import { darkTheme, lightTheme } from '@/themes/index'

import Layout from '@/components/templates/Layout'
import GlobalStyle from '@/components/GlobalStyle'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />

        <Layout setIsDark={setIsDark} isDark={isDark}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
