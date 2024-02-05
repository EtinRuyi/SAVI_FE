import { useState, useCallback } from "react";
import AddMoreGoals from "../../components/AddMoreGoals";
import PortalPopup from "../../components/PortalPopup";
import LogoutModal from "../../components/LogoutModal";
import styled from "styled-components";
import GroupFrame from "../../components/GroupFrame";

const Group11Image = styled.img`
  width: 110px;
  height: 30px;
  margin-right: 4px; 
`;

const JoinButton = styled.button`
  background-color: #2f80ed; // Adjust the background color as needed
  color: #ffffff; // Adjust the text color as needed
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
const MyGoals = styled.b`
  width: 258px;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const AddNewGoal = styled.div`
  position: relative;
  font-size: 14px;
 
  line-height: 16px;
  font-weight: 500;
  color: #2f80ed;
  white-space: pre-wrap;
  cursor: pointer;
`;
const MyGoalsParent = styled.div`
  position: absolute;
  top: 96px;
  left: 310px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameChild = styled.img`
  width: 131px;
  position: relative;
  border-radius: 8px;
  height: 200px;
  
  flex-shrink: 0;
  object-fit: cover;
`;
const AvatarIcon = styled.img`
  width: 16px;
  position: relative;
  border-radius: 999px;
  height: 16px;
  
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const StarsIcon = styled.img`
  width: 12px;
  position: relative;
  height: 12px;
 
  flex-shrink: 0;
  display: none;
`;
const Status1 = styled.div`
  width: 6px;
  position: relative;
  border-radius: 50%;
  background-color: #14b8a6;
  height: 6px;
  display: none;
`;
const Placeholder = styled.div`
  position: relative;
  font-weight: 500;
 
  
`;
const Placeholder1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top:  5px;
  
`;
const XLgIcon = styled.img`
  width: 8px;
  position: relative;
  height: 8px;
 
  flex-shrink: 0;
`;
const CloseIcon = styled.div`
  width: 100px;
  border-radius: 999px;
  background-color: #99f6e4;
  height: 15px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;;
`;
const BadgeAndTag = styled.div`
  border-radius: 999px;
  background-color: #ccfbf1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 1px;
  color: #14b8a6;
`;
const Badge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #14b8a6;
`;

const Paragraph = styled.p`
  font-size: 15px;
  width: 100%;
  display: inline-block; /* Add this line to set display to inline-block */
`;
const TripToBali = styled.div`
  position: relative;
  font-size: 18px;
  letter-spacing: 0.009em;
  line-height: 1.5; 
  font-weight: 300;
`;

const BadgeParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;  
`;

const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 57px 0px 0px;
  gap: 40px;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 
`;



const FrameGroup = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  gap: 24px;
  cursor: pointer;
  width: 100%; // Set width to 100%
`;
const FrameParent = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  gap: 24px;
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 165px;
  left: 310px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: 14px;
`;

const PersonalSavingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f9fafb;
  height: 1024px;
  
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
`;

const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const VerticalDotsImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px; // Adjust the margin as needed
`;

const Group111Image = styled.img`
  width: 110px;
  height: 30px;
  margin-right: 4px; 
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px; // Adjust the gap between images as needed
  margin-top: 10px; // Adjust the top margin as needed
`;

const TextViewGroup = styled.div`
  margin-top: 10px; // Adjust the top margin as needed
`;

const ExploreGroup = () => {
  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isGroupFrameOpen, setGroupFrameOpen] = useState(false);

  const openAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(true);
  }, []);

  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Personal Saving" to the project
  }, []);

  const toggleGroupFrame = useCallback(() => {
    setGroupFrameOpen(true);
  }, []);

  const closeGroupFrame = useCallback(() => {
    setGroupFrameOpen(false);
  }, []);

  const closeLogoutModal = useCallback(() => {
    setLogoutModalOpen(false);
  }, []);

 

  return (
    <>
      <PersonalSavingRoot>
        <MyGoalsParent>
          <MyGoals>Explore Goals</MyGoals>
          <AddNewGoal onClick={openAddMoreGoals}>
  <img src="/filter-list.png" alt="filter" /> filter
</AddNewGoal>
        </MyGoalsParent>
        <FrameParent1>
          <FrameGroup onClick={onFrameContainerClick}>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/Frame-388134972.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                        <Placeholder>Waiting</Placeholder>
                        
                    </BadgeAndTag>

                    <JoinContainer>
                  <Group11Image alt="" src="/group11.png" />
                  <JoinButton className="mx-3">Join</JoinButton>
                  <VerticalDotsImage
                        alt=""
                        src="/dots-vertical.svg"
                        onClick={toggleGroupFrame}
                      />
                </JoinContainer>
                  </Badge>
                  <TripToBali className="mt-3">Money Palava Savers</TripToBali>
                  <Paragraph><span>Make we save together, chop better life! Join this group if you want to flex and still save money for better days. We go show you as money fit run belle and still dey for account.</span></Paragraph>
                  <ImageContainer>
          <img src="/Frame 38813498.png" alt="contribution" />
          <img src="/Frame 38813499.png" alt="Expected withdrawal" />
          <img src="/Frame 38813500.png" alt="saving frequency" />
          <img src="/Frame 38813501.png" alt="duration" />
          <img src="/Frame 38813502.png" alt="available slot" />
        </ImageContainer>
        <TextViewGroup>
            {/* Your text view group content goes here */}
            {/* You can use additional styled components for styling */}
            <p>
              <a href="#">View Group</a>
            </p>
          </TextViewGroup>
                  </BadgeParent> 
              </FrameDiv>
              
             
            </FrameContainer>
          
          </FrameGroup>
          <FrameParent>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/Frame-38813497.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                      <AvatarIcon alt="" src="/avatar@2x.png" />
                      <StarsIcon alt="" src="/stars.svg" />
                      <Placeholder1>
                        <Status1 />
                        <Placeholder>Waiting</Placeholder>
                      </Placeholder1>
                     
                      <StarsIcon alt="" src="/chevronright.svg" />
                      <CloseIcon>
                        <XLgIcon alt="" src="/xlg.svg" />
                      </CloseIcon>
                    </BadgeAndTag>
                    <JoinContainer>
                  <Group111Image alt="" src="/group111.png" />
                  <JoinButton className="mx-3">Join</JoinButton>
                  <VerticalDotsImage
                        alt=""
                        src="/dots-vertical.svg"
                        onClick={toggleGroupFrame}
                      />
                </JoinContainer>
               
                  </Badge>
                  <TripToBali className="mt-3">Sabi-Sabi Slay Queens</TripToBali>
                  <div>Attention Slay Queens! Una wey sabi fashion and glam, join this group make we save money for the latest trends and slay effortlessly. No dulling, we go blend fashion and savings like jollof rice and chicken!</div>
                  <ImageContainer>
          <img src="/Frame 38813498.png" alt="contribution" />
          <img src="/Frame 38813499 (1).png" alt="Expected withdrawal" />
          <img src="/Frame 38813500 (1).png" alt="saving frequency" />
          <img src="/Frame 38813501.png" alt="duration" />
          <img src="/Frame 38813502 (1).png" alt="available slot" />
        </ImageContainer>
        <TextViewGroup>
            {/* Your text view group content goes here */}
            {/* You can use additional styled components for styling */}
            <p>
              <a href="#">View Group</a>
            </p>
          </TextViewGroup>
                </BadgeParent>
              </FrameDiv>
             
            </FrameContainer>
           
          </FrameParent>
          <FrameParent>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/image-1.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                      <AvatarIcon alt="" src="/avatar@2x.png" />
                      <StarsIcon alt="" src="/stars.svg" />
                      <Placeholder1>
                        <Status1 />
                        <Placeholder>Waiting</Placeholder>
                      </Placeholder1>
                      
                      <StarsIcon alt="" src="/chevronright.svg" />
                      <CloseIcon>
                        <XLgIcon alt="" src="/xlg.svg" />
                      </CloseIcon>
                    </BadgeAndTag>
                    <JoinContainer>
                  <Group111Image alt="" src="/group111.png" />
                  <JoinButton className="mx-3">Join</JoinButton>
                  <VerticalDotsImage
                        alt=""
                        src="/dots-vertical.svg"
                        onClick={toggleGroupFrame}
                      />
                </JoinContainer>
                  </Badge>
                  <TripToBali className="mt-3">Naija Travel Squad</TripToBali>
                  <div>If you be proper ajala, join this group sharp sharp! We dey save money to explore Naija and beyond. From Lagos to Calabar, Abuja to Port Harcourt, we go waka waka together and scatter ground!</div>
                  <ImageContainer>
          <img src="/Frame 38813498.png" alt="contribution" />
          <img src="/Frame 38813499 (1).png" alt="Expected withdrawal" />
          <img src="/Frame 38813500.png" alt="saving frequency" />
          <img src="/Frame 38813501.png" alt="duration" />
          <img src="/Frame 38813502 (1).png" alt="available slot" />
        </ImageContainer>
        <TextViewGroup>
            {/* Your text view group content goes here */}
            {/* You can use additional styled components for styling */}
            <p>
              <a href="#">View Group</a>
            </p>
          </TextViewGroup>
                </BadgeParent>
              </FrameDiv>
              
            </FrameContainer>
          
          </FrameParent>
        </FrameParent1>
       
       
      </PersonalSavingRoot>
      {isAddMoreGoalsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals}
        >
          <AddMoreGoals onClose={closeAddMoreGoals} />
        </PortalPopup>
      )}
      {isLogoutModalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutModal}
        >
          <LogoutModal onClose={closeLogoutModal} />
        </PortalPopup>
      )}
      
      {isGroupFrameOpen && (
  <PortalPopup
    overlayColor="rgba(113, 113, 113, 0.3)"
    placement="Centered"
    onOutsideClick={closeGroupFrame}
  >
      <GroupFrame onClose={closeGroupFrame} />
  </PortalPopup>
)}


    </>
  );
};

export default ExploreGroup;