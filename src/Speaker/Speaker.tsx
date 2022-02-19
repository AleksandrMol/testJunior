import React from 'react';
import { HumanIcon } from '../icons';
import { Phrase } from './Phrase';
import { SpeakerStyle } from './SpeakerStyle';

export function Speaker() {
  return (
    <SpeakerStyle>
      <HumanIcon/>
      <Phrase/>
    </SpeakerStyle>
  );
}
