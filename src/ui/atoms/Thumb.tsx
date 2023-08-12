import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export type ThumbVariants = 'PRIMARY' | 'DONE' | 'UNDONE' | 'REMOVE';

type ThumbStyles = Required<Pick<CSSProperties, 'backgroundColor'>>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<ThumbVariants, ThumbStyles> = {
  PRIMARY: {
    backgroundColor: 'mainTeal',
  },
  DONE: {
    backgroundColor: 'toggleDone',
  },
  UNDONE: {
    backgroundColor: 'toggleDone',
  },
  REMOVE: {
    backgroundColor: 'remove',
  },
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
  color: ${({ theme }) => theme.color.fontLight};
  background-color: ${(props) => props.theme.color[styles[props.$variant!].backgroundColor]};
  border: none;
  padding: 5px;
  width: 28px;
  height: 28px;
  transition: 0.5s;

  &:hover {
    filter: brightness(130%);
  }

  &:active {
    filter: brightness(160%);
    box-shadow: inset 1px 1px 3px ${({ theme }) => theme.color.shadows};
  }
`;

Thumb.defaultProps = { $variant: 'PRIMARY' };
Thumb.displayName = 'Thumb';
