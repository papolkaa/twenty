import styled from '@emotion/styled';
import { OverlayScrollbars } from 'overlayscrollbars';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { getContextByProviderName } from '@/ui/utilities/scroll/contexts/ScrollWrapperContexts';
import { useScrollStates } from '@/ui/utilities/scroll/hooks/internal/useScrollStates';
import { overlayScrollbarsState } from '@/ui/utilities/scroll/states/overlayScrollbarsState';

import 'overlayscrollbars/overlayscrollbars.css';

const StyledScrollWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .os-scrollbar-handle {
    background-color: ${({ theme }) => theme.border.color.medium};
  }
`;

export type ScrollWrapperProps = {
  children: React.ReactNode;
  className?: string;
  hideY?: boolean;
  hideX?: boolean;
  contextProviderName: string;
};

export const ScrollWrapper = ({
  children,
  className,
  hideX,
  hideY,
  contextProviderName,
}: ScrollWrapperProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const Context = getContextByProviderName(contextProviderName);

  const { scrollTopComponentState, scrollLeftComponentState } =
    useScrollStates(contextProviderName);
  const setScrollTop = useSetRecoilState(scrollTopComponentState);
  const setScrollLeft = useSetRecoilState(scrollLeftComponentState);

  const handleScroll = (overlayScroll: OverlayScrollbars) => {
    const target = overlayScroll.elements().scrollOffsetElement;
    setScrollTop(target.scrollTop);
    setScrollLeft(target.scrollLeft);
  };

  const setOverlayScrollbars = useSetRecoilState(overlayScrollbarsState);

  const [initialize, instance] = useOverlayScrollbars({
    options: {
      scrollbars: { autoHide: 'scroll' },
      overflow: {
        y: hideY ? 'hidden' : undefined,
        x: hideX ? 'hidden' : undefined,
      },
    },
    events: {
      scroll: handleScroll,
    },
  });

  useEffect(() => {
    if (scrollableRef?.current !== null) {
      initialize(scrollableRef.current);
    }
  }, [initialize, scrollableRef]);

  useEffect(() => {
    setOverlayScrollbars(instance());
  }, [instance, setOverlayScrollbars]);

  return (
    <Context.Provider value={{ ref: scrollableRef, id: contextProviderName }}>
      <StyledScrollWrapper ref={scrollableRef} className={className}>
        {children}
      </StyledScrollWrapper>
    </Context.Provider>
  );
};
