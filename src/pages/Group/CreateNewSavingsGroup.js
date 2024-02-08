import React from 'react';
import styled from 'styled-components';
import CreateGroupSuccessModal from '../../components/modal/CreateGroupSuccess';

const OuterContainer = styled.div`
  margin: 20px; /* Adjust margin off the screen size */
`;

const FormContainer = styled.div`
  margin: 0 auto; /* Center the form */
  max-width: 400px; /* Adjust as needed to make the form smaller */
  text-align: left; /* Align form elements to the left */
  display: flex;
  flex-direction: column; /* Align form elements to the left */
  align-items: flex-start; /* Align form elements to the left */
`;

const Title = styled.h1`
  text-align: left;
  margin-bottom: 30px; /* Add more margin bottom */
  font-size: 24px; /* Make smaller */
  font-weight: 600; /* Make thicker */
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  font-weight: ${({ bold }) =>
    bold ? 'bold' : 'normal'}; /* Make bold if bold prop is true */
  font-size: ${({ small }) =>
    small ? '0.8em' : '1em'}; /* Make smaller if small prop is true */
  color: black; /* Make text black */
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left; /* Position labels at the left */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black; /* Make text black */
`;

const Input = styled.input`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  text: black;
  border-radius: 50px; /* Make buttons rounded pill */
  background-color: #ccc; /* Set default color to grey */
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; /* Change to blue on hover */
  }
`;

const BigButton = styled(Button)`
  padding: 15px 40px;
  background-color: blue; /* Set big button color to blue */
  margin-bottom: 20px; /* Add margin-bottom */
  align-self: flex-start; /* Align big button to the left */
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;

const CreateSavingsGroupForm = () => {
  return (
    <OuterContainer>
      <FormContainer>
        <Title>Create New Savings Group</Title>
        <Image src="/image.png" alt="Savings Group" />
        <Description bold>
          Drop your image here or <Link href="#">browse</Link>
        </Description>
        <Description small>
          Drop an image that represents the title of your savings group here
        </Description>
        <Form>
          <FormGroup>
            <Label htmlFor="groupName">Group Name</Label>
            <Input
              type="text"
              id="groupName"
              placeholder="Enter the name of the group"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="contributionAmount">Contribution Amount</Label>
            <Input
              type="number"
              id="contributionAmount"
              placeholder="Enter amount"
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="startDate">Expected Start Date</Label>
                <Input type="date" id="startDate" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="endDate">Expected End Date</Label>
                <Input type="date" id="endDate" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="duration">Duration</Label>
                <Select id="duration">
                  <option value="">Select your duration</option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="4 months">4 months</option>
                  <option value="5 months">5 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                </Select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="numParticipants">Number of Participants</Label>
                <Input
                  type="number"
                  id="numParticipants"
                  placeholder="Enter the number of people"
                />
              </FormGroup>
            </Col>
          </Row>
          <ButtonGroup>
            <Button type="button">Daily</Button>
            <Button type="button">Weekly</Button>
            <Button type="button">Monthly</Button>
          </ButtonGroup>
          <FormGroup>
            <Label htmlFor="time">Time</Label>
            <Input type="text" id="time" placeholder="e.g., 4:00pm" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="purposeAndGoals">Purpose and Goals</Label>
            <TextArea
              id="purposeAndGoals"
              rows="4"
              placeholder="Enter purpose and goals"
            ></TextArea>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="termsAndConditions">Terms and Conditions</Label>
            <TextArea
              id="termsAndConditions"
              rows="4"
              placeholder="Enter terms and conditions"
            ></TextArea>
          </FormGroup>
          <BigButton type="submit">Add New Group</BigButton>
        </Form>
      </FormContainer>
    </OuterContainer>
  );
};

export default CreateSavingsGroupForm;
