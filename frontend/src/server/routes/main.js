import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

require('@babel/polyfill');

require('dotenv').config();

console.log('main.js');

// apiKeyToken: config.apiKeyToken
let initialState;

const groupBy = (key) => (array) => array.reduce(
  (objectsByKeyValue, obj) => ({
    ...objectsByKeyValue,
    [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
  }),
  {},
);

const main = async (req, res, next) => {
  try {
    try {
      const { token, email, name, id } = req.cookies;
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name,
        };
      }
      console.log('Hey songs list');
      let songsList = await axios({
        url: `${process.env.API_URL}/api/music/tracks`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      });
      songsList = songsList.data.data;

      const groupByArtist = groupBy('artist');
      const groupedByArtist = groupByArtist(songsList);

      initialState = {
        user,
        playing: {
          songNumber: '',
          playList: '',
          // selectedSong: null,
        },
        myList: [],
        trends: songsList,
        originals: songsList.filter((song) => song.preview),
        artists: {
          ...groupedByArtist,
        },

      };

    } catch (error) {
      initialState = {
        user: {},
        playing: {},
        myList: [],
        trends: {},
        originals: [],
        grouped: [],
      };
      console.log(error);
      console.log('Initial State', initialState);

    }

    console.log('initialState.user.id', initialState.user.id);
    console.log('Here is the initial state id', initialState.user.id);
    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
    const reactElements = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes(isLogged))}</Layout>
        </StaticRouter>
      </Provider>
    );

    const html = renderToString(sheet.collectStyles(reactElements));
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    const preloadedState = store.getState();
    // res.send(render(html, preloadedState));
    res.send(render(html, preloadedState, styles));
  } catch (err) {
    next(err);
  }
};

export default main;
