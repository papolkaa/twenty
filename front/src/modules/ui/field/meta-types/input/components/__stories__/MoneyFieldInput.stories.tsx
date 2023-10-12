import { useEffect } from 'react';
import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { useSetHotkeyScope } from '@/ui/utilities/hotkey/hooks/useSetHotkeyScope';

import { FieldContextProvider } from '../../../__stories__/FieldContextProvider';
import { useMoneyField } from '../../../hooks/useMoneyField';
import { MoneyFieldInput, MoneyFieldInputProps } from '../MoneyFieldInput';

const MoneyFieldValueSetterEffect = ({ value }: { value: number }) => {
  const { setFieldValue } = useMoneyField();

  useEffect(() => {
    setFieldValue(value);
  }, [setFieldValue, value]);

  return <></>;
};

type MoneyFieldInputWithContextProps = MoneyFieldInputProps & {
  value: number;
  entityId?: string;
};

const MoneyFieldInputWithContext = ({
  entityId,
  value,
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: MoneyFieldInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotKeyScope('hotkey-scope');
  }, [setHotKeyScope]);

  return (
    <div>
      <FieldContextProvider
        fieldDefinition={{
          key: 'moneyAmount',
          name: 'MoneyAmout',
          type: 'moneyAmount',
          metadata: {
            fieldName: 'moneyAmount',
            placeHolder: 'Enter Amount',
          },
        }}
        entityId={entityId}
      >
        <MoneyFieldValueSetterEffect value={value} />
        <MoneyFieldInput
          {...{ onEnter, onEscape, onClickOutside, onTab, onShiftTab }}
        />
      </FieldContextProvider>
      <div data-testid="data-field-input-click-outside-div" />
    </div>
  );
};

const enterJestFn = jest.fn();
const escapeJestfn = jest.fn();
const clickOutsideJestFn = jest.fn();
const tabJestFn = jest.fn();
const shiftTabJestFn = jest.fn();

const meta: Meta = {
  title: 'UI/Field/Input/MoneyFieldInput',
  component: MoneyFieldInputWithContext,
  args: {
    value: 1000,
    isPositive: true,
    onEnter: enterJestFn,
    onEscape: escapeJestfn,
    onClickOutside: clickOutsideJestFn,
    onTab: tabJestFn,
    onShiftTab: shiftTabJestFn,
  },
  argTypes: {
    onEnter: { control: false },
    onEscape: { control: false },
    onClickOutside: { control: false },
    onTab: { control: false },
    onShiftTab: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof MoneyFieldInputWithContext>;

export const Default: Story = {};

export const Enter: Story = {
  play: () => {
    expect(enterJestFn).toHaveBeenCalledTimes(0);

    userEvent.keyboard('{enter}');

    expect(enterJestFn).toHaveBeenCalledTimes(1);
  },
};

export const Escape: Story = {
  play: () => {
    expect(escapeJestfn).toHaveBeenCalledTimes(0);

    userEvent.keyboard('{esc}');

    expect(escapeJestfn).toHaveBeenCalledTimes(1);
  },
};

export const ClickOutside: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(clickOutsideJestFn).toHaveBeenCalledTimes(0);

    const emptyDiv = canvas.getByTestId('data-field-input-click-outside-div');
    userEvent.click(emptyDiv);

    expect(clickOutsideJestFn).toHaveBeenCalledTimes(1);
  },
};

export const Tab: Story = {
  play: () => {
    expect(tabJestFn).toHaveBeenCalledTimes(0);

    userEvent.keyboard('{tab}');

    expect(tabJestFn).toHaveBeenCalledTimes(1);
  },
};

export const ShiftTab: Story = {
  play: () => {
    expect(shiftTabJestFn).toHaveBeenCalledTimes(0);

    userEvent.keyboard('{shift>}{tab}');

    expect(shiftTabJestFn).toHaveBeenCalledTimes(1);
  },
};
