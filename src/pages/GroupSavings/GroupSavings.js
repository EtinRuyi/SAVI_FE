import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from './Header';
import Notification from './Notification';
import ActiveSaving from './Card/Card';
import activeSavingsData from './activeSavings.json';
import image from '../../assets/images/Image1.png';

const GroupSavings = () => {
  const [activeSavings, setActiveSavings] = useState([]);

  useEffect(() => {
    // Fetching data from the imported JSON file
    setActiveSavings(activeSavingsData?.data?.activesavings || []);
  }, []);
  return (
    <>
      <Content>
        <Head />
        {activeSavings.length > 0 ? (
          activeSavings.map((activesaving) => (
            <ActiveSaving
              imageSrc={image}
              progress={activesaving.progress}
              title={activesaving.title}
              savings={activesaving.savings}
              withdrawal={activesaving.withdrawal}
              frequency={activesaving.frequency}
              duration={activesaving.duration}
              cashoutDate={activesaving.cashoutDate}
            />
          ))
        ) : (
          <Notification />
        )}
      </Content>
    </>
  );
};
const Content = styled.div`
  align-items: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  background-color: #f9fafb;
`;
export default GroupSavings;
