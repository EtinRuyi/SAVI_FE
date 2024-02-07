import React, { useState } from 'react';
import styled from 'styled-components';
import Image1 from '../../../assets/images/Image1.png';

const calculateWidth = (numAvatars) => {
  const maxAvatars = 5;
  const avatarWidth = 40.32; // Width of one avatar
  const avatarMargin = 5.04; // Margin between avatars

  const calculatedWidth =
    Math.min(numAvatars, maxAvatars) * (avatarWidth + avatarMargin);

  return calculatedWidth;
};

const ExpandableMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${(props) => props.gap || '30px'};
  width: ${(props) => (props.expanded ? '300px' : '40px')};
  overflow: hidden;
  transition: width 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

const DotsIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 72px; /* Adjust height as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  right: 30px; /* Adjust the distance between DotIcon and AvatarContainer */
  width: ${(props) =>
    props.expanded ? `${calculateWidth(props.numAvatars)}px` : '0'};
  overflow: hidden;
  transition: width 0.3s ease;
`;

const AvatarImage = styled.img`
  width: 40.32px;
  height: 40.32px;
  border: 2.52px solid #ffffff;
  border-radius: 336px;
  margin: 0px -5.04px;
`;

const DotsSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="4" r="2" fill="#000000" />
    <circle cx="12" cy="12" r="2" fill="#000000" />
    <circle cx="12" cy="20" r="2" fill="#000000" />
  </svg>
);

const ProfileMenu = () => {
  const [expanded, setExpanded] = useState(false);

  // Example avatars, replace with actual data
  const avatarImages = [Image1, Image1, Image1];

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <ExpandableMenu onClick={toggleExpansion} expanded={expanded}>
      <DotsIcon>
        <DotsSvg />
      </DotsIcon>
      <AvatarContainer expanded={expanded} numAvatars={avatarImages.length}>
        {avatarImages.map((imageUrl, index) => (
          <AvatarImage key={index} src={imageUrl} alt={`Avatar ${index + 1}`} />
        ))}
      </AvatarContainer>
    </ExpandableMenu>
  );
};

export default ProfileMenu;
