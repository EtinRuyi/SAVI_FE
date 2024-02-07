import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  align-items: center;
  margin-top: 125px;
  margin-left: 310px;
  margin-right: 60px;
  display: flex;
  justify-content: space-between;
  height: 45px;

  & .text {
    color: #000000;
    font-family: 'Inter-Bold', Helvetica;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.15px;
    line-height: 44.8px;
    margin-top: -1px;
    position: relative;
    width: 235px;
  }

  & .explore {
    color: var(--blue-1);
    font-family: 'Inter-medium', Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.15px;
    line-height: 22.4px;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    width: fit-content;
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="text"> Active Goals</div>
      <Link to="/empty-page" className="explore">
        Explore Groups
      </Link>
    </Container>
  );
};

export default Header;
