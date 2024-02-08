import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileMenu from './Menu';

const ActiveSaving = ({
  imageSrc,
  progress,
  title,
  savings,
  withdrawal,
  frequency,
  duration,
  cashoutDate,
}) => {
  return (
    <>
      <CardContainer>
        <CardInfo>
          <CardImage loading="lazy" src={imageSrc} />
          <CardContent>
            <CardHeader>
              <StatusTag>{progress}</StatusTag>
              <ProfileMenu />
            </CardHeader>
            <CardTitle>{title}</CardTitle>
            <Details>
              <Savings>
                <div className="text">Savings</div>
                <div className="content">₦{savings}</div>
              </Savings>
              <Widthdrawal>
                <div className="text">Withdrawal</div>
                <div className="content">₦{withdrawal}</div>
              </Widthdrawal>
              <Freq>
                <div className="text">Saving Freq</div>
                <div className="content">{frequency}</div>
              </Freq>
              <Duration>
                <div className="text">Duration</div>
                <div className="content">{duration} Months</div>
              </Duration>
              <CashoutDate>
                <div className="text">Cash Out Date</div>
                <div className="content">{cashoutDate}</div>
              </CashoutDate>
            </Details>
            <GroupDetails to="empty-page">View Group</GroupDetails>
          </CardContent>
        </CardInfo>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.16);
  background-color: var(--White, #fff);
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-left: 280px;
  margin-right: 177px;
  text-decoration: none;
  width: 877.04px; /* Set a percentage width for responsiveness */

  &:hover {
    transform: translateY(0.2rem);
    box-shadow: 0.3rem 0.5rem 1.5rem #bbbbbb;
  }

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const CardInfo = styled.div`
  padding-right: 57px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const CardImage = styled.img`
  object-position: center;
  height: 184.8px;
  max-width: 134.4px;
`;

const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
`;

const StatusTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1678.32px;
  background-color: var(--Teal-100, #ccfbf1);
  padding: 10.08px;
  gap: 1.68px;
  color: var(--Teal-500, #14b8a6);
  font: 500 14px/114% Inter, sans-serif;
  letter-spacing: 0.07px;
  white-space: nowrap;
  width: 91.6px;
  max-width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  width: hug(558.04px);
  height: 47.16px;
  margin-top: -10px;
  justify-content: space-between;
  gap: 211px;
  max-width:100%;

  }
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Details = styled.div`
  width: hug(555px);
  margin-top: 25px;
  height: hug(56.08px);
  display: flex;
  gap: 30px;
  max-width: 100%;
`;

const Savings = styled.div`
  width: hug(81px);
  height: 56.08px;
  margin-top: -1px;
  gap: 10.08px;

  & .text {
    max-width: 100%;
    color: #98a2b3;
    line-height: 26.88px;
    letter-spacing: 0.5px;
    margin-top: -1px;
    font: 400 16px/83% Inter, sans-serif;
  }

  & .content {
    color: #000;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    font: 500 16px/83% Inter, sans-serif;
  }
`;

const Widthdrawal = styled.div`
  width: hug(86px);
  height: hug(56.08px);
  margin-top: -1px;
  gap: 10.08px;

  & .text {
    max-width: 100%;
    color: #98a2b3;
    line-height: 26.88px;
    letter-spacing: 0.5px;
    margin-top: -1px;
    font: 400 16px/83% Inter, sans-serif;
  }

  & .content {
    color: #000;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    font: 500 16px/83% Inter, sans-serif;
    max-width: 100%;
  }
`;

const Freq = styled.div`
  width: hug(91px);
  height: hug(56.08px);
  margin-top: -1px;
  gap: 10.08px;

  & .text {
    max-width: 100%;
    color: #98a2b3;
    line-height: 26.88px;
    letter-spacing: 0.5px;
    margin-top: -1px;
    font: 400 16px/83% Inter, sans-serif;
  }

  & .content {
    max-width: 100%;
    color: #000;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    font: 500 16px/83% Inter, sans-serif;
  }
`;

const Duration = styled.div`
  width: hug(65px);
  height: hug(56.08px);
  margin-top: -1px;
  gap: 10.08px;
  max-width: 100%;

  & .text {
    max-width: 100%;
    color: #98a2b3;
    line-height: 26.88px;
    letter-spacing: 0.5px;
    margin-top: -1px;
    font: 400 16px/83% Inter, sans-serif;
  }

  & .content {
    max-width: 100%;
    color: #000;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    font: 500 16px/83% Inter, sans-serif;
  }
`;

const CashoutDate = styled.div`
  width: hug(109px);
  height: hug(56.08px);
  margin-top: -1px;
  gap: 10.08px;

  & .text {
    max-width: 100%;
    color: #98a2b3;
    line-height: 26.88px;
    letter-spacing: 0.5px;
    margin-top: -1px;
    font: 400 16px/83% Inter, sans-serif;
  }

  & .content {
    max-width: 100%;
    color: #000;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    font: 500 16px/83% Inter, sans-serif;
  }
`;

const CardTitle = styled.div`
  color: #000;
  line-height: 33.6px;
  letter-spacing: 0.12px;
  margin-top: 25px;
  font: 500 24px/83% Inter, sans-serif;
`;

const GroupDetails = styled(Link)`
  color: #2f80ed;
  letter-spacing: 0.5px;
  line-height: 26.88px;
  margin-top: 15px;
  text-decoration: none;
  font: 400 16px/83% Inter, sans-serif;
`;

export default ActiveSaving;
