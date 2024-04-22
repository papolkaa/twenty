import {
  ChangeEvent,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Key } from 'ts-key-enum';
import { IconAlertCircle, IconComponent, IconEye, IconEyeOff } from 'twenty-ui';

import { usePreviousHotkeyScope } from '@/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useCombinedRefs } from '~/hooks/useCombinedRefs';

import { InputHotkeyScope } from '../types/InputHotkeyScope';

const StyledContainer = styled.div<Pick<TextInputComponentProps, 'fullWidth'>>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : 'auto')};
`;

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.font.color.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledInput = styled.input<Pick<TextInputComponentProps, 'fullWidth'>>`
  background-color: ${({ theme }) => theme.background.transparent.lighter};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.sm};
  border-right: none;
  border-top-left-radius: ${({ theme }) => theme.border.radius.sm};
  box-sizing: border-box;
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  flex-grow: 1;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  height: 32px;
  outline: none;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.font.color.light};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  &:disabled {
    color: ${({ theme }) => theme.font.color.tertiary};
  }
`;

const StyledErrorHelper = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: ${({ theme }) => theme.spacing(1)};
`;

const StyledTrailingIconContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.background.transparent.lighter};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.sm};
  border-left: none;
  border-top-right-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  justify-content: center;
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledTrailingIcon = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.light};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  display: flex;
  justify-content: center;
`;

const INPUT_TYPE_PASSWORD = 'password';

export type TextInputComponentProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onKeyDown'
> & {
  className?: string;
  label?: string;
  onChange?: (text: string) => void;
  fullWidth?: boolean;
  disableHotkeys?: boolean;
  error?: string;
  RightIcon?: IconComponent;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

const TextInputComponent = (
  {
    className,
    label,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    fullWidth,
    error,
    required,
    type,
    disableHotkeys = false,
    autoFocus,
    placeholder,
    disabled,
    tabIndex,
    RightIcon,
  }: TextInputComponentProps,
  // eslint-disable-next-line @nx/workspace-component-props-naming
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const theme = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs(ref, inputRef);

  const {
    goBackToPreviousHotkeyScope,
    setHotkeyScopeAndMemorizePreviousScope,
  } = usePreviousHotkeyScope();

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus?.(e);

    if (!disableHotkeys) {
      setHotkeyScopeAndMemorizePreviousScope(InputHotkeyScope.TextInput);
    }
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur?.(e);

    if (!disableHotkeys) {
      goBackToPreviousHotkeyScope();
    }
  };

  useScopedHotkeys(
    [Key.Escape, Key.Enter],
    () => {
      inputRef.current?.blur();
    },
    InputHotkeyScope.TextInput,
    { enabled: !disableHotkeys },
  );

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledContainer className={className} fullWidth={fullWidth ?? false}>
      {label && <StyledLabel>{label + (required ? '*' : '')}</StyledLabel>}
      <StyledInputContainer>
        <StyledInput
          autoComplete="off"
          ref={combinedRef}
          tabIndex={tabIndex ?? 0}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={passwordVisible ? 'text' : type}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event.target.value);
          }}
          onKeyDown={onKeyDown}
          {...{ autoFocus, disabled, placeholder, required, value }}
        />
        <StyledTrailingIconContainer>
          {error && (
            <StyledTrailingIcon>
              <IconAlertCircle size={16} color={theme.color.red} />
            </StyledTrailingIcon>
          )}
          {!error && type === INPUT_TYPE_PASSWORD && (
            <StyledTrailingIcon
              onClick={handleTogglePasswordVisibility}
              data-testid="reveal-password-button"
            >
              {passwordVisible ? (
                <IconEyeOff size={theme.icon.size.md} />
              ) : (
                <IconEye size={theme.icon.size.md} />
              )}
            </StyledTrailingIcon>
          )}
          {!error && type !== INPUT_TYPE_PASSWORD && !!RightIcon && (
            <StyledTrailingIcon>
              <RightIcon size={theme.icon.size.md} />
            </StyledTrailingIcon>
          )}
        </StyledTrailingIconContainer>
      </StyledInputContainer>
      {error && <StyledErrorHelper>{error}</StyledErrorHelper>}
    </StyledContainer>
  );
};

export const TextInput = forwardRef(TextInputComponent);
