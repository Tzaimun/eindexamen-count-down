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
  color: ${props => props.theme.scheme.primary};
  margin: -3.5em 0em 3em 0em;
`
export default Title;
