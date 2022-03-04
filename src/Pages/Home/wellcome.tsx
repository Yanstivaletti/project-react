import React from 'react';
import Participants from '../../components/Participants';
import { Div, WrapperContentHome } from './style';
import { ContentProps } from './types';

export function WellCome({ title, subTitle }: ContentProps) {
  return (
    <WrapperContentHome>
      <Div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </Div>
      <Participants />
    </WrapperContentHome>
  );
}
