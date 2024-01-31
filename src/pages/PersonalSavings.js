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
const Savi = styled.b`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const Savi1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const VuesaxbulkhomeIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
`;
const Feature = styled.div`
  width: 223px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  cursor: pointer;
`;
const Feature1 = styled.div`
  width: 223px;
  border-radius: 8px;
  background-color: #fff;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
`;
const Savings = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Feature2 = styled.div`
  width: 223px;
  border-radius: 8px;
  background-color: #b5179e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  color: #fff;
`;
const Feature1Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  color: #101828;
`;
const OverviewParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const FrameParent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  text-align: left;
  font-size: 16px;
  color: #98a2b3;
  font-family: Inter;
`;
const SideBardefault = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fff;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;
  text-align: center;
  color: #b5179e;
  font-family: "Bodoni Moda";
`;
const NavbardefaultTypeChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fff;
  width: 1169px;
  height: 72px;
`;
const AvatardefaultIcon = styled.img`
  width: 32px;
  position: relative;
  border-radius: 200px;
  height: 32px;
  object-fit: cover;
`;
const AvatardefaultParent = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: 937px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const SearchAltIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
 
  flex-shrink: 0;
`;
const SearchAltParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const SearchBar = styled.div`
  width: 308px;
  border-radius: 100px;
  background-color: #fff;
  border: 1px solid #d0d5dd;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 24px;
`;
const SearchBarWrapper = styled.div`
  position: absolute;
  top: 19px;
  left: 51px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #98a2b3;
`;
const NavbardefaultType = styled.div`
  width: 1175px;
  position: relative;
  height: 72px;
 
  flex-shrink: 0;
`;
const NavbardefaultTypeWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 271px;
  width: 1169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  color: #101828;
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

  const onFeature1ContainerClick = useCallback(() => {
    // Please sync "DashBoard" to the project
  }, []);

  const onFeature4ContainerClick = useCallback(() => {
    // Please sync "Joined Group" to the project
  }, []);

  const onFeature5ContainerClick = useCallback(() => {
    // Please sync "Transactions" to the project
  }, []);

  const onFeature4Container2Click = useCallback(() => {
    // Please sync "Settings" to the project
  }, []);

  const openLogoutModal = useCallback(() => {
    setLogoutModalOpen(true);
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
        <SideBardefault>
          <Savi>Savi.</Savi>
          <FrameParent2>
            <OverviewParent>
              <Savi1>Overview</Savi1>
              <Feature1Parent>
                <Feature onClick={onFeature1ContainerClick}>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulkhome.svg" />
                  <Savi1>Dashboard</Savi1>
                </Feature>
                <Feature1>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulkcategory.svg" />
                  <Savi1>Wallet</Savi1>
                </Feature1>
                <Feature2>
                  <VuesaxbulkhomeIcon
                    alt=""
                    src="/vuesaxbulksecuritycard.svg"
                  />
                  <Savings>Savings</Savings>
                </Feature2>
                <Feature onClick={onFeature4ContainerClick}>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulkpeople.svg" />
                  <Savi1>Groups</Savi1>
                </Feature>
                <Feature onClick={onFeature5ContainerClick}>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulktranslate.svg" />
                  <Savi1>Transactions</Savi1>
                </Feature>
              </Feature1Parent>
            </OverviewParent>
            <OverviewParent>
              <Savi1>Others</Savi1>
              <Feature1Parent>
                <Feature onClick={onFeature4Container2Click}>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulksetting2.svg" />
                  <Savi1>Settings</Savi1>
                </Feature>
                <Feature onClick={openLogoutModal}>
                  <VuesaxbulkhomeIcon alt="" src="/vuesaxbulklogout.svg" />
                  <Savi1>Logout</Savi1>
                </Feature>
              </Feature1Parent>
            </OverviewParent>
          </FrameParent2>
        </SideBardefault>
        <NavbardefaultTypeWrapper>
          <NavbardefaultType>
            <NavbardefaultTypeChild />
            <AvatardefaultParent>
              <AvatardefaultIcon alt="" src="/avatardefault@2x.png" />
              <Savi1>Deborah</Savi1>
            </AvatardefaultParent>
            <SearchBarWrapper>
              <SearchBar>
                <SearchAltParent>
                  <SearchAltIcon alt="" src="/searchalt.svg" />
                  <Savi1>Search</Savi1>
                </SearchAltParent>
              </SearchBar>
            </SearchBarWrapper>
          </NavbardefaultType>
        </NavbardefaultTypeWrapper>
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
