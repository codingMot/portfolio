import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { Header, Footer } from '../elements'
import SEO from '../seo'
import GlobalStyle from '../Global'
import { DarkTheme, LightTheme } from '../utilities'
import { useDarkmode } from '../helpers'
import { SharedAnimationLayout } from './SharedAnimationLayout'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: background-color 0.5s ease;
`

export default function Layout({
  children,
  location,
  BackgroundLightmode,
  BackgroundDarkmode,
}) {
  const [isDarkmode, toggleDarkmode] = useDarkmode()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }, [])

  return (
    <ThemeProvider theme={isDarkmode === true ? DarkTheme : LightTheme}>
      <SEO title="Matthias Oberholzer" />
      <GlobalStyle />
      {/* <AnimatePresence> */}
      <SharedAnimationLayout>
        <Container
          key={location.pathname}
          animate={{ opacity: 1 }}
          // exit={{
          //   opacity: 0,
          //   y: 80,
          // }}
          transition={{ duration: 0.5 }}
          style={{
            paddingLeft: location.pathname.includes('collections')
              ? `0`
              : `1rem`,
            paddingRight: location.pathname.includes('collections')
              ? `0`
              : `1rem`,
            backgroundColor: isDarkmode
              ? BackgroundDarkmode
              : BackgroundLightmode,
          }}
        >
          <Header isDarkmode={isDarkmode} toggleDarkmode={toggleDarkmode} />
          <main>{children}</main>
          <Footer isDarkmode={isDarkmode} toggleDarkmode={toggleDarkmode} />
        </Container>
      </SharedAnimationLayout>
      {/* </AnimatePresence> */}
    </ThemeProvider>
  )
}
