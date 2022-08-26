import React from 'react';

import * as S from './styles';
import IInput from './IInput';

export function Input({ ...rest }: IInput) {
  return <S.Input data-testid="input" {...rest} />;
}
