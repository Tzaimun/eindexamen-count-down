import { schemes } from './themes'

let randomInt = Math.floor(Math.random(0, schemes.length) * schemes.length)
const scheme = schemes.find(element => element.id === randomInt)

export const theme = {
  borderRadius: 12,
  breakpoints: {
    desktop: 1000,
  },
  scheme: scheme.theme,
  sidewidth: 300,
  spacing: {
    1: 0.5,
    2: 1,
    3: 2,
    4: 4,
    5: 8
  }
}

