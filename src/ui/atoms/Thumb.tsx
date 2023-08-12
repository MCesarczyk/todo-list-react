import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export type ThumbVariants = 'PRIMARY' | 'DONE' | 'UNDONE' | 'REMOVE' | 'TEXT';

type ThumbStyles = Required<Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'>>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<ThumbVariants, ThumbStyles> = {
  PRIMARY: {
    color: 'white',
    backgroundColor: 'mainTeal',
    borderColor: 'mainTeal',
  },
  DONE: {
    color: 'white',
    backgroundColor: 'toggleDone',
    borderColor: 'toggleDone',
  },
  UNDONE: {
    color: 'white',
    backgroundColor: 'toggleDone',
    borderColor: 'toggleDone',
  },
  REMOVE: {
    color: 'white',
    backgroundColor: 'remove',
    borderColor: 'remove',
  },
  TEXT: {
    color: 'primaryText',
    backgroundColor: 'white',
    borderColor: 'primaryText',
  }
};

interface ThumbProps {
  variant?: ThumbVariants;
  children?: string;
  onClick?: () => void;
}

export const Thumb = ({ variant, children, onClick }: ThumbProps) => (
  <StyledThumb $variant={variant} onClick={onClick}>
    {children}
  </StyledThumb>
);

interface StyledThumbProps {
  $variant?: ThumbVariants;
}

const StyledThumb = styled.button<StyledThumbProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme.color[styles[props.$variant!].color]};
  background-color: ${(props) => props.theme.color[styles[props.$variant!].backgroundColor]};
  border: 1px solid ${(props) => props.theme.color[styles[props.$variant!].borderColor]};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
  width: 28px;
  height: 28px;
  transition: 0.5s;

  &:hover {
    filter: brightness(130%);
    transform: scale(1.05);
  }
  
  &:active {
    filter: brightness(160%);
    transform: scale(1);
    box-shadow: inset 1px 1px 3px ${({ theme }) => theme.color.shadows};
  }
`;

Thumb.defaultProps = { $variant: 'PRIMARY' };
Thumb.displayName = 'Thumb';
