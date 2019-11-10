import React from 'react';
import styled from 'styled-components';
import MobileHeader from './Header/MobileHeader';
import { GlobalStyle } from '../GlobalStyles';

const HamburgerMenuWrapper = styled.div`
    /* height:100vh; */
`;
const MenuListNav = styled.nav`
    height:100%;
`;

const MenuList = styled.ul`
    display:grid;
    grid-template-rows:repeat(4, 1fr);
    height:100%;
`;

const MenuListElement = styled.li`
    list-style:none;
    font-size:1.3em;
`;

const HamburgerMenu = () => {
  return (
    <HamburgerMenuWrapper>
      <GlobalStyle />
      <MobileHeader styled='menu' />
      <MenuListNav>
        <MenuList>
          <MenuListElement>Home</MenuListElement>
          <MenuListElement>discover</MenuListElement>
          <MenuListElement>Radio</MenuListElement>
          <MenuListElement>Inspiration</MenuListElement>
        </MenuList>
      </MenuListNav>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;
