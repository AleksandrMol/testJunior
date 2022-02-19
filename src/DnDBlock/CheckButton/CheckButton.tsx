import React, { useEffect, useState } from 'react';
import { CheckButtonStyle, TextButtonContainer, TextWrong } from './CheckButtonStyle';

interface ICheckButton {
  correctAnswer: string,
  answer: string,
  disabled: boolean,
  wrong: boolean,
}

export function CheckButton({disabled, correctAnswer, answer, wrong}: ICheckButton) {

  const [isWrong, setIsWrong] = useState(wrong);

  if (answer === ' ' && isWrong != false) {
    setIsWrong(false)
  }

  const handleChecker = () => {
    if(answer != correctAnswer){
      setIsWrong(true)
    }
    else{
      setIsWrong(false)
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = `http://api.voicerss.org/?key=8d5e052ff84544ad827e84ce5605c43b&hl=en-us&src=${answer}`;
      audio.play();
    }
    
    console.log('Правильный ответ -> ' + correctAnswer);
  }
    
  return (
    <TextButtonContainer>
      { isWrong && 
        (
          <TextWrong>
            Something wrong!
          </TextWrong>
        )
      }
      <CheckButtonStyle disabled = {disabled} onClick={handleChecker}>
        Check
      </CheckButtonStyle>
    </TextButtonContainer>
  );
}
