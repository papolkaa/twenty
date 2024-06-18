import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledSkeletonContainer = styled.div`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledRecordTableCellLoader = ({
  skeletonWidth,
}: {
  skeletonWidth: number;
}) => {
  const theme = useTheme();
  return (
    <SkeletonTheme
      baseColor={theme.background.tertiary}
      highlightColor={theme.background.transparent.lighter}
      borderRadius={4}
    >
      <Skeleton width={skeletonWidth} height={16} />
    </SkeletonTheme>
  );
};

export const RecordTableCellSkeletonLoader = ({
  skeletonWidth,
}: {
  skeletonWidth: number;
}) => {
  return (
    <StyledSkeletonContainer>
      <StyledRecordTableCellLoader skeletonWidth={skeletonWidth} />
    </StyledSkeletonContainer>
  );
};
