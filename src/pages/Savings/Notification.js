import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Notification = (props) => {
  return (
    <Div>
      <Div2>You don’t have any active saving target, you can</Div2>
      <Div3 to="/empty-page">create a new target</Div3>
    </Div>
  );
};

const Div = styled.div`
  align-self: center;
  display: flex;
  margin-top: 200px;
  margin-left: 250px;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.08px;
  padding: 10px 10px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div2 = styled.div`
  color: #000;
  font-family: Inter, sans-serif;
  line-height: 168%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled(Link)`
  color: #2f80ed;
  font-family: Inter, sans-serif;
  line-height: 168%;
  align-self: center;
  margin-top: 10px;
  text-decoration: none;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Notification;
