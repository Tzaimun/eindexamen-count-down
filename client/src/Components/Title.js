import { useState, useContext } from 'react'
import { exams } from '../Constants/exams'
import styled, { keyframes, css } from 'styled-components'
import { ExamContext } from '../Context/ExamProvider'

function Title() {

  const [showExams, setShowExams] = useState(false)
  const {currentExam, changeCurrentExam } = useContext(ExamContext)
  
  const handleTitleClick = () => {
    setShowExams(!showExams)
  }

  const handleLiClick = (exam) => {
    console.log(exam)
    changeCurrentExam(exam)
    setShowExams(!showExams)
  }

  const examKeys = Object.keys(exams)
  const examList = examKeys.map((exam) => {
    return <StyledLi onClick={() => handleLiClick(exam)} key={exam}>{exam}</StyledLi>
  })

  return (
    <StyledDiv>
      <StyledH1>
        <StyledSpan onClick={() => handleTitleClick()}>{currentExam}</StyledSpan> Eindexamen
      </StyledH1>
      {showExams 
        ? 
        <StyledUl active={showExams} className="StyledUlComponent">
            {examList}
        </StyledUl>
        : 
        null}
    </StyledDiv>
    
  );
}

const StyledDiv = styled.div`
  position: relative;
`

const StyledH1 = styled.h1`
  text-align: center;
  color: ${props => props.theme.primary};
`

const StyledSpan = styled.span`
  cursor: pointer;
`

const StyledUl = styled.ul`
  list-style-type: none;
  background-color: ${props => props.theme.primary};
  border: .5em solid ${props => props.theme.primary};
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3em;
  left: 4.6em;
  padding: 0 1em 1em 1em;
  animation: ${
    props => props.active ? 
      css`${MenuAnimation} 0.5s` :
      ''
  };
  transform-origin: top center;
  
  @media screen and (min-width: 768px) {
    top: 3em;
    left: -1em;
  }
`

const StyledLi = styled.li`
  color: ${props => props.theme.secondary};
  border-bottom: .15em solid ${props => props.theme.highlight};
  border-radius: 0.15em;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.highlight};
  }
`

const MenuAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-20deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
` 

export default Title;

//   top: 15vh;
//  left: 30vw;