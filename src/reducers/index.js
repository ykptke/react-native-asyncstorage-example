import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native';

const saveAllData = async (state) => {
  try {
    await AsyncStorage.setItem('GOALS', JSON.stringify(state));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

const goal = (state, action) => {
  switch(action.type) {
  case types.ADD_GOAL:
    return {
      id: action.id,
      title: action.title,
      createdAt: new Date(),
      completed: false,
    };
  default:
    return state;
  }
}

const DailyGoals = (state = [], action) => {
  switch(action.type) {
  case types.ADD_GOAL:
    const goals = [...state, goal(undefined,action)];
    saveAllData(goals);
    return goals;
  case types.RECEIVE_DATA:
    return action.goals;
  default:
    return state;
  }
}
export default DailyGoals;
