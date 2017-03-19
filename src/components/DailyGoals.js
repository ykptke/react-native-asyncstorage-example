import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import List from './List';
import AddGoal from '../containers/AddGoal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

class DailyGoals extends Component {
  componentDidMount() {
    this._initialData();
  }

  _initialData() {
    this.props.fetchAllData();
  }

  render() {
    const { goals } = this.props;

    return (
      <View style={styles.container}>
        <AddGoal />
        <List goals={goals}/>
      </View>
    );
  }
}

export default DailyGoals;
