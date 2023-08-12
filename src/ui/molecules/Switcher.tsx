import { styled } from 'styled-components';

import { sampleSwitcherButtons } from 'ui/molecules/fixtures';
import { Thumb } from '~/ui/atoms/Thumb';

interface ButtonProps {
  key: number;
  value: string;
  onClick?: () => void;
}

interface SwitcherProps {
  buttons: ButtonProps[];
}

export const Switcher = ({ buttons = sampleSwitcherButtons }: SwitcherProps) => (
  <SwitcherWrapper>
    {buttons.map(({ key, value, onClick }) => (
      <Thumb variant="TEXT" key={key} onClick={onClick}>
        {value}
      </Thumb>
    ))}
  </SwitcherWrapper>
);

const SwitcherWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
