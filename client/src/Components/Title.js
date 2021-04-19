import styled from 'styled-components'

function Title() {
  return (
    <StyledTitle>
      Latijn Eindexamen
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme.primary};
`
export default Title;
