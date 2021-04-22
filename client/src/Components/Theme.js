import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../Context/ThemeStore'

const themes = {
  dusted_with_snow: {
    primary: '#0f4454',
    secondary: '#cab5a7',
    highlight: '#fcf8f5',
    background: '#05263b',
  },
  rosy_afters: {
    primary: '#623b41',
    secondary: '#fdd55e',
    highlight: '#f3e4e2',
    background: '#ff6f61',
  },
  pastel_blonde: {
    primary: '#85d2d0',
    secondary: '#f4b9b8',
    highlight: '#fff4bd',
    background: '#887bb0',
  },
  rosy_dew: {
    primary: '#f8afa6',
    secondary: '#fadcd9',
    highlight: '#f9f1f0',
    background: '#f79489',
  },
  salmon_sushi: {
    primary: '#74bdcb',
    secondary: '#ffa384',
    highlight: '#e7c5da',
    background: '#efe7bc',
  },
  melon_and_mint: {
    primary: '#ebeef1',
    secondary: '#3b9778',
    highlight: '#f4b18c',
    background: '#efe7bc',
  },
  sun_kissed_rock: {
    primary: '#f5631a',
    secondary: '#ffa303',
    highlight: '#ffe0ae',
    background: '#a2abce',
  },
  halved_lemons: {
    primary: '#3aa3a0',
    secondary: '#f7d330',
    highlight: '#f7dd80',
    background: '#8ae2e0',
  },
  kiddie_shawl: {
    primary: '#a44757',
    secondary: '#f8d3b7',
    highlight: '#b4f8c8',
    background: '#f7ac32',
  }
}

const GlobalStyle = createGlobalStyle`
 * {
   transition: all 0.5s;
 }
`

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  console.log(themes[theme])
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme;