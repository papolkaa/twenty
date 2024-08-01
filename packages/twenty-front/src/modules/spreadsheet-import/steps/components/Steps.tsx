import styled from '@emotion/styled';
import { MOBILE_VIEWPORT } from 'twenty-ui';

import { useSpreadsheetImportInitialStep } from '@/spreadsheet-import/hooks/useSpreadsheetImportInitialStep';
import { useSpreadsheetImportInternal } from '@/spreadsheet-import/hooks/useSpreadsheetImportInternal';

import { StepBar } from '@/ui/navigation/step-bar/components/StepBar';
import { useStepBar } from '@/ui/navigation/step-bar/hooks/useStepBar';

import { EnhancedModalLayout } from '@/ui/layout/modal/components/EnhancedModalLayout';
import { UploadFlow } from './UploadFlow';

const StyledHeader = styled(EnhancedModalLayout.Header)`
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.border.color.medium};
  height: 60px;
  padding: 0px;
  padding-left: ${({ theme }) => theme.spacing(30)};
  padding-right: ${({ theme }) => theme.spacing(30)};
  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;

const stepTitles = {
  uploadStep: 'Upload file',
  matchColumnsStep: 'Match columns',
  validationStep: 'Validate data',
} as const;

export const Steps = () => {
  const { initialStepState } = useSpreadsheetImportInternal();

  const { steps, initialStep } = useSpreadsheetImportInitialStep(
    initialStepState?.type,
  );

  const { nextStep, prevStep, activeStep } = useStepBar({
    initialStep,
  });

  return (
    <>
      <StyledHeader>
        <StepBar activeStep={activeStep}>
          {steps.map((key) => (
            <StepBar.Step label={stepTitles[key]} key={key} />
          ))}
        </StepBar>
      </StyledHeader>
      <UploadFlow nextStep={nextStep} prevStep={prevStep} />
    </>
  );
};
