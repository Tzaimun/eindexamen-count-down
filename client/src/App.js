import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import Container from './Components/Container'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <header className="App-header">
        </header>
        <Container></Container>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  margin: 0;
  background-color: ${props => props.theme.scheme.backgroundColor};
`
export default App;
