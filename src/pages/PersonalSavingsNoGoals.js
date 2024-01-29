import { useState, useCallback } from "react";
import AddMoreGoals from "../components/AddMoreGoals";
import PortalPopup from "../components/PortalPopup";
import LogoutModal from "../components/LogoutModal";
import "././PersonalSavingsNoGoals.css";

const PersonalSaving = () => {
  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);
  const [isAddMoreGoals1Open, setAddMoreGoals1Open] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const openAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(true);
  }, []);

  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);

  const openAddMoreGoals1 = useCallback(() => {
    setAddMoreGoals1Open(true);
  }, []);

  const closeAddMoreGoals1 = useCallback(() => {
    setAddMoreGoals1Open(false);
  }, []);

  const onExploreGroupsTextClick = useCallback(() => {
    // Please sync "Explore Groups" to the project
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
      <div className="personal-saving">
        <div className="my-goals-parent">
          <b className="my-goals">My Goals</b>
          <div className="add-new-goal" onClick={openAddMoreGoals}>
            Add New Goal
          </div>
        </div>
        <div className="frame-parent">
          <div className="you-dont-have-any-active-savi-wrapper">
            <div className="you-dont-have">
              You don’t have any active saving target, you can
            </div>
          </div>
          <div className="frame-group">
            <div
              className="create-a-new-target-wrapper"
              onClick={openAddMoreGoals1}
            >
              <div className="create-a-new">create a new target</div>
            </div>
            <div className="or-wrapper">
              <div className="create-a-new">or</div>
            </div>
            <div className="explore-groups-wrapper">
              <div
                className="explore-groups"
                onClick={onExploreGroupsTextClick}
              >
                explore groups
              </div>
            </div>
          </div>
        </div>
        <div className="side-bardefault">
          <b className="savi">Savi.</b>
          <div className="frame-container">
            <div className="overview-parent">
              <div className="savi">Overview</div>
              <div className="feature-1-parent">
                <div className="feature-1" onClick={onFeature1ContainerClick}>
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulkhome.svg"
                  />
                  <div className="savi">Dashboard</div>
                </div>
                <div className="feature-2">
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulkcategory.svg"
                  />
                  <div className="savi">Wallet</div>
                </div>
                <div className="feature-3">
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulksecuritycard.svg"
                  />
                  <div className="savings">Savings</div>
                </div>
                <div className="feature-1" onClick={onFeature4ContainerClick}>
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulkpeople.svg"
                  />
                  <div className="savi">Groups</div>
                </div>
                <div className="feature-1" onClick={onFeature5ContainerClick}>
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulktranslate.svg"
                  />
                  <div className="savi">Transactions</div>
                </div>
              </div>
            </div>
            <div className="overview-parent">
              <div className="savi">Others</div>
              <div className="feature-1-parent">
                <div className="feature-1" onClick={onFeature4Container2Click}>
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulksetting2.svg"
                  />
                  <div className="savi">Settings</div>
                </div>
                <div className="feature-1" onClick={openLogoutModal}>
                  <img
                    className="vuesaxbulkhome-icon"
                    alt=""
                    src="/vuesaxbulklogout.svg"
                  />
                  <div className="savi">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbardefault-type-wrapper">
          <div className="navbardefault-type">
            <div className="navbardefault-type-child" />
            <div className="avatardefault-parent">
              <img
                className="avatardefault-icon"
                alt=""
                src="/avatardefault@2x.png"
              />
              <div className="savi">Deborah</div>
            </div>
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <div className="search-alt-parent">
                  <img
                    className="search-alt-icon"
                    alt=""
                    src="/searchalt.svg"
                  />
                  <div className="savi">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddMoreGoalsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals}
        >
          <AddMoreGoals onClose={closeAddMoreGoals} />
        </PortalPopup>
      )}
      {isAddMoreGoals1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals1}
        >
          <AddMoreGoals onClose={closeAddMoreGoals1} />
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
