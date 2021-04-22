import React, { useState} from 'react'
import { themes } from '../Constants/themes'

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {

  let randomInt = Math.floor(Math.random(0, themes.length) * themes.length)
  let randomTheme = themes[randomInt]
  const [theme, setTheme] = useState(randomTheme)

  const getRandomTheme = () => {
    let randomTheme = ''
    if (theme) {
      while (true) {
        let randomInt = Math.floor(Math.random(0, themes.length) * themes.length)
        randomTheme = themes[randomInt]
        console.log(theme, randomTheme)
        if (randomTheme !== theme) {
          break;
        }
      }
    }

    return randomTheme
  }

  const changeTheme = () => setTheme(getRandomTheme())

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeStore, ThemeContext }