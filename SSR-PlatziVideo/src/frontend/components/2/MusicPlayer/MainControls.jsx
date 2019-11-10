import React from 'react';
import styled from 'styled-components';
import play from '../../../assets/static/Play.png';
import prev from '../../../assets/static/rewind-left.png';
import next from '../../../assets/static/rewind-right.png';

const MainControlsWrap = styled.div`
display: grid;
grid-template-columns:repeat(3,1fr) ;
width: 100px;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
`;

const MainControls = () => (
  <MainControlsWrap>
    <div>
      <img src={prev} alt="" srcSet="" />
    </div>
    <div>
      <img src={play} alt="" srcSet="" />
    </div>
    <div>
      <img src={next} alt="" srcSet="" />
    </div>
  </MainControlsWrap>
);

export default MainControls;
