import React from 'react';
import styled from 'styled-components';

// Styled components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeMessage>You are welcome to Savi Project</WelcomeMessage>
      {/* Add more components or content as needed */}
    </HomeContainer>
  );
};

export default Home;
