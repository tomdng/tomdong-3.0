import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { accent, textPrimary } from '../../settings';

const StyledSmallButton: AnyStyledComponent = styled.a`
  color: ${textPrimary};
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  p:hover {
    color: ${accent};
  }
`;

interface SmallButtonProps {
  text: string;
  link: string;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  text,
  link,
}): JSX.Element => {
  return (
    <StyledSmallButton href={link}>
      <p>{text}</p>
    </StyledSmallButton>
  );
};

export { SmallButton };
