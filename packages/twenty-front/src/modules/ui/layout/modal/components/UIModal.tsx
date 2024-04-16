import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledModalDiv = styled(motion.div)<{
  size?: ModalSize;
  padding?: ModalPadding;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.font.color.primary};
  border-radius: ${({ theme }) => theme.border.radius.md};
  overflow: hidden;
  max-height: 90vh;
  z-index: 10000; // should be higher than Backdrop's z-index

  width: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return theme.modal.size.sm;
      case 'medium':
        return theme.modal.size.md;
      case 'large':
        return theme.modal.size.lg;
      default:
        return 'auto';
    }
  }};

  padding: ${({ padding, theme }) => {
    switch (padding) {
      case 'none':
        return theme.spacing(0);
      case 'small':
        return theme.spacing(2);
      case 'medium':
        return theme.spacing(4);
      case 'large':
        return theme.spacing(6);
      default:
        return 'auto';
    }
  }};
`;

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex: 1 1 0%;
  flex-direction: column;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing(10)};
`;

const StyledFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const StyledBackDrop = styled(motion.div)`
  align-items: center;
  background: ${({ theme }) => theme.background.overlay};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

/**
 * Modal components
 */
type UIModalHeaderProps = React.PropsWithChildren & {
  className?: string;
};

const UIModalHeader = ({ children, className }: UIModalHeaderProps) => (
  <StyledHeader className={className}>{children}</StyledHeader>
);

type UIModalContentProps = React.PropsWithChildren & {
  className?: string;
};

const UIModalContent = ({ children, className }: UIModalContentProps) => (
  <StyledContent className={className}>{children}</StyledContent>
);

type UIModalFooterProps = React.PropsWithChildren & {
  className?: string;
};

const UIModalFooter = ({ children, className }: UIModalFooterProps) => (
  <StyledFooter className={className}>{children}</StyledFooter>
);

/**
 * Modal
 */
export type ModalSize = 'small' | 'medium' | 'large';
export type ModalPadding = 'none' | 'small' | 'medium' | 'large';

export type UIModalProps = React.PropsWithChildren & {
  isOpen?: boolean;
  onEnter?: () => void;
  size?: ModalSize;
  padding?: ModalPadding;
  className?: string;
  modalRef?: React.RefObject<HTMLElement>;
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// This component should be used over Modal when seeking a modal feel for what is actually a page
export const UIModal = ({
  isOpen = false,
  children,
  size = 'medium',
  padding = 'medium',
  modalRef,
  className,
}: UIModalProps) => {
  return isOpen ? (
    <StyledBackDrop>
      <StyledModalDiv
        // framer-motion seems to have typing problems with refs
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={modalRef}
        size={size}
        padding={padding}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        variants={modalVariants}
        className={className}
      >
        {children}
      </StyledModalDiv>
    </StyledBackDrop>
  ) : (
    <></>
  );
};

UIModal.Header = UIModalHeader;
UIModal.Content = UIModalContent;
UIModal.Footer = UIModalFooter;
