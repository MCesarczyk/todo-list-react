import { CSSProperties } from 'react';
import styled from 'styled-components';

type ButtonVariants = 'PRIMARY' | 'SECONDARY' | 'OUTLINED';

type ButtonStyles = Required<
  Pick<CSSProperties, 'color' | 'backgroundColor' | 'borderColor'> & {
    hoverBackgroundColor: CSSProperties['backgroundColor'];
    hoverColor?: CSSProperties['color'];
  }
>;

export type Palette<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles;
};

const styles: Palette<ButtonVariants, ButtonStyles> = {
  PRIMARY: {
    color: 'white',
    backgroundColor: 'mainTeal',
    borderColor: 'mainTeal',
    hoverBackgroundColor: 'mainBlue',
    hoverColor: 'white',
  },
  SECONDARY: {
    color: 'mainBlue',
    backgroundColor: 'lightTeal',
    borderColor: 'lightTeal',
    hoverBackgroundColor: 'white',
    hoverColor: 'mainBlue',
  },
  OUTLINED: {
    color: 'primary',
    backgroundColor: 'transparent',
    borderColor: 'primary',
    hoverBackgroundColor: 'primary',
    hoverColor: 'white',
  },
};

interface ButtonProps {
  variant?: ButtonVariants;
}

export const ButtonIcon = styled.i`
  font-weight: bold;
  font-style: normal;
  line-height: 1;
  display: inline-block;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.color[styles[props.variant!].color]};
  background-color: ${(props) => props.theme.color[styles[props.variant!].backgroundColor]};
  border: 1px solid ${(props) => props.theme.color[styles[props.variant!].borderColor]};
  padding: 5px;
  padding: 10px;
  margin: 10px;
  transition: background 0.5s, transform 1s;

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled,
  &:disabled:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.grey};
    border-color: ${({ theme }) => theme.color.grey};
  }

  &:enabled:hover {
    color: ${(props) =>
      props.theme.color[styles[props.variant!].hoverColor] || props.theme.color[styles[props.variant!].color]};
    background-color: ${(props) => props.theme.color[styles[props.variant!].hoverBackgroundColor!]};
    border-color: ${(props) => props.theme.color[styles[props.variant!].hoverBackgroundColor!]};
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(160%);
    box-shadow: inset 1px 1px 2px darkgrey;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

Button.defaultProps = { variant: 'PRIMARY' };
Button.displayName = 'Button';
