import { styled } from 'styled-components';
import { TextWrapper } from '~/ui/atoms/TextWrapper';
import { Thumb } from '~/ui/atoms/Thumb';

interface ListItemProps {
  hidden: boolean;
  done: boolean;
  children: React.ReactNode;
  onToggleDone: () => void;
  onDelete: () => void;
}

export const ListItem = ({ hidden = false, done, children, onToggleDone, onDelete }: ListItemProps) => (
  <StyledListItem $hidden={hidden}>
    <Thumb variant={done ? 'DONE' : 'UNDONE'} onClick={onToggleDone}>
      {done ? '✔' : ''}
    </Thumb>
    <TextWrapper $variant={done ? 'STRIKETHROUGH' : 'PRIMARY'}>{children}</TextWrapper>
    <Thumb variant="REMOVE" onClick={onDelete}>
      🗑
    </Thumb>
  </StyledListItem>
);

const StyledListItem = styled.li<{ $hidden?: boolean }>`
  display: ${({ $hidden }) => ($hidden ? 'none' : 'grid')};
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 6px;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${({ theme }) => theme.color.borders};
`;

ListItem.displayName = 'ListItem';
