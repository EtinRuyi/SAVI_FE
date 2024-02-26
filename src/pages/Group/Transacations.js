import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Transactions = () => {
  const navigate = useNavigate();

  const [groupDetail, setGroupDetail] = useState('');
  const [groupMembers, setGroupMember] = useState('');
  const [transactions, setTransactions] = useState('');
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isTransactionsSet, setTransactionSet] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [isDismissed, setDismissed] = useState(false);
  const [balance, setBalance] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const groupId = searchParams.get('id');
  const getGroupDetails = async () => {
    try {
      const response = await fetch(
        `https://localhost:7226/api/Group/get-explore-details?id=${groupId}`
      );
      let data = await response.json();
      if (data.succeeded) {
        setGroupDetail(data.data);
        setGroupMember(data.data.groupSavingsMembers);
        setIsContentLoaded(true);
        console.log(data.data);
      } else {
        // navigate('/explore-group')
      }
    } catch (error) {
      toast.error('' + error);
    }
  };

  const getGroupMembers = async () => {
    try {
      await axios
        .get(
          `https://localhost:7226/api/GroupTransaction/get-group-transactions?groupId=${groupId}`
        )
        .then((response) => {
          // const sortedData = response.data.data.sort(
          //   (a, b) => parseInt(a.createdAt) - parseInt(b.createdAt)
          // );

          setTransactions(response.data.data);
          setTransactionSet(true);
          console.log('response', response.data.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };
  const fetchWalletBalance = async () => {
    try {
      const response = await fetch(
        `https://localhost:7226/api/Wallet/GetWalletByNumber?number=${localStorage.getItem(
          'walletNumber'
        )}`
      );
      const result = await response.json();
      setBalance(result.data.balance);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getGroupDetails();
    getGroupMembers();
    fetchWalletBalance();
  }, []);
  const formatDate = (originalDateString) => {
    var date = new Date(originalDateString);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return day + ' ' + month + ', ' + year;
  };

  function getDuration(date1String, date2String) {
    // Parse the date strings into Date objects
    var date1 = new Date(date1String);

    var date2 = new Date(date2String);

    // Calculate the difference in milliseconds
    var differenceMs = date2 - date1;

    // Convert milliseconds to days
    var differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    // Convert days to months, weeks, and remaining days
    var months = Math.floor(differenceDays / 30);
    var remainingDays = differenceDays % 30;
    var weeks = Math.floor(remainingDays / 7);
    var days = remainingDays % 7;

    months = months === 0 ? '' : months;
    weeks = weeks === 0 ? '' : weeks;
    days = days === 0 ? '' : days;

    months =
      months === 1 ? months + ' mon' : months === '' ? '' : months + ' mons';
    weeks =
      weeks === 1 ? weeks + ' week' : weeks === '' ? '' : weeks + ' weeks';
    days = days === 1 ? days + ' day' : days === '' ? '' : days + ' days';
    return months + ' ' + weeks + ' ' + days;
  }
  const openPayNow = () => {
    Swal.fire({
      title: 'Do you want to pay now?',
      text: 'Pay your own quota of the contribution',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let groupSavingsId = groupId;

        await axios
          .post('https://localhost:7226/api/GroupTransaction/fund-group', {
            userId,
            groupSavingsId,
          })
          .then((response) => {
            console.log('data', response.data);
            if (response.data.succeeded) {
              Swal.fire('Success', 'Payment completed successfully', 'success');
            } else {
              toast.error('' + response.data.message);
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error('' + error.response.data.message);
              //  console.error('Server responded with error status:', error.response.data);
            } else if (error.request) {
              console.error('No response received from server:', error.request);
            } else {
              console.error('Error setting up request:', error.message);
            }
          });
      }
    });
  };
  const runDate = (a, onlymonth) => {
    if (onlymonth) {
      const date = new Date(a);
      return date.toLocaleString('default', { month: 'long' });
    } else {
      const date = new Date(a);

      // Define an array to map month indices to month names
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      // Extract day, month, year, hour, and minute components from the date object
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      let hour = date.getHours();
      const minute = date.getMinutes();

      // Convert hour to 12-hour format and determine AM/PM
      const ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12 || 12;

      // Format the date string
      const formattedDate = `${day} ${month}, ${year} ${hour}:${minute
        .toString()
        .padStart(2, '0')}${ampm}`;

      return formattedDate;
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <Div>     
        <Container style={{background:'#f9fafb'}}>
          <Row>
            <PersonalSavingRoot>
              <MyGoalsParent>
                <MyGoals>Transactions</MyGoals>
                <div>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Clear All{' '}
                  </Link>
                </div>
              </MyGoalsParent>
            </PersonalSavingRoot>
          </Row>
          <Row style={{paddingInline:'10px'}}>
            <DaySection>
              <SectionTitle>
                <Day>Today</Day>
              </SectionTitle>
                 <Table>
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><Text>Received</Text></td>
                </TRows>
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><TextGreen>N500</TextGreen></td>
                  <td><TextRed>Sent</TextRed></td>
                </TRows>               
              </Table>       
            </DaySection>
            <DaySection>
              <SectionTitle>
                <Day>Yesterday</Day>
              </SectionTitle>
                 <Table>
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextRed>Sent</TextRed></td>
                </TRows>
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextGreen>Received</TextGreen></td>
                </TRows>             
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextGreen>Received</TextGreen></td>
                </TRows>     
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextGreen>Received</TextGreen></td>
                </TRows>     
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextGreen>Received</TextGreen></td>
                </TRows>     
                <TRows>
                  <td><Pic src='profile.jpg'></Pic></td> 
                  <td><Text>Oluwadamilola Nwankwo</Text></td>
                  <td><Text>Lagos Corp Member</Text></td>
                  <td><Text>28/05/2023</Text></td>
                  <td><Text>10:37:19AM</Text></td>
                  <td><Text>N500</Text></td>
                  <td><TextGreen>Received</TextGreen></td>
                </TRows>       
              </Table>       
            </DaySection>
          </Row>
        </Container>
      </Div>
    </>
  );
};
export default Transactions;
const Pic = styled.img`
width: 70px;
height: 70px;
padding: 10px;
border-radius: 100px;
gap: 10px;
`;

const Text = styled.b`
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #000000;
`;
const TextGreen = styled.b`
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: green;
`;
const TextRed = styled.b`
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: red;
`;
const Table = styled.table`
width:100%;

`;
const TRows = styled.tr`
  height: 70px;
  padding: 10px 30px 10px 30px;
  border-radius: 8px;
  gap: 18px;
  background-color:white;
  border-bottom: 4px solid #f9fafb;

  &:last-child {
    border-bottom: none; /* Remove border for the last row */
  }
`;
const SectionTitle = styled.div`
  width: 100%;
  height: 20px;
  gap: 818px;
  margin-bottom:10px;
`;
const Day = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.005em;
`;

const DaySection = styled.div`
width: 100%;
top: 161px
left: 310px
gap: 16px;
margin-top:1em;
margin-bottom:1em;
`;

const PersonalSavingRoot = styled.div`
  width: 100%;
  background-color: #f9fafb;
`;
const Div = styled.div`
border: none;
margin-left: 17.5rem;
padding-top: 6em;
`;
const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;

const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;
