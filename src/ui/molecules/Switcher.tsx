import { styled } from 'styled-components';
import { sampleSwitcherButtons } from 'ui/molecules/fixtures';

interface ButtonProps {
  key: number;
  value: string;
  onClick?: () => void;
}

interface SwitcherProps {
  buttons: ButtonProps[];
}

export const Switcher = ({ buttons = sampleSwitcherButtons }: SwitcherProps) => (
  <div>
    {buttons.map(({ key, value, onClick }) => (
      <Button key={key} value={value} onClick={onClick}>
        {value}
      </Button>
    ))}
  </div>
);

export const Button = styled.button`
  color: ${({ theme }) => theme.color.fontDark};
  background-color: ${({ theme }) => theme.color.background};
  font-weight: 700;
  border: solid 1px;
  padding: 5px;
  margin: 5px;
  transition: background 0.5s, transform 1s;

  &:hover {
    filter: brightness(130%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(160%);
    box-shadow: inset 1px 1px 2px darkgrey;
  }
`;
