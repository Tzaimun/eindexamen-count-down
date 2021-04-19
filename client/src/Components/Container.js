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
  height: 100%;
  width: 80vw;
  padding: 5vh 10vw 0 10vw;
  
`

export default Container;
  