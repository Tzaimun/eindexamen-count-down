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
      <StyleDropdown>
        <StyledH1Exam>
          <StyledSpan onClick={() => handleTitleClick()}>{currentExam}</StyledSpan>
        </StyledH1Exam>
        {showExams 
          ? 
          <StyledUl active={showExams} className="StyledUlComponent">
              {examList}
          </StyledUl>
          : 
          null}
      </StyleDropdown> 
      <StyledH1>
        <StyledSpan>Eindexamen</StyledSpan>
      </StyledH1>
    </StyledDiv>
    
  );
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  
`

const StyleDropdown = styled.div`
  position: relative;
  width: 14em;
`

const StyledH1 = styled.h1`
  text-align: center;
  color: ${props => props.theme.primary};
  margin: 0;
`

const StyledH1Exam = styled.h1`
  text-align: center;
  border-bottom: .1em solid ${props => props.theme.highlight};
  border-radius: .1em;
  color: ${props => props.theme.primary};
  margin: 0;
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
  top: 2em;
  left: 0em;
  width: 13em;
  padding: 0 0em 0em 0em;
  animation: ${
    props => props.active ? 
      css`${MenuAnimation} 0.5s` :
      ''
  };
  transform-origin: top center;
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