import { Meta } from '@storybook/react';

import { ModalWrapper } from '@/spreadsheet-import/components/ModalWrapper';
import { ReactSpreadsheetImportContextProvider } from '@/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { SelectHeaderStep } from '@/spreadsheet-import/steps/components/SelectHeaderStep/SelectHeaderStep';
import { SpreadsheetImportStepType } from '@/spreadsheet-import/steps/types/SpreadsheetImportStepType';
import {
  headerSelectionTableFields,
  mockRsiValues,
} from '@/spreadsheet-import/tests/mockRsiValues';
import { DialogManagerScope } from '@/ui/feedback/dialog-manager/scopes/DialogManagerScope';

const meta: Meta<typeof SelectHeaderStep> = {
  title: 'Modules/SpreadsheetImport/SelectHeaderStep',
  component: SelectHeaderStep,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = () => (
  <DialogManagerScope dialogManagerScopeId="dialog-manager">
    <ReactSpreadsheetImportContextProvider values={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <SelectHeaderStep
          importedRows={headerSelectionTableFields}
          setState={() => null}
          nextStep={() => null}
          setPreviousState={() => null}
          errorToast={() => null}
          onBack={() => Promise.resolve()}
          state={{
            type: SpreadsheetImportStepType.matchColumns,
            data: [],
            headerValues: [],
          }}
        />
      </ModalWrapper>
    </ReactSpreadsheetImportContextProvider>
  </DialogManagerScope>
);
