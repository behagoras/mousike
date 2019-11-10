import React, { Component } from 'react';
import styled from 'styled-components';
import MainControls from './MainControls';
import TimeSection from './TimeSection';

const ControlsStackedWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    grid-gap: 10px;
`;
ControlsStackedWrap.defaultProps = {
  theme: {
    gridTemplateColumns: '100px',
  },
};

class ControlsStacked extends Component {

  componentDidMount() {
    const controls = document.getElementById('controls');
    const timeSection = document.getElementById('timeSection');
    if (controls.offsetWidth > 300) {
      timeSection.style.display = 'block';
      controls.style.gridTemplateColumns = '100px 1fr';
    } else {
      timeSection.style.display = 'none';
      controls.style.gridTemplateColumns = '100px';
    }
  }

  render() {
    // console.log('Super', this.props);
    return (
      <>
        <ControlsStackedWrap id='controls'>
          <MainControls />
          <TimeSection />
        </ControlsStackedWrap>

      </>
    );
  }

};

export default ControlsStacked;

