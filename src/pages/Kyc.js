import KycForm from '../components/kyc/KycForm';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: auto;
`;
const Header = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
`;
const Heading = styled.div`
  font-weight: bold;
  text-align: center;
`;
const Paragraph = styled.p`
  font-size: 11px;
  text-align: center;
`;
const Span = styled.span`
  color: #b5179e;
`;

const Kyc = () => {
  return (
    <Container>
      <Header>
        <Heading>Complete Your KYC Verification</Heading>
        <Paragraph>
          Please complete the KYC verification process to <br /> unlock the full
          features and benefits of <Span>Savi</Span>.
        </Paragraph>
      </Header>
      <KycForm />
    </Container>
  );
};

export default Kyc;
