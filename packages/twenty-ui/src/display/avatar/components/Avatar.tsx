import { styled } from '@linaria/react';
import { isNonEmptyString, isUndefined } from '@sniptt/guards';
import { useRecoilState } from 'recoil';

import { invalidAvatarUrlsState } from '@ui/display/avatar/components/states/isInvalidAvatarUrlState';
import { AVATAR_PROPERTIES_BY_SIZE } from '@ui/display/avatar/constants/AvatarPropertiesBySize';
import { AvatarSize } from '@ui/display/avatar/types/AvatarSize';
import { AvatarType } from '@ui/display/avatar/types/AvatarType';
import { Nullable, stringToHslColor } from '@ui/utilities';

const StyledAvatar = styled.div<{
  size: AvatarSize;
  rounded?: boolean;
  clickable?: boolean;
  color: string;
  backgroundColor: string;
}>`
  align-items: center;
  border-radius: ${({ rounded }) => (rounded ? '50%' : 'none')};
  display: flex;
  font-size: ${({ size }) => AVATAR_PROPERTIES_BY_SIZE[size].fontSize};
  font-weight: 600;
  height: ${({ size }) => AVATAR_PROPERTIES_BY_SIZE[size].width};
  justify-content: center;

  width: ${({ size }) => AVATAR_PROPERTIES_BY_SIZE[size].width};

  color: ${({ color }) => color};
  backgroundcolor: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    box-shadow: ${({ clickable }) =>
      clickable
        ? `0 0 0 4px var(--twentycrm-background-transparent-light)`
        : 'none'};
  }
`;
const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export type AvatarProps = {
  avatarUrl?: string | null;
  className?: string;
  size?: AvatarSize;
  placeholder: string | undefined;
  entityId?: string;
  type?: Nullable<AvatarType>;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
};

// TODO: Remove recoil because we don't want it into twenty-ui and find a solution for invalid avatar urls
export const Avatar = ({
  avatarUrl,
  size = 'md',
  placeholder,
  entityId = placeholder,
  onClick,
  type = 'squared',
  color,
  backgroundColor,
}: AvatarProps) => {
  const [invalidAvatarUrls, setInvalidAvatarUrls] = useRecoilState(
    invalidAvatarUrlsState,
  );

  const noAvatarUrl = !isNonEmptyString(avatarUrl);

  const placeholderChar = placeholder?.[0]?.toLocaleUpperCase();

  const showPlaceholder = noAvatarUrl || invalidAvatarUrls.includes(avatarUrl);

  const handleImageError = () => {
    if (isNonEmptyString(avatarUrl)) {
      setInvalidAvatarUrls((prev) => [...prev, avatarUrl]);
    }
  };

  const fixedColor = color ?? stringToHslColor(entityId ?? '', 75, 25);
  const fixedBackgroundColor =
    backgroundColor ?? stringToHslColor(entityId ?? '', 75, 85);

  const showBackgroundColor = showPlaceholder;

  return (
    <StyledAvatar
      size={size}
      backgroundColor={showBackgroundColor ? fixedBackgroundColor : 'none'}
      color={fixedColor}
      clickable={!isUndefined(onClick)}
      rounded={type === 'rounded'}
      onClick={onClick}
    >
      {showPlaceholder ? (
        placeholderChar
      ) : (
        <StyledImage src={avatarUrl} onError={handleImageError} alt="" />
      )}
    </StyledAvatar>
  );
};
