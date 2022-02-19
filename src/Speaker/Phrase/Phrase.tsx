import React from 'react';
import { PhraseStyle, Poligon } from './PhraseStyle';
import { Word } from './Word';
import { initialData } from '../../DnDBlock/initial-data';


export function Phrase() {
  const prase = initialData.phrase;
  const delimiter = ' ' || ', ';
  const phraseArray = prase.split(delimiter);

  return (
    <PhraseStyle>
      {
        phraseArray.map(word => {
          const wordIndex = `${'text-' + phraseArray.findIndex(wordI => wordI == word)}`;
          return <Word key = {wordIndex} text={word}/>;
        })
      }
      <Poligon>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
          <path d="M21.5084 2.20795L21 20.5H11L1 21L20.0084 2.20795H21.5084Z" fill="white"/>
          <path d="M19.5 1.5L1.65806 19.7774C1.03979 20.4108 1.48854 21.4759 2.37364 21.4759H20" stroke="#252525" stroke-width="2"/>
        </svg>
      </Poligon>
    </PhraseStyle>
  );
}
