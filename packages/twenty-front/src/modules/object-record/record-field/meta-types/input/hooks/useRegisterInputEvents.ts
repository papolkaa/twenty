import { Key } from 'ts-key-enum';

import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useListenClickOutside } from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { isDefined } from '~/utils/isDefined';

export const useRegisterInputEvents = <T>({
  inputRef,
  inputValue,
  onEscape,
  onEnter,
  onTab,
  onShiftTab,
  onClickOutside,
  hotkeyScope,
}: {
  inputRef: React.RefObject<any>;
  inputValue: T;
  onEscape: (inputValue: T) => void;
  onEnter: (inputValue: T) => void;
  onTab?: (inputValue: T) => void;
  onShiftTab?: (inputValue: T) => void;
  onClickOutside?: (event: MouseEvent | TouchEvent, inputValue: T) => void;
  hotkeyScope: string;
}) => {
  useListenClickOutside({
    refs: [inputRef],
    callback: (event) => {
      const target = event.target as HTMLElement;
      const classAttribute = target.getAttribute('class');
      if (
        classAttribute !== null &&
        (classAttribute === 'tabler-icon tabler-icon-copy' ||
          classAttribute.includes('copy-button'))
      ) {
        return;
      }
      event.stopImmediatePropagation();
      onClickOutside?.(event, inputValue);
    },
    enabled: isDefined(onClickOutside),
  });

  useScopedHotkeys(
    'enter',
    () => {
      onEnter?.(inputValue);
    },
    hotkeyScope,
    [onEnter, inputValue],
  );

  useScopedHotkeys(
    [Key.Escape],
    () => {
      onEscape?.(inputValue);
    },
    hotkeyScope,
    [onEscape, inputValue],
  );

  useScopedHotkeys(
    'tab',
    () => {
      onTab?.(inputValue);
    },
    hotkeyScope,
    [onTab, inputValue],
  );

  useScopedHotkeys(
    'shift+tab',
    () => {
      onShiftTab?.(inputValue);
    },
    hotkeyScope,
    [onShiftTab, inputValue],
  );
};
