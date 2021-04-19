import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../Context/ThemeStore'

function Button() {

  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <StyledContainer>
      <StyledButton onClick={changeTheme}>Verander Kleurenschema</StyledButton>
    </StyledContainer>

  );
}
  
const StyledContainer = styled.div`
`

const StyledButton = styled.button`
  border: 0.5em solid ${props => props.theme.primary};
  border-radius: 0.5em;
  height: 10vh;
  width: 75vw;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};
  font-size: 1.5em;
  &:hover{
    background-color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.highlight};
  }
`

export default Button;
  