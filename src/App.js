import React from 'react';
import { Provider } from 'react-redux';
import DailyGoals from './containers/DailyGoals';
import configureStore from './configureStore'

const store = configureStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <DailyGoals />
      </Provider>
    )
  }
};

export default App;
