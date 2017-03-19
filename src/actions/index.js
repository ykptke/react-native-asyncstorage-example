import * as types from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export const addGoal = (title) => {
  return {
    type: types.ADD_GOAL,
    id: Date.now(),
    title
  };
};

export const receiveData = (goals) => {
  return {
    type: types.RECEIVE_DATA,
    goals: goals || [],
  }
}

export const fetchAllData = () => {
  return dispatch => {
    return AsyncStorage.getItem('GOALS')
      .then((goals) => {
        dispatch(receiveData(JSON.parse(goals)))
      })
  }
}
