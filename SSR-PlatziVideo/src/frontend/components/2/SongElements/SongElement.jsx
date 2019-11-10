/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plusIcon from '../../assets/static/plus-icon.png';

const Song = styled.li`
    height: 40px;
    display: grid;
    cursor: pointer;
    list-style: none;
    text-decoration: white;
    border-bottom: 1px solid #D8D8D8;
    grid-template-columns: 1fr 40px;
    &:hover, &:active{
        background: #5D00F5;
    }
`;

const SongLink = styled.a`
    width: 100%;
    color: white;
    display: grid;
    padding: 10px 0;
    padding-left: 10px;
    text-decoration: none;
    grid-template-columns: 1fr 80px;
`;

const SongName = styled.div`
    white-space: nowrap;
`;
const SongDuration = styled.div`
    justify-self: flex-end;
`;
const SongAddImage = styled.img`
    width: 15px;
    height: 15px;
    align-self: center;
    justify-self: center;
`;
// eslint-disable-next-line import/prefer-default-export
export const SongElement = (props) => {
  const { name, duration, href } = props;
  // console.log(props);
  return (
    <Song>
      <SongLink href={href}>
        <SongName>
          {name}
        </SongName>
        <SongDuration>
          {duration}
        </SongDuration>
      </SongLink>
      <SongAddImage src={plusIcon} alt='' />
    </Song>

  );
};
