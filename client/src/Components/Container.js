import Title from './Title'
import Clock from './Clock'
import Button from './Button'
import styled from 'styled-components'

function Container() {

  return (
    <StyledContainer className="Container">
      <Title></Title>
      <Clock></Clock>
      <Button></Button>
    </StyledContainer>

  );
}
  
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 80vw;
  padding: 0 10vw 0 10vw;
  
`

export default Container;
  