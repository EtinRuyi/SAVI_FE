import { Container, Row } from 'react-bootstrap';
import '../App.css';
import Header from '../components/navs/Header';
import Sidebar from '../components/navs/Sidebar';
import PersonalSaving from './savings/PersonalSaving';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Frame_PersonalSavingDetails = () => {
  const navigate = useNavigate();
  const onMyGoalTextClick = useCallback(() => {
    navigate("/personalsaving");
  }, []);
  const [personalSavingData, setPersonalSavingData] = useState(null);

  const location = useLocation();
  
  useEffect(() => {
    // Function to fetch personal savings data from the API
    const fetchPersonalSavingData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const savingsId = searchParams.get('id');


        //const savingsId = "1425f12e-fea5-409e-8dd4-1169fb2c441c";
        const response = await fetch(`https://localhost:7226/api/Saving/PersonalSavingDetails?savingsId=${savingsId}`);
        let data = await response.json();
        data = data.data;
        console.log(data);
        setPersonalSavingData(data);
      } catch (error) {
        console.error('Error fetching personal savings data:', error);
      }
    };

    // Call the function to fetch data
    fetchPersonalSavingData();
  }, []);



  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
          <Container>
          <Row style={{ width: '100%' }}>
              <MyGoalParent>
                <MyGoal onClick={onMyGoalTextClick}>My Goal</MyGoal>
                <IconsolidcheveronRight2
                  alt=""
                  src="/iconsolidcheveronright.svg"
                />
                <TripToBali>
                  {personalSavingData?.title}
                </TripToBali>
              </MyGoalParent>
            </Row>
            <Row style={{ width: '100%' }}>
              <FrameOfMyGoals>
               <MyGoals>{personalSavingData?.title}</MyGoals>
                <AddNewGoal>Add New Goal</AddNewGoal>
              </FrameOfMyGoals>
            </Row>

            <Row style={{ width: '100%' }}>
              <PersonalSaving data={personalSavingData}/>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Frame_PersonalSavingDetails;
const MyGoal = styled.div`
  position: relative;
  line-height: 1.25rem;
  cursor: pointer;
`;

const FrameOfMyGoals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 2.44rem;
  margin-bottom: 1em;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
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

const IconsolidcheveronRight2 = styled.img`
  width: 1.25rem;
  position: relative;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const TripToBali = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--main-text);
`;

const AddNewGoal = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
  color: var(--blue-1);
  white-space: pre-wrap;
  cursor: pointer;
`;
const MyGoalParent = styled.div`
  //position: absolute;
  top: 6rem;
  margin-bottom:2em;
  left: 19.44rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--grey-400);
`;