/**
 * @author David Behar <david@behar.io>
 */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs,
  text,
  boolean,
  color,
} from '@storybook/addon-knobs';

import { MusicPlayer } from './MusicPlayer/MusicPlayer';
// Song Elements
import { SongList } from './SongElements/SongList';
import { SongElement } from './SongElements/SongElement';
// Label components
import { LabelInput } from './LabelInput/LabelInput';
import { ToggleSwitch } from './ToggleSwitch/ToggleSwitch';

import { GlobalStyleStoryBook, GlobalStyle } from '../GlobalStyles';

import songs from '../utils/mocks/songs';

// Form Components
storiesOf('Form Components', module)
  .addDecorator(withKnobs)
  .add('LabelInput', () => React.createElement(() => {
    const [value, setValue] = useState('');
    return (
      <>
        <GlobalStyleStoryBook />
        <LabelInput
          id={text('Id', 'labelId')}
          label={text('Label Text', 'Username')}
          validate={boolean('Validation', false)}
          type={text('Input Type', 'text')}
          placeholder={text('Placeholder', 'XXXXXX')}
          autocomplete={text('Autocomplete', 'off')}
          value={value}
          handleChange={(event) => setValue(event.target.value)}
          helpText={text('Help Text', 'Max length: 6 characters')}
        />
      </>
    );
  }));

storiesOf('Form Components', module)
  .addDecorator(withKnobs)
  .add('ToggleSwitch', () => (
    <ToggleSwitch
      key='switch'
      disabled={boolean('Disabled', false)}
      isChecked={boolean('Checked', true)}
      trueColor={color('Active Color', '#4A90E2')}
      falseColor={color('Inactive Color', '#D9534F')}
    />
  ));

// Music Player
storiesOf('Player', module)
  .addDecorator(withKnobs)
  .add('MusicPlayer', () => {
    return (
      <>
        <GlobalStyle />
        <MusicPlayer />
      </>
    );
  });

// Song elements
storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongList', () => {
    return (
      <>
        <GlobalStyleStoryBook />
        <SongList songs={songs} />
      </>
    );
  });
storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongElement', () => {
    return (
      <>
        <GlobalStyleStoryBook />
        <SongElement
          name={text('Song Name', 'Song Name')}
          duration={text('Duration', '08:36')}
          href={text('Link to', 'https://example.org')}
        />

      </>
    );
  });

