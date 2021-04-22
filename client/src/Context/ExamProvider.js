import React, { useState} from 'react'

export const ExamContext = React.createContext();

const ExamProvider = ({ children }) => {
  const [currentExam, setCurrentExam] = useState('Latijn')
  
  const changeCurrentExam = (exam) => setCurrentExam(exam)

  return (
    <ExamContext.Provider
      value={{
        currentExam,
        changeCurrentExam
      }}
      >
      {children}
    </ExamContext.Provider>
  )
}

export default ExamProvider