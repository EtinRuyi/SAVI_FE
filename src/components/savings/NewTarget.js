import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import MoneyInput from '../../components/inputs/MoneyInput';
import SelectInput from '../../components/inputs/SelectInput';
//import { PaystackButton } from 'react-paystack';
toast.configure();

const NewTarget = () => {
  let [targettitle, setTargetTitle] = useState('');
  let [targetamount, setTargetAmount] = useState('');
  let [frequency, setFrequency] = useState('');
  let [startdate, setStartDate] = useState('');
  let [withdate, setWithDate] = useState('');
  let [autosave, setAutoSave] = useState('');
  let [autosaveamount, setAutoSaveAmount] = useState('');

  
  const email = localStorage.getItem('email');
 
  let walletId = localStorage.getItem('walletNumber');
  const navigate = useNavigate();

  const handleNewTarget = async (e) => {
    e.preventDefault();

    if (targettitle === '') {
      toast.error('Input Target Title');
      return;
    }
   
    try {
      const response = await axios.post(
        'https://localhost:7226/api/Saving/createPersonalSaving',
        {
          targettitle,
          targetamount,
          frequency,
          startdate,
          withdate,
          autosave,
          autosaveamount,
          walletId          
        }
      );

      const data = response.data;
      if (data.succeeded) {
        toast.success(data.message);
        console.log(data.data.balance);
        localStorage.setItem('balance', data.data.balance);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('' + error);
    }
  };

  const handleAmountChange = (e) => {
    const sanitizedValue = e.target.value.replace(/,/g, '');

  
  };

  return (
    <DepositFundsRoot>
      <FrameParent>
        <TextWrapper>
          <Text5>Set a Targets</Text5>
        </TextWrapper>
        <Text6>
          <TextTxt>
            <PleaseCompleteThe>Create and track multiple saving goals to achieve your financial targets</PleaseCompleteThe>
          </TextTxt>
        </Text6>
      </FrameParent>
      <TextParent>
        <Text7>Target</Text7>
        <MoneyInput
          type="text"
          placeholder="Target Title"
          id=""
          name="amount"
        />
      </TextParent>
      <TextParent>
        <Text7>Target Amount</Text7>
        <MoneyInput
          type="number"
          placeholder="Target amount"
          id=""
          name="amount"
          onChange={setTargetAmount}
        />
      </TextParent>
      <TextParent>
        <Text7>Frequency</Text7>
        <Select required onChange={setFrequency}>
        <option value="">--select--</option>
          <option value="0">Daily</option>
          <option value="1">Weekly</option>
          <option value="2">Monthly</option>
        </Select>
         
      </TextParent>
      <TextParent>
        <Text7>Start Date</Text7>
        <MoneyInput required
          type="date"
          placeholder=""
          id=""
          name="amount"
        />
      </TextParent>
      <TextParent>
        <Text7>Withdrawal Date</Text7>
        <MoneyInput required
          type="date"
          placeholder=""
          id=""
          name="amount"
        />
      </TextParent>
      <TextParent>
        <Text7>Auto Saving</Text7>
        <Select required onChange={setAutoSave}> 
        <option value="">--selec--</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
         
        </Select>
      </TextParent>
      <TextParent>
        <Text7>Auto Save Amount</Text7>
        <MoneyInput onChange={setAutoSaveAmount}
          type="number"
          placeholder="Auto Save Amount"
          id=""
          name="amount"
        />
      </TextParent>
    
      <Ctadefault onClick={handleNewTarget}>
        <Text7 >Submit</Text7>
      </Ctadefault>
     
    </DepositFundsRoot>
  );
};

export default NewTarget;

const Text5 = styled.b`
  position: relative;
  line-height: 140%;
`;
const Select = styled.select`
border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  width: 20rem;
  overflow: hidden;
  align-items: center;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
  font-size: var(--button-normal-14-size);
  color: black;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;
const TextTxt = styled.span`
  width: 100%;
`;
const Text6 = styled.div`
  position: relative;
  font-size: var(--text-md-medium-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  align-items: center;
  width: 23.38rem;
  height: 3.06rem;
  flex-shrink: 0;
`;
const Input = styled.input`
  border: 1px solid var(--grey-300);
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: black;
  box-sizing: border-box;
  margin-top: var(--gap-5xs);
  background-color: var(--white);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-81xl);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--headline-medium-24-size);
`;
const Text7 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Iconadd4 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Text8 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Ctadefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;
const DepositFundsRoot = styled.div`
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
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;
