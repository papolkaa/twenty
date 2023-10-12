import { useState } from 'react';
import styled from '@emotion/styled';

import { IconSettings } from '@/ui/icon';
import { IconPicker } from '@/ui/input/components/IconPicker';
import { H2Title } from '@/ui/typography/components/H2Title';

import ArrowRight from '../assets/ArrowRight.svg';

import { IconWithLabel } from './IconWithLabel';

const StyledContainer = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 16px;
`;

const StyledArrowContainer = styled.div`
  align-items: center;
  display: flex;
  height: 32px;
  justify-content: center;
`;

export const SettingsIconSection = () => {
  const [SelectedIcon, setSelectedIcon] = useState<any>(IconSettings);
  const [selectedIconKey, setSelectedIconKey] = useState('IconSettings');

  return (
    <section>
      <H2Title
        title="Icon"
        description="The icon that will be displayed in the sidebar."
      />
      <StyledContainer>
        <IconPicker
          selectedIconKey={selectedIconKey}
          onChange={(icon) => {
            setSelectedIcon(icon.Icon);
            setSelectedIconKey(icon.iconKey);
          }}
        />
        <StyledArrowContainer>
          <img src={ArrowRight} alt="Arrow right" width={32} height={16} />
        </StyledArrowContainer>
        <IconWithLabel Icon={SelectedIcon} label="Workspaces" />
      </StyledContainer>
    </section>
  );
};
