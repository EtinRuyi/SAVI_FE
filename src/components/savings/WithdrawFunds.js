import styled from 'styled-components';
import { useState } from 'react';

const WithdrawFunds = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  const handleAmountChange = (event) => {
    const newAmount = event.target.value.replace(/\D/g, '');
    setWithdrawalAmount(newAmount);
  };

  const handleWithdrawalSubmit = () => {
    console.log('Submitting withdrawal amount:', withdrawalAmount);
  };

  return (
    <WithdrawFundsRoot>
      <TextWrapper>
        <Text1>Access Your Savings</Text1>
      </TextWrapper>
      <Text2>
        <TextTxt>
          <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
          <Savi>Savi</Savi>
          <PleaseCompleteThe>.</PleaseCompleteThe>
        </TextTxt>
      </Text2>
      <TextParent>
        <Text3>Amount to Withdraw</Text3>
        <Buttondefault>
          <label htmlFor="withdrawalAmount" style={{ flex: 1 }}>
            <input
              type="text"
              id="withdrawalAmount"
              value={withdrawalAmount}
              onChange={handleAmountChange}
              placeholder="Type the amount"
              style={{ width: '100%', border: 'none', outline: 'none' }}
            />
          </label>
        </Buttondefault>
      </TextParent>
      <Ctadefault onClick={handleWithdrawalSubmit} role="button" tabIndex="0">
        <Text3>Submit</Text3>
      </Ctadefault>
    </WithdrawFundsRoot>
  );
};

export default WithdrawFunds;

const Text1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--headline-bold-24-size);
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;
const TextTxt = styled.span`
  width: 100%;
`;
const Text2 = styled.div`
  width: 23.38rem;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: none;
  align-items: center;
  height: 3.06rem;
  flex-shrink: 0;
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
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
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
  cursor: pointer; /* Add this line to enable the hand cursor on hover */
`;
const WithdrawFundsRoot = styled.div`
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
  font-size: var(--body-text-bold-16-size);
  color: var(--main-text);
  font-family: var(--button-semi-bold-14);
`;