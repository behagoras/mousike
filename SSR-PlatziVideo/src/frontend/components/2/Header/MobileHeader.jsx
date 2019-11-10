import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/static/logo-top-bar-mobile.png';
import hamburgerIcon from '../../assets/static/hamburger menu icon.png';

const MobileHeaderWrapper = styled.div`
    width:100%;
    height:64px;
    padding: 16px 0;
    background: ${(props) => props.theme.background};

    /* background:#262930; */
    margin-bottom:24px;
    display:grid;
    grid-template-columns:74px 1fr 74px;
    grid-gap:10px;
    justify-content:space-evenly;
    align-content:space-evenly;
`;
MobileHeaderWrapper.defaultProps = {
  theme: {
    background: '#262930',
  },
};

const IconWrapper = styled.figure`
    margin:auto;
`;
const LogoImg = styled.img`
    width: 26px;
    height:24px;
    display:inline-block;
    text-align:left
`;
const Title = styled.h2`
    text-align:center;
`;
const HamburgerMenuImg = styled.img`
    width:19px;
    height:auto;
`;

const MobileHeader = (props) => {
  const { title, styled } = props;
  if (styled === 'menu') {
    // alert('menu');
    MobileHeaderWrapper.defaultProps.theme.background = 'none';
  }
  return (
    <MobileHeaderWrapper>
      <IconWrapper>
        <LogoImg src={logo} alt='' />
      </IconWrapper>
      <Title>{title || 'DISCOVER'}</Title>
      <IconWrapper>
        <HamburgerMenuImg src={hamburgerIcon} alt='' />
      </IconWrapper>
    </MobileHeaderWrapper>
  ) ;
};

export default MobileHeader;
