import React from 'react';
import { Header } from '../Header';
import { Speaker } from '../Speaker';
import { LayoutStyle } from './LayoutStyle';
import DnDBlock from '../DnDBlock/DnDBlock';
import { CheckButton } from '../DnDBlock/CheckButton';
import { initialData } from '../DnDBlock/initial-data';

export function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Speaker />
      <DnDBlock />
    </LayoutStyle>
  );
}
