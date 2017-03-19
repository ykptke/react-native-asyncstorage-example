import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    margin: 5
  },
})

const renderList = (goals) => {
  console.log('goals', goals);
  if (goals.length) {
    return goals.map(
      (goal,i) => <Text style={styles.listItem} key={i}>{goal.title}</Text>
    );
  }
  return <Text>Hedef yok</Text>
}

const List = ({ goals }) => (
  <View style={styles.container}>
    {renderList(goals)}
  </View>
)

List.defaultProps = {
  goals: [],
}

export default List;
