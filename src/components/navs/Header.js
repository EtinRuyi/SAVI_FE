import { useState, useCallback, useEffect } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
  useEffect(() => {
    document.body.style.zoom = '86%';
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('fullname') == null) {
      navigate('/signin');
    }
  }, []);
  return (
    <>
      <DashboardRoot>
        <Logo>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Savi1 style={{ color: '#b5179e' }}>Savi.</Savi1>
          </Link>
        </Logo>
        <div
          style={{
            height: '100%',
            marginLeft: '23em',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <SearchBarWrapper>
              <SearchBar1>
                <AddParent>
                  <ChevronDownIcon2 alt="" src="/search-alt.png" />
                  <SearchInput type="text" placeholder="Search" />
                </AddParent>
              </SearchBar1>
            </SearchBarWrapper>
          </div>
          <div>
          <AvatardefaultParent>
              <AvatardefaultIcon alt="" src="/avatardefault@2x.png" />
              <Savi>{localStorage.getItem("fullname").split(" ")[0]}</Savi>
            </AvatardefaultParent>
          </div>
        </div>
      </DashboardRoot>
      {/* <Sidebar/> */}
    </>
  );
};

export default Header;

const Savi = styled.div`
margin-left:10px;
margin-top:5px;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.15000000596046448px;
text-align: left;

`;
const Savi1 = styled.b``;
const ChevronDownIcon2 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

const AddParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SearchBar1 = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  width: 19.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-5xl);
`;

const SearchBarWrapper = styled.div`
margin-top:1.5em;
  color: var(--grey-400);
`;

const AvatardefaultIcon = styled.img`
  position: relative;
  border-radius: var(--br-181xl);
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;

const AvatardefaultParent = styled.div`
   display: flex;
  cursor: pointer;
  margin-right:4em;

  margin-top:1.5em;
`;

const Logo = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: 2rem;
  margin-left: 0.7em;
  margin-top: 0.7em;
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
`;


const SearchInput = styled.input`
  border: none;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

const DashboardRoot = styled.div`
   position: fixed;
  width: 100%;
  height: 6.5em;
  box-sizing: border-box; /* Include the border in the total width/height */
  text-align: left;
  font-size: var(--input-small-medium-size);
  color: #101828;
  font-family: var(--text-md-medium);
  top:0em;
`;
