import styled from 'styled-components';
import '../App.css';
import Header from '../components/navs/Header';
import Sidebar from '../components/navs/Sidebar';
import DashBoard from './DashBoard';

const Frame_Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
          <DashBoard/>
        </div>
      </div>
    </>
  );
};

export default Frame_Dashboard;


