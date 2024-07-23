import { act, renderHook } from '@testing-library/react';
import { RecoilRoot, useRecoilState } from 'recoil';

import { useOpenSpreadsheetImportDialog } from '@/spreadsheet-import/hooks/useSpreadsheetImport';
import { spreadsheetImportDialogState } from '@/spreadsheet-import/states/spreadsheetImportState';
import { StepType } from '@/spreadsheet-import/steps/components/UploadFlow';
import {
  ImportedRow,
  SpreadsheetImportDialogOptions,
} from '@/spreadsheet-import/types';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
type SpreadsheetKey = 'spreadsheet_key';

export const mockedSpreadsheetOptions: SpreadsheetImportDialogOptions<SpreadsheetKey> =
  {
    isOpen: true,
    onClose: () => {},
    fields: [],
    uploadStepHook: async () => [],
    selectHeaderStepHook: async (
      headerValues: ImportedRow,
      data: ImportedRow[],
    ) => ({
      headerRow: headerValues,
      importedRows: data,
    }),
    matchColumnsStepHook: async () => [],
    rowHook: () => ({ spreadsheet_key: 'rowHook' }),
    tableHook: () => [{ spreadsheet_key: 'tableHook' }],
    onSubmit: async () => {},
    allowInvalidSubmit: false,
    customTheme: {},
    maxRecords: 10,
    maxFileSize: 50,
    autoMapHeaders: true,
    autoMapDistance: 1,
    initialStepState: {
      type: StepType.upload,
    },
    dateFormat: 'MM/DD/YY',
    parseRaw: true,
    rtl: false,
    selectHeader: true,
  };

describe('useSpreadsheetImport', () => {
  it('should set isOpen to true, and update the options in the Recoil state', async () => {
    const { result } = renderHook(
      () => ({
        useSpreadsheetImport: useOpenSpreadsheetImportDialog<SpreadsheetKey>(),
        spreadsheetImportState: useRecoilState(spreadsheetImportDialogState)[0],
      }),
      {
        wrapper: Wrapper,
      },
    );
    expect(result.current.spreadsheetImportState).toStrictEqual({
      isOpen: false,
      options: null,
    });
    act(() => {
      result.current.useSpreadsheetImport.openSpreadsheetImport(
        mockedSpreadsheetOptions,
      );
    });
    expect(result.current.spreadsheetImportState).toStrictEqual({
      isOpen: true,
      options: mockedSpreadsheetOptions,
    });
  });
});
