import styled from '@emotion/styled';

import { EventFieldDiffLabel } from '@/activities/timelineActivities/rows/main-object/components/EventFieldDiffLabel';
import { EventFieldDiffValue } from '@/activities/timelineActivities/rows/main-object/components/EventFieldDiffValue';
import { EventFieldDiffValueEffect } from '@/activities/timelineActivities/rows/main-object/components/EventFieldDiffValueEffect';
import { FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';
import { RecordFieldValueSelectorContextProvider } from '@/object-record/record-store/contexts/RecordFieldValueSelectorContext';

type EventFieldDiffProps = {
  diffRecord: Record<string, any>;
  mainObjectMetadataItem: ObjectMetadataItem;
  fieldMetadataItem: FieldMetadataItem | undefined;
  diffArtificialRecordStoreId: string;
};

const StyledEventFieldDiffContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  height: 24px;
  width: 380px;
`;

const StyledEmptyValue = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
`;

export const EventFieldDiff = ({
  diffRecord,
  mainObjectMetadataItem,
  fieldMetadataItem,
  diffArtificialRecordStoreId,
}: EventFieldDiffProps) => {
  if (!fieldMetadataItem) {
    throw new Error('fieldMetadataItem is required');
  }

  const isUpdatedToEmpty = Object.values(diffRecord).every(
    (value) => value === null || value === undefined || value === '',
  );

  return (
    <RecordFieldValueSelectorContextProvider>
      <StyledEventFieldDiffContainer>
        <EventFieldDiffLabel fieldMetadataItem={fieldMetadataItem} />→
        {isUpdatedToEmpty ? (
          <StyledEmptyValue>Empty</StyledEmptyValue>
        ) : (
          <>
            <EventFieldDiffValueEffect
              diffArtificialRecordStoreId={diffArtificialRecordStoreId}
              mainObjectMetadataItem={mainObjectMetadataItem}
              fieldMetadataItem={fieldMetadataItem}
              diffRecord={diffRecord}
            />
            <EventFieldDiffValue
              diffArtificialRecordStoreId={diffArtificialRecordStoreId}
              mainObjectMetadataItem={mainObjectMetadataItem}
              fieldMetadataItem={fieldMetadataItem}
            />
          </>
        )}
      </StyledEventFieldDiffContainer>
    </RecordFieldValueSelectorContextProvider>
  );
};
