import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  align-items: center;
  margin-top: 96px;
  margin-left: 310px;
  margin-right: 130px;
  display: flex;
  justify-content: space-between;
  width: flex;

  & .text {
    color: #000000;
    font-family: 'Inter-Bold', Helvetica;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.15px;
    line-height: 44.8px;
    margin-top: -1px;
    position: relative;
    width: 258px;
  }

  & .add-new-goal {
    color: var(--blue-1);
    font-family: 'Inter-medium', Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08px;
    line-height: 16px;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    width: fit-content;
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="text"> My Goals</div>
      <Link to="/empty-page" className="add-new-goal">
        Add New Goal
      </Link>
    </Container>
  );
};

export default Header;