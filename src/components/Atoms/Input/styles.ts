import styled from 'styled-components';
import { font, colors } from 'styles/theme';
import IInput from './IInput';

export const Input = styled.input<Omit<IInput, 'icon'>>`
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 1vw;
  font-weight: 400;
  font-size: 1.5vw;
`;
