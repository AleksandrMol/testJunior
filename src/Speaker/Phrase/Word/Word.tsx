import React from 'react';
import { WordStyle } from './WordStyles';

interface IWordProps {
  text: string,
}

export function Word({text}: IWordProps) {
  return (
    <WordStyle >
      {text}
    </WordStyle>
  );
}
