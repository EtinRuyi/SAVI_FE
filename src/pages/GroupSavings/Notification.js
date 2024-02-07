import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Notification = (props) => {
  return (
    <Div>
      <TextWrapper>
        <Div2>You don’t have any active saving group, you can</Div2>
      </TextWrapper>
      <BottomWrapper>
        <TextWrap>
          <Text to="/empty-page">create a new group</Text>
        </TextWrap>
        <MiddleTextWrapper>
          <MiddleText>or</MiddleText>
        </MiddleTextWrapper>
        <TextWrapp>
          <Text to="/empty-page">explore groups</Text>
        </TextWrapp>
      </BottomWrapper>
    </Div>
  );
};

const TextWrapper = styled.div`
  width: 403px;
  height: hug(47px);
  padding: 10px;
  gap: 10px;
`;
const Div = styled.div`
  align-item: center;
  width: 403px;
  height: 74px;
  margin-top: 200px;
  margin-left: 620px;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div2 = styled.div`
  color: #000000;
  font-family: Inter, sans-serif;
  line-height: 26.88px;
  letter-spacing: 0.5px;
  align-items: center;
  font-weight: 500;
  width: 383px;
  height: 27px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Text = styled(Link)`
  color: #2f80ed;
  font-size: 16px;
  font-family: Inter, sans-serif;
  line-height: 26.88px;
  align-self: center;
  letter-spacing: 0.5%;
  text-decoration: none;
  width: 149px;
  height: 27px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TextWrap = styled.div`
  width: hug(149px);
  height: hug(27px);
  gap: 10px;
`;

const TextWrapp = styled.div`
  width: hug(116px);
  height: hug(27px);
  gap: 10px;
`;
const MiddleText = styled.p`
  font-size: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26.88px;
  letter-spacing: 0.5px;
  align-items: center;
  width: 16px;
  height: 27px;
`;

const MiddleTextWrapper = styled.div`
  width: hug(16px);
  height: hug(27px);
  gap: 10px;
`;

const BottomWrapper = styled.div`
  width: hug(289px);
  height: hug(27px);
  gap: 4px;
  margin-left: 65px;
  display: flex;
  align-item: center;
`;
export default Notification;
