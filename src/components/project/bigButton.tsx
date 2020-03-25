import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { grey, textPrimaryLight } from '../../settings';

const StyledButton: AnyStyledComponent = styled.button`
  width: 10rem;
  height: 2.5rem;
  margin: 0.5rem 0;
  background: ${grey};
  border: none;
  border-radius: 5px;
  color: ${textPrimaryLight};
  font-size: 18px;
`;

interface BigButtonProps {
  text: string;
}

const BigButton: React.FC<BigButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export { BigButton };
