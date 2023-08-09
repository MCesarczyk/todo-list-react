import { styled } from 'styled-components';
import { Button, ButtonVariants } from 'ui/atoms/Button';

interface ButtonConfig {
  variant: string;
  onClick: () => void;
  children: string;
  disabled?: boolean;
}

interface FormButtonsProps {
  buttonsConfig: ButtonConfig[];
}

export const FormButtons = ({ buttonsConfig }: FormButtonsProps) => {
  return (
    <ButtonsWrapper>
      <>
        {buttonsConfig.map(({ variant, onClick, disabled, children }) => (
          <Button variant={variant as ButtonVariants} onClick={onClick} disabled={disabled}>
            {children}
          </Button>
        ))}
      </>
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
