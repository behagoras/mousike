/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
import styled from 'styled-components';
import { SongElement } from './SongElement';

const SongListStyle = styled.ol`
  margin: 0;
  padding-inline-start:0;
`;

// eslint-disable-next-line import/prefer-default-export
export const SongList = (props) => {
  const { songs } = props;
  return (
    <SongListStyle>
      {
        songs &&
        songs.map((song) => {
          const { name, duration, href, key } = song;
          // console.log(song);
          return (
            <SongElement
              key={key}
              name={name}
              duration={duration}
              href={href}
            />
          );
        })
      }
    </SongListStyle>
  );

};

export default SongList;
