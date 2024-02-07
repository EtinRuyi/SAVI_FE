import styled from 'styled-components';
import '../App.css';
import Header from '../components/navs/Header';
import Sidebar from '../components/navs/Sidebar';
import { Container, Row } from 'react-bootstrap';
import ExploreGroup from './Group/ExploreGroup';
const Frame_GroupEmpty = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
        <Container>
          <Row>
            <ExploreGroup/>
          </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Frame_GroupEmpty;
const FrameOfAddNewTarget = styled.div`
cursor:pointer;
  color: var(--blue-1);
`;
const MyGoals = styled.h1`
  margin: 0;
  width: 16.13rem;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.69rem;
  }
`;
const AddNewGoal = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
  color: var(--blue-1);
  white-space: pre-wrap;
  cursor:pointer;
`;

const FrameOfMyGoals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 2.44rem;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
`;

const YouDontHave = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
`;
const CreateNewTargetCallToActi = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const CreateANew = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 600;
  cursor:pointer;
`;
const TextForAddNewTarget = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
