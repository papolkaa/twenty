import styled from '@emotion/styled';

import { DropdownButton } from '@/ui/dropdown/components/DropdownButton';
import {
  DropdownComponents,
  EntityTableHeaderOptionsProps,
} from '@/ui/table/components/DropdownComponents';

const StyledDropdownContainer = styled.div`
  left: 0px;
  position: absolute;
  top: 32px;
  z-index: 1;
`;

export const EntityTableHeaderOptions = ({
  column,
  isFirstColumn,
  isLastColumn,
  primaryColumnKey,
}: EntityTableHeaderOptionsProps) => {
  return (
    <StyledDropdownContainer>
      <DropdownButton
        dropdownId={column.key + '-header'}
        dropdownComponents={
          <DropdownComponents
            column={column}
            isFirstColumn={isFirstColumn}
            isLastColumn={isLastColumn}
            primaryColumnKey={primaryColumnKey}
          />
        }
        dropdownHotkeyScope={{ scope: column.key + '-header' }}
      />
    </StyledDropdownContainer>
  );
};
