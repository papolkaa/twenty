import styled from '@emotion/styled';

export const StyledDropdownMenu = styled.div<{
  disableBlur?: boolean;
  width?: number;
}>`
  backdrop-filter: ${({ disableBlur }) =>
    disableBlur ? 'none' : 'blur(20px)'};

  background: ${({ theme }) => theme.background.transparent.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.strong};

  display: flex;

  flex-direction: column;

  min-width: ${({ width }) => (width && width > 160 ? width : 160)}px;

  overflow: hidden;
`;
