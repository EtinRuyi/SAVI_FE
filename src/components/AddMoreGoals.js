import { useState, useCallback } from "react";
import TimeFrame from "./TimeFrame";
import PortalPopup from "./PortalPopup";
import "./AddMoreGoals.css";

const AddMoreGoals = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="add-more-goals">
        <div className="frame-parent1">
          <div className="text-wrapper">
            <b className="text">Set a Target</b>
          </div>
          <div className="text1">
            Create and track multiple saving goals to achieve your financial
            targets
          </div>
        </div>
        <div className="add-more-goals-inner">
          <div className="frame-wrapper1">
            <div className="frame-parent2">
              <div className="frame-wrapper1">
                <div className="frame-wrapper1">
                  <div className="text-parent">
                    <div className="text2">Target</div>
                    <div className="buttondefault">
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <div className="text3">Type here</div>
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper1">
                <div className="frame-wrapper1">
                  <div className="text-parent">
                    <div className="text2">Target Amount</div>
                    <div className="buttondefault">
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <div className="text3">Numbers only</div>
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper1">
                <div className="frame-wrapper1">
                  <div className="text-parent">
                    <div className="text2">Frequency</div>
                    <div className="buttondefault2">
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <div className="text3">Pick your frequency</div>
                      <img className="iconadd" alt="" src="/arrow_drop_down.png" />
                      <img
                        className="arrow-drop-down-icon"
                        alt=""
                        src="/arrow_drop_down.png"
                        onClick={openFrame}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="frame-wrapper1">
                  <div className="text-parent">
                    <div className="text2">Start Date</div>
                    <div className="buttondefault2">
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <div className="text3">Pick your date</div>
                      <img className="iconadd" alt="" src="/calendar-lines.png" />
                      <img
                        className="calendar-lines-icon"
                        alt=""
                        src="/calendar-lines.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper1">
                  <div className="text-parent">
                    <div className="text2">Withdrawal Date</div>
                    <div className="buttondefault2">
                      <img className="iconadd" alt="" src="/iconadd.svg" />
                      <div className="text3">Pick your date</div>
                      <img className="iconadd" alt="" src="/calendar-lines.png" />
                      <img
                        className="calendar-lines-icon"
                        alt=""
                        src="/calendar-lines.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ctadefault">
                <img className="iconadd" alt="" src="/iconadd.svg" />
                <div className="text2">Submit</div>
                <img className="iconadd" alt="" src="/iconadd.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <TimeFrame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddMoreGoals;
