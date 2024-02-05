import { useState, useCallback } from "react";
import AddMoreGoals from "../components/AddMoreGoals";
import PortalPopup from "../components/PortalPopup";
import LogoutModal from "../components/LogoutModal";
import styled from "styled-components";

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
  font-size: 16px;
  letter-spacing: 0.01em;
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
  height: 99px;
  
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
  letter-spacing: 0.01em;
  line-height: 16px;
  font-weight: 500;
`;
const Placeholder1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 4px;
  gap: 7px;
`;
const XLgIcon = styled.img`
  width: 8px;
  position: relative;
  height: 8px;
 
  flex-shrink: 0;
`;
const CloseIcon = styled.div`
  width: 15px;
  border-radius: 999px;
  background-color: #99f6e4;
  height: 15px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BadgeAndTag = styled.div`
  border-radius: 999px;
  background-color: #ccfbf1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  gap: 1px;
`;
const Badge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #14b8a6;
`;
const TripToBali = styled.div`
  position: relative;
  font-size: 24px;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 600;
`;
const Div = styled.div`
  position: relative;
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 20px;
  font-weight: 600;
`;
const BadgeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 57px 0px 0px;
  gap: 40px;
`;
const Div1 = styled.div`
  position: relative;
  font-size: 24px;
  letter-spacing: 0.01em;
  line-height: 16px;
  font-weight: 500;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 400px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
  background-color: #f2f4f7;
  width: 951px;
  height: 4px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
  background-color: #b5179e;
  width: 287px;
  height: 4px;
`;
const RectangleParent = styled.div`
  width: 951px;
  position: relative;
  height: 4px;
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

const PersonalSaving = () => {
  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const openAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(true);
  }, []);

  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Personal Saving" to the project
  }, []);


  const closeLogoutModal = useCallback(() => {
    setLogoutModalOpen(false);
  }, []);

  return (
    <>
      <PersonalSavingRoot>
        <MyGoalsParent>
          <MyGoals>My Goals</MyGoals>
          <AddNewGoal onClick={openAddMoreGoals}>Add New Goal</AddNewGoal>
        </MyGoalsParent>
        <FrameParent1>
          <FrameGroup onClick={onFrameContainerClick}>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/frame-38813595@2x.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                      <AvatarIcon alt="" src="/avatar@2x.png" />
                      <StarsIcon alt="" src="/stars.svg" />
                      <Placeholder1>
                        <Status1 />
                        <Placeholder>Travel</Placeholder>
                      </Placeholder1>
                      <StarsIcon alt="" src="/chevronright.svg" />
                      <CloseIcon>
                        <XLgIcon alt="" src="/xlg.svg" />
                      </CloseIcon>
                    </BadgeAndTag>
                  </Badge>
                  <TripToBali>Trip to Bali</TripToBali>
                  <Div>{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</Div>
                </BadgeParent>
              </FrameDiv>
              <Div1>50%</Div1>
            </FrameContainer>
            <RectangleParent>
              <FrameItem />
              <FrameInner />
            </RectangleParent>
          </FrameGroup>
          <FrameParent>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/frame-38813595@2x.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                      <AvatarIcon alt="" src="/avatar@2x.png" />
                      <StarsIcon alt="" src="/stars.svg" />
                      <Placeholder1>
                        <Status1 />
                        <Placeholder>Travel</Placeholder>
                      </Placeholder1>
                      <StarsIcon alt="" src="/chevronright.svg" />
                      <CloseIcon>
                        <XLgIcon alt="" src="/xlg.svg" />
                      </CloseIcon>
                    </BadgeAndTag>
                  </Badge>
                  <TripToBali>Trip to Bali</TripToBali>
                  <Div>{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</Div>
                </BadgeParent>
              </FrameDiv>
              <Div1>50%</Div1>
            </FrameContainer>
            <RectangleParent>
              <FrameItem />
              <FrameInner />
            </RectangleParent>
          </FrameParent>
          <FrameParent>
            <FrameContainer>
              <FrameDiv>
                <FrameChild alt="" src="/frame-38813595@2x.png" />
                <BadgeParent>
                  <Badge>
                    <BadgeAndTag>
                      <AvatarIcon alt="" src="/avatar@2x.png" />
                      <StarsIcon alt="" src="/stars.svg" />
                      <Placeholder1>
                        <Status1 />
                        <Placeholder>Travel</Placeholder>
                      </Placeholder1>
                      <StarsIcon alt="" src="/chevronright.svg" />
                      <CloseIcon>
                        <XLgIcon alt="" src="/xlg.svg" />
                      </CloseIcon>
                    </BadgeAndTag>
                  </Badge>
                  <TripToBali>Trip to Bali</TripToBali>
                  <Div>{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</Div>
                </BadgeParent>
              </FrameDiv>
              <Div1>50%</Div1>
            </FrameContainer>
            <RectangleParent>
              <FrameItem />
              <FrameInner />
            </RectangleParent>
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
    </>
  );
};

export default PersonalSaving;
