import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactElement, useContext } from 'react';
import { AppTooltip, IconComponent, TooltipDelay } from 'twenty-ui';

import { FieldContext } from '@/object-record/record-field/contexts/FieldContext';
import { useFieldFocus } from '@/object-record/record-field/hooks/useFieldFocus';
import { RecordInlineCellValue } from '@/object-record/record-inline-cell/components/RecordInlineCellValue';
import { EllipsisDisplay } from '@/ui/field/display/components/EllipsisDisplay';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';

import { useRecordInlineCellContext } from './RecordInlineCellContext';

const StyledIconContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.tertiary};
  display: flex;
  width: 16px;

  svg {
    align-items: center;
    display: flex;
    height: 16px;
    justify-content: center;
    width: 16px;
  }
`;

const StyledLabelAndIconContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.tertiary};
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const StyledValueContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 0;
`;

const StyledLabelContainer = styled.div<{ width?: number }>`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.sm};
  width: ${({ width }) => width}px;
`;

const StyledInlineCellBaseContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  display: flex;

  gap: ${({ theme }) => theme.spacing(1)};

  user-select: none;

  justify-content: center;
`;

export const StyledSkeletonDiv = styled.div`
  height: 24px;
`;

export type RecordInlineCellContainerProps = {
  readonly?: boolean;
  IconLabel?: IconComponent;
  label?: string;
  labelWidth?: number;
  showLabel?: boolean;
  buttonIcon?: IconComponent;
  editModeContent?: ReactElement;
  editModeContentOnly?: boolean;
  displayModeContent: ReactElement;
  customEditHotkeyScope?: HotkeyScope;
  isDisplayModeFixHeight?: boolean;
  disableHoverEffect?: boolean;
  loading?: boolean;
  isCentered?: boolean;
};

export const RecordInlineCellContainer = () => {

  const context = useRecordInlineCellContext();
  if (!context) {
    return;
  }
  const {
    readonly,
    IconLabel,
    label,
    labelWidth,
    showLabel,
    buttonIcon,
    editModeContent,
    displayModeContent,
    customEditHotkeyScope,
    editModeContentOnly,
    isDisplayModeFixHeight,
    disableHoverEffect,
    loading,
    isCentered,
  } = context;

  const { entityId, fieldDefinition } = useContext(FieldContext);

  const { setIsFocused } = useFieldFocus();

  const handleContainerMouseEnter = () => {
    if (!readonly) {
      setIsFocused(true);
    }
  };

  const handleContainerMouseLeave = () => {
    if (!readonly) {
      setIsFocused(false);
    }
  };

  const theme = useTheme();
  const labelId = `label-${entityId}-${fieldDefinition?.metadata?.fieldName}`;

  return (
    <StyledInlineCellBaseContainer
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
    >
      {(IconLabel || label) && (
        <StyledLabelAndIconContainer id={labelId}>
          {IconLabel && (
            <StyledIconContainer>
              <IconLabel stroke={theme.icon.stroke.sm} />
            </StyledIconContainer>
          )}
          {showLabel && label && (
            <StyledLabelContainer width={labelWidth}>
              <EllipsisDisplay maxWidth={labelWidth}>{label}</EllipsisDisplay>
            </StyledLabelContainer>
          )}
          {/* TODO: Displaying Tooltips on the board is causing performance issues https://react-tooltip.com/docs/examples/render */}
          {!showLabel && !fieldDefinition?.disableTooltip && (
            <AppTooltip
              anchorSelect={`#${labelId}`}
              content={label}
              clickable
              noArrow
              place="bottom"
              positionStrategy="fixed"
              delay={TooltipDelay.shortDelay}
            />
          )}
        </StyledLabelAndIconContainer>
      )}
      <StyledValueContainer>
        <RecordInlineCellValue
          displayModeContent={displayModeContent}
          customEditHotkeyScope={customEditHotkeyScope}
          disableHoverEffect={disableHoverEffect}
          editModeContent={editModeContent}
          editModeContentOnly={editModeContentOnly}
          isDisplayModeFixHeight={isDisplayModeFixHeight}
          buttonIcon={buttonIcon}
          label={label}
          loading={loading}
          readonly={readonly}
          showLabel={showLabel}
          isCentered={isCentered}
        />
      </StyledValueContainer>
    </StyledInlineCellBaseContainer>
  );
};
