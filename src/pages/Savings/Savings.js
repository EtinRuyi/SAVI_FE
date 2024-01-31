import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from './Header';
import Notification from './Notification';
import Goals from './Goals';
import PersonalGoalsData from './PersonalGoalsData.json';
import image from '../../assets/images/Image1.png';

const Content = styled.div`
  align-items: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

const Savings = () => {
  const [goalsData, setGoalsData] = useState([]);

  useEffect(() => {
    // Fetching data from the imported JSON file
    setGoalsData(PersonalGoalsData?.data?.goals || []);
  }, []);

  return (
    <>
      <Content>
        <Head />
        {goalsData.length > 0 ? (
          goalsData.map((goal) => (
            <Goals
              imageSrc={image}
              category={goal.category}
              title={goal.title}
              amount={goal.amount}
              progress={goal.progress}
            />
          ))
        ) : (
          <Notification />
        )}
      </Content>
    </>
  );
};

export default Savings;
