import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export type TextWrapperVariants = 'PRIMARY' | 'STRIKETHROUGH';

type TextWrapperStyles = Required<Pick<CSSProperties, 'textDecoration'>>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<TextWrapperVariants, TextWrapperStyles> = {
  PRIMARY: {
    textDecoration: 'none',
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
};

interface StyledTextWrapperProps {
  $variant?: TextWrapperVariants;
}

export const TextWrapper = styled.span<StyledTextWrapperProps>`
  word-break: break-all;
  text-decoration: ${(props) => styles[props.$variant!].textDecoration};
`;

TextWrapper.defaultProps = { $variant: 'PRIMARY' };
TextWrapper.displayName = 'TextWrapper';
