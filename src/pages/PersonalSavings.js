import { useCallback } from "react";
import "./PersonalSavings.css";

const PersonalSaving = () => {
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

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Personal Saving" to the project
  }, []);

  return (
    <div className="personal-saving">
      <div className="side-bardefault">
        <h1 className="savi">Savi.</h1>
        <div className="savi1">
          <div className="overview-text">
            <div className="overview">Overview</div>
            <div className="feature">
              <div className="feature-1" onClick={onFeature1ContainerClick}>
                <img
                  className="vuesaxbulkhome-icon"
                  alt=""
                  src="/vuesaxbulkhome.svg"
                />
                <div className="dashboard">Dashboard</div>
              </div>
              <div className="feature-2">
                <img className="vuesaxbulkcategory-icon" alt="" />
                <div className="menu-two">Wallet</div>
              </div>
              <div className="feature-3">
                <img
                  className="vuesaxbulksecurity-card-icon"
                  alt=""
                  src="/vuesaxbulksecuritycard.svg"
                />
                <input className="savings" placeholder="Savings" type="text" />
              </div>
              <div className="feature-4" onClick={onFeature4ContainerClick}>
                <img
                  className="vuesaxbulkpeople-icon"
                  alt=""
                  src="/vuesaxbulkpeople.svg"
                />
                <input className="menu-four" placeholder="Groups" type="text" />
              </div>
              <div className="feature-5" onClick={onFeature5ContainerClick}>
                <img
                  className="vuesaxbulktranslate-icon"
                  alt=""
                  src="/vuesaxbulktranslate.svg"
                />
                <div className="menu-five">Transactions</div>
              </div>
            </div>
          </div>
          <div className="others-parent">
            <div className="others">Others</div>
            <div className="settings-feature">
              <div className="feature-41" onClick={onFeature4Container2Click}>
                <img
                  className="vuesaxbulksetting-2-icon"
                  alt=""
                  src="/vuesaxbulksetting2.svg"
                />
                <input
                  className="settings"
                  placeholder="Settings"
                  type="text"
                />
              </div>
              <div className="feature-51">
                <img
                  className="vuesaxbulklogout-icon"
                  alt=""
                  src="/vuesaxbulklogout.svg"
                />
                <div className="logout">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="nav-bar-default">
        <div className="navbardefault-type">
          <header className="navbardefault-type-child" />
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <div className="avatar-instance">
                <img className="search-alt-icon" alt="" src="/searchalt.svg" />
                <input className="search" placeholder="Search" type="text" />
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <img
              className="avatardefault-icon"
              loading="eager"
              alt=""
              src="/avatardefault@2x.png"
            />
            <div className="deborah">Deborah</div>
          </div>
        </div>
        <div className="goals-frame">
          <div className="my-goals-parent">
            <h1 className="my-goals">My Goals</h1>
            <div className="add-new-goal">Add New Goal</div>
          </div>
        </div>
        <section className="badge-placeholder-wrapper">
          <div className="badge-placeholder">
            <div className="tag-group-parent" onClick={onFrameContainerClick}>
              <div className="tag-group">
                <div className="tag-group1">
                  <img
                    className="tag-group-icon"
                    loading="eager"
                    alt=""
                    src="/frame-38813595@2x.png"
                  />
                  <div className="tag-group2">
                    <button className="badge">
                      <div className="badge-and-tag">
                        <img className="avatar-icon" alt="" />
                        <img className="stars-icon" alt="" />
                        <div className="placeholder">
                          <div className="status" />
                          <div className="placeholder1">Travel</div>
                        </div>
                        <img className="chevron-right-icon" alt="" />
                        <div className="close-icon">
                          <img className="x-lg-icon" alt="" />
                        </div>
                      </div>
                    </button>
                    <h3 className="trip-to-bali">Trip to Bali</h3>
                    <div className="div">{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</div>
                  </div>
                </div>
                <div className="divider">50%</div>
              </div>
              <div className="goal-frame">
                <div className="goal-frame-child" />
                <div className="badge-triple" />
              </div>
            </div>
            <div className="frame-parent">
              <div className="frame-group">
                <div className="frame-container">
                  <img
                    className="frame-child"
                    alt=""
                    src="/frame-38813595@2x.png"
                  />
                  <div className="badge-parent">
                    <button className="badge1">
                      <div className="badge-and-tag1">
                        <img className="avatar-icon1" alt="" />
                        <img className="stars-icon1" alt="" />
                        <div className="placeholder2">
                          <div className="status1" />
                          <div className="placeholder3">Travel</div>
                        </div>
                        <img className="chevron-right-icon1" alt="" />
                        <div className="close-icon1">
                          <img className="x-lg-icon1" alt="" />
                        </div>
                      </div>
                    </button>
                    <h3 className="trip-to-bali1">Trip to Bali</h3>
                    <div className="div1">{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</div>
                  </div>
                </div>
                <div className="div2">50%</div>
              </div>
              <div className="rectangle-parent">
                <div className="frame-item" />
                <div className="frame-inner" />
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="frame-parent2">
                  <img
                    className="frame-icon"
                    alt=""
                    src="/frame-38813595@2x.png"
                  />
                  <div className="badge-group">
                    <button className="badge2">
                      <div className="badge-and-tag2">
                        <img className="avatar-icon2" alt="" />
                        <img className="stars-icon2" alt="" />
                        <div className="placeholder4">
                          <div className="status2" />
                          <div className="placeholder5">Travel</div>
                        </div>
                        <img className="chevron-right-icon2" alt="" />
                        <div className="close-icon2">
                          <img className="x-lg-icon2" alt="" />
                        </div>
                      </div>
                    </button>
                    <h3 className="trip-to-bali2">Trip to Bali</h3>
                    <div className="div3">{`₦ 5,000,000.00 / ₦ 10,000,000.00 `}</div>
                  </div>
                </div>
                <div className="div4">50%</div>
              </div>
              <div className="rectangle-group">
                <div className="rectangle-div" />
                <div className="frame-child1" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalSaving;
