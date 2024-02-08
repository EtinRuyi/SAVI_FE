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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7226/api/Group/allActiveGroups`
        );
        const result = await response.json();
        if (result.succeeded) {
          console.log(result);
          setActiveSavings(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Content>
        <Head />
        {activeSavings.length > 0 ? (
          activeSavings.map((activesaving) => (
            <ActiveSaving
              imageSrc={image}
              progress={'Ongoing'}
              title={activesaving.groupName}
              savings={activesaving.contributionAmount}
              withdrawal={activesaving.contributionAmount}
              frequency={activesaving.frequency}
              duration={activesaving.frequency}
              cashoutDate={activesaving.expectedEndDate}
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
