import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';

const MainContainer = styled.span`
  align-items: start;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 80px 0 50px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;
const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const Logo = styled.div`
  color: var(--primary-color, #b5179e);
  text-align: center;
  letter-spacing: 0.15px;
  margin-top: 50px;
  font: 700 24px/140% Bodoni Moda, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 30px;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  padding: 32px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubTitle = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
`;

const PasswordInput = styled.input`
  color: var(--Main-Text, #101828);
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  padding: 12px 16px;
  font: 400 14px/143% Inter, sans-serif;

  @media (max-width: 991px) {
    padding: 12px;
  }
`;

const ResetButton = styled.button`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  margin-top: 24px;
  padding: 12px;
  font: 500 16px/140% Inter, sans-serif;

  @media (max-width: 991px) {
    padding: 12px;
  }
`;

const PrivacyPolicy = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const CopyrightText = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const ResetPassword = (props) => {
  return (
    <MainContainer>
      <Logo>Savi.</Logo>
      <Container>
        <ContentWrapper>
          <Title>Reset your password</Title>
          <SubTitle>New Password</SubTitle>
          <PasswordInput type="password" placeholder="Enter new password" />
          <SubTitle>Confirm New Password</SubTitle>
          <PasswordInput type="password" placeholder="Confirm new password" />
          <ResetButton>Reset Password</ResetButton>
          <Footer />
        </ContentWrapper>
      </Container>
    </MainContainer>
  );
};

export default ResetPassword;
