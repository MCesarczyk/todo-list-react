import { styled } from 'styled-components';
import { Button, ButtonVariants } from 'ui/atoms/Button';
import { sampleButtons } from './fixtures';

interface ButtonConfig {
  id: number;
  variant: string;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
}

interface FormButtonsProps {
  buttons: ButtonConfig[];
}

export const FormButtons = ({ buttons = sampleButtons }: FormButtonsProps) => {
  return (
    <ButtonsWrapper>
      {buttons.map(({ id, variant, onClick, disabled, children }) => (
        <Button key={id} $variant={variant as ButtonVariants} onClick={onClick} disabled={disabled}>
          {children}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

FormButtons.displayName = 'FormButtons';
