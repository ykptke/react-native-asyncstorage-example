import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import List from './List'
import Loading from './Loading'

const STORAGE_KEY = 'GOALS';

export default class DailyGoals extends Component {
  constructor() {
    super();

    this.state = {
      currentGoals: [],
      loading: true,
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    try {
      const jsonData = await AsyncStorage.getItem(STORAGE_KEY);

      if (jsonData) {
        const currentGoals = JSON.parse(jsonData);

        this.setState({
          currentGoals,
          loading: false,
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  async doInsert(goals) {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  }

  render() {
    const { loading, currentGoals } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <List doInsert={this.doInsert} currentGoals={currentGoals} />
    );
  }
}
