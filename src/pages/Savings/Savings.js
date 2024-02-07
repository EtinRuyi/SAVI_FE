import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Goals from './Goals';
import image from '../../assets/images/Image1.png';

const Content = styled.div`
  align-items: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  background-color: #f9fafb;
`;

const Savings = () => {
  const [goalsData, setGoalsData] = useState([]);

  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7226/api/Saving/list/${localStorage.getItem("walletNumber")}`);
        const result = await response.json();
        if(result.succeeded){
          console.log(result);
          setGoalsData(result.data);
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
        {
          goalsData.map((goal) => (
            
            <Goals          
              imageSrc={image}
              category="Progress"
              title={goal.title}
              amount= {goal.balance+"/"+goal.goalAmount}
              progress={(goal.balance/goal.goalAmount*100)+"%"}
              id={goal.id}
            />
          ))
        }
      </Content>
    </>
  );
};

export default Savings;
