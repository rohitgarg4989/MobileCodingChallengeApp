import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/store';
import ImageListScreen from './src/components/ImageListScreen';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ImageListScreen />
      </Provider>
    );
  }
}
