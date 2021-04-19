import styled  from 'styled-components'
import Container from './Components/Container'
import Theme from './Components/Theme'
import { ThemeStore } from './Context/ThemeStore'

function App() {
  return (
    <ThemeStore>
      <Theme>
        <StyledApp>
          <header className="App-header">
          </header>
          <Container></Container>
        </StyledApp>
      </Theme>
    </ThemeStore>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  margin: 0;
  background-color: ${props => props.theme.background};
`
export default App;
