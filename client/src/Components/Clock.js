import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { ExamContext } from '../Context/ExamProvider'
import { exams } from '../Constants/exams'

function Clock() {

  const {currentExam} = useContext(ExamContext)
  console.log(currentExam)

  const calculateCountdown = () => {
    const examDate = exams[currentExam]
    let difference = +examDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    };
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateCountdown())
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <StyledDiv>
      <StyledHeader>{timeLeft.days} dagen</StyledHeader>
      <StyledParagraph>{timeLeft.hours} uur, {timeLeft.minutes} minuten en {timeLeft.seconds} seconden</StyledParagraph>
    </StyledDiv>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  color: ${props => props.theme.secondary};
  font-size: 3em;
`

const StyledParagraph = styled.p`
  text-align: center;
  color: ${props => props.theme.highlight};
  font-size: 2em;
  font-weight
`
  
const StyledDiv = styled.div`
`
export default Clock;
  