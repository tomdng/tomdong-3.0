import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { accent, grey, textPrimaryLight } from '../../settings';

const StyledButton: AnyStyledComponent = styled.button`
  width: 10rem;
  height: 3rem;
  margin: 0.5rem 0;
  background: ${grey};
  border: none;
  border-radius: 5px;
  color: ${textPrimaryLight};
  font-size: 18px;

  &:hover {
    background: ${accent};
    cursor: pointer;
  }
`;

const StyledLink: AnyStyledComponent = styled.a`
  text-decoration: none;
`;

interface BigButtonProps {
  text: string;
  link: string;
}

const BigButton: React.FC<BigButtonProps> = ({ text, link }) => {
  return (
    <StyledLink href={link}>
      <StyledButton>{text}</StyledButton>
    </StyledLink>
  );
};

export { BigButton };
