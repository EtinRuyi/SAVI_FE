import { useState, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeFrame from "./TimeFrame";

const AddMoreGoals = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [withdrawalDate, setWithdrawalDate] = useState(null);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleSubmit = async () => {
    try {
      // Gather data from the input fields
      const targetValue = document.getElementById("targetInput").value;
      const amountValue = document.getElementById("amountInput").value;
      const frequencyValue = document.getElementById("frequencyInput").value;
      const startDateValue = document.getElementById("startDateInput").value;
      const withdrawalDateValue = document.getElementById(
        "withdrawalDateInput"
      ).value;

      // Prepare the data for the API request
      const requestData = {
        target: targetValue,
        amount: amountValue,
        frequency: frequencyValue,
        startDate: startDate,
        withdrawalDate: withdrawalDate,
      };

      // Make the API request
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(requestData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Submit successful!");
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Submit failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during submit:", error);
    }
  };

  return (
    <>
      <AddMoreGoalsRoot>
        <FrameParent>
          <TextWrapper>
            <Text1>Set a Target</Text1>
          </TextWrapper>
          <Text2>
            Create and track multiple saving goals to achieve your financial
            targets
          </Text2>
        </FrameParent>
        <AddMoreGoalsInner>
          <FrameWrapper>
            <FrameGroup>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Target</Text3>
                    <Buttondefault>
                      <label htmlFor="targetInput" style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="targetInput"
                          placeholder="Type here"
                          style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </label>
                    </Buttondefault>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Target Amount</Text3>
                    <Buttondefault>
                      <label htmlFor="amountInput" style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="amountInput"
                          placeholder="Numbers only"
                          style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </label>
                    </Buttondefault>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Frequency</Text3>
                    <Buttondefault1>
                      <label htmlFor="frequencyInput" style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="frequencyInput"
                          placeholder="Pick your frequency"
                          style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </label>
                      <ArrowDropDownIcon
                        alt=""
                        src="/arrow-drop-down.svg"
                        onClick={openFrame}
                      />
                    </Buttondefault1>
                  </TextParent>
                </FrameWrapper>
              </FrameWrapper>
              <FrameParent1>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Start Date</Text3>
                    <StyledDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Pick your date"
                      dateFormat="MMMM d, yyyy"
                    />
                  </TextParent>
                </FrameWrapper>
                <FrameWrapper>
                  <TextParent>
                    <Text3>Withdrawal Date</Text3>
                    <StyledDatePicker
                      selected={withdrawalDate}
                      onChange={(date) => setWithdrawalDate(date)}
                      placeholderText="Pick your date"
                      dateFormat="MMMM d, yyyy"
                    />
                  </TextParent>
                </FrameWrapper>
              </FrameParent1>
              <Ctadefault onClick={handleSubmit}>
                <Text3>Submit</Text3>
              </Ctadefault>
            </FrameGroup>
          </FrameWrapper>
        </AddMoreGoalsInner>
      </AddMoreGoalsRoot>
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

const Text1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Text2 = styled.div`
  width: 23.38rem;
  position: relative;
  font-size: var(--body-text-bold-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.06rem;
  flex-shrink: 0;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const FrameParent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Text3 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Buttondefault = styled.div`
  width: 20rem;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-81xl);
  font-size: var(--button-semi-bold-14-size);
  color: var(--grey-400);
`;
const StyledDatePicker = styled(DatePicker)`
  width: 20rem;
  padding: var(--padding-xs) var(--padding-base);
  border-radius: var(--br-5xs);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  font-size: var(--button-semi-bold-14-size);
  color: black;
  margin: 0; /* Add this to remove any default margin */

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ArrowDropDownIcon = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const Buttondefault1 = styled.div`
  width: 20rem;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--button-semi-bold-14-size);
  color: var(--grey-400);
`;

const Ctadefault = styled.div`
  width: 20rem;
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
  cursor: pointer;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const AddMoreGoalsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-text-bold-16-size);
`;
const AddMoreGoalsRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--headline-bold-24-size);
  color: var(--main-text);
  font-family: var(--button-semi-bold-14);
`;
