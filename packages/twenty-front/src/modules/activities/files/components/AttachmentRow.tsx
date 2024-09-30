import { AttachmentDropdown } from '@/activities/files/components/AttachmentDropdown';
import { AttachmentIcon } from '@/activities/files/components/AttachmentIcon';
import { Attachment } from '@/activities/files/types/Attachment';
import { downloadFile } from '@/activities/files/utils/downloadFile';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useDeleteOneRecord } from '@/object-record/hooks/useDeleteOneRecord';
import { useUpdateOneRecord } from '@/object-record/hooks/useUpdateOneRecord';
import {
  FieldContext,
  GenericFieldContextType,
} from '@/object-record/record-field/contexts/FieldContext';
import { TextInput } from '@/ui/input/components/TextInput';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { IconCalendar } from 'twenty-ui';

import { formatToHumanReadableDate } from '~/utils/date-utils';
import { getFileAbsoluteURI } from '~/utils/file/getFileAbsoluteURI';

const StyledRow = styled.div`
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  height: 32px;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledLeftContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-grow: 1;
`;

const StyledRightContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

const StyledCalendarIconContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.light};
  display: flex;
`;

const StyledLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  text-decoration: none;
  width: 0;
  flex-grow: 1;
  overflow: auto;
  :hover {
    color: ${({ theme }) => theme.font.color.secondary};
  }
`;

export const AttachmentRow = ({ attachment }: { attachment: Attachment }) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [attachmentName, setAttachmentName] = useState(attachment.name);

  const fieldContext = useMemo(
    () => ({ recoilScopeId: attachment?.id ?? '' }),
    [attachment?.id],
  );

  const { deleteOneRecord: deleteOneAttachment } = useDeleteOneRecord({
    objectNameSingular: CoreObjectNameSingular.Attachment,
  });

  const handleDelete = () => {
    deleteOneAttachment(attachment.id);
  };

  const { updateOneRecord: updateOneAttachment } = useUpdateOneRecord({
    objectNameSingular: CoreObjectNameSingular.Attachment,
  });

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleOnBlur = () => {
    setIsEditing(false);
    updateOneAttachment({
      idToUpdate: attachment.id,
      updateOneRecordInput: { name: attachmentName },
    });
  };

  const handleOnChange = (newName: string) => {
    setAttachmentName(newName);
  };

  return (
    <FieldContext.Provider value={fieldContext as GenericFieldContextType}>
      <StyledRow>
        <StyledLeftContent>
          <AttachmentIcon attachmentType={attachment.type} />
          {isEditing ? (
            <TextInput
              style={{ flexGrow: 1, width: 0, overflowX: 'auto' }}
              value={attachmentName}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              autoFocus
              fullWidth
            />
          ) : (
            <StyledLink
              href={getFileAbsoluteURI(attachment.fullPath)}
              target="__blank"
            >
              {attachment.name}
            </StyledLink>
          )}
        </StyledLeftContent>
        <StyledRightContent>
          <StyledCalendarIconContainer>
            <IconCalendar size={theme.icon.size.md} />
          </StyledCalendarIconContainer>
          {formatToHumanReadableDate(attachment.createdAt)}
          <AttachmentDropdown
            scopeKey={attachment.id}
            onDelete={handleDelete}
            onDownload={() => {
              downloadFile(attachment.fullPath, attachment.name);
            }}
            onRename={handleRename}
          />
        </StyledRightContent>
      </StyledRow>
    </FieldContext.Provider>
  );
};
