// StyledNavbar.js
import React from 'react';
import styled from 'styled-components';
import SaviLogo from "../../assets/SaviLogo.svg";
import SearchIcon from "../../assets/Search-alt.svg";
import PicName from "../../assets/PicName.svg";

const StyledNavbar = styled.div`
  width: 100%;
  height: 72px;
  background: var(--White, #fff);
  z-index: 1;
  display: flex;
  position: fixed;
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
  margin: 15px 0 0 250px;
  border: 1px solid;
  padding: 0.75rem;
  display: flex;
  align-items: center;
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
  width: 113px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 1000px;
  display: flex;
  gap: 8px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo src={SaviLogo} alt='Savi-Logo' />
      <Searchbox>
        <MagnifyIcon src={SearchIcon} alt="SearchIcon" />
        <SearchInput type="text" placeholder="Search..." />
      </Searchbox>
      <Display>
        <img src={PicName} alt="PicDisplay" />
      </Display>
    </StyledNavbar>
  );
}

export default Navbar;
