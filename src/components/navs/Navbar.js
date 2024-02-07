// StyledNavbar.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import SaviLogo from "../../assets/SaviLogo.svg";
import SearchIcon from "../../assets/Search-alt.svg";
import PicName from "../../assets/PicName.svg";



function Navbar() {
  useEffect(() => {
    document.body.style.zoom = '86%';
  }, []);
  return (
    <StyledNavbar>
      <Logo src={SaviLogo} alt='Savi-Logo' />
      {/* <Searchbox>
        <MagnifyIcon src={SearchIcon} alt="SearchIcon" />
        <SearchInput type="text" placeholder="Search..." />
      </Searchbox> */}
       <NavbardefaultType>
            <NavbardefaultTypeChild />
            <AvatardefaultParent >
              <AvatardefaultIcon alt="" src="/avatardefault@2x.png" />
              <Savi>oBI</Savi>
            </AvatardefaultParent>
            
            <SearchBarWrapper>              
              <SearchBar1>
                <AddParent>
                  <ChevronDownIcon2 alt="" src="/search-alt.png" />
                  <SearchInput type='text' placeholder='Search' />
                </AddParent>
              </SearchBar1>
            </SearchBarWrapper>
        </NavbardefaultType> 
      <Display>
        <img src={PicName} alt="PicDisplay" />
      </Display>
    </StyledNavbar>
  );
}

export default Navbar;

const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: black;
`;
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
const SearchBarWrapper = styled.div`
  position: absolute;
  top: 1.19rem;
  left: 3.19rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--grey-400);
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

const AvatardefaultIcon = styled.img`
  position: relative;
  border-radius: var(--br-181xl);
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;

const AvatardefaultParent = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: 62rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  cursor: pointer;
`;

const NavbardefaultTypeChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--white);
  width: 73.06rem;
  height: 4.5rem;
`;

const NavbardefaultType = styled.div`
  position: relative;
  width: 73.44rem;
  height: 4.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const StyledNavbar = styled.div`
  width: 97%;
  height: 72px;
  background: var(--White, #fff);
  z-index: 1;
  display: flex;
  position: fixed;
  border:dotted;
  top: 0;
  padding: 0 24px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;

const Logo = styled.img`
  font-family: Bodoni Moda;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  margin-left: 10px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
  width: 71px;
`;

const Searchbox = styled.div`
  width: 300px;
  height: 15px;
  border-radius: 100px;
  border: 1px solid;
  padding: 0.75rem;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  margin-left: 10px;
  
  &:focus {
    outline: none;
  }
`;

const MagnifyIcon = styled.img`
  height: 1rem;
  margin-right: 10px;
`;

const Display = styled.div`
  //width: 113px;
  height: 32px;
  //position: absolute;
  top: 20px;
  // left: 1000px;
  // display: flex;
  //gap: 8px;
`;
