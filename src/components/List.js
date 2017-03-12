import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
} from 'react-native';
import uniqueId from 'react-native-unique-id';

export default class List extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({ rowHasChanged: () => true });

    this.state = {
      goals: [],
      dataSource,
    }
  }

  componentDidMount() {
    this._loadInitialState();
  }

  _loadInitialState() {
    const { currentGoals } = this.props;
    this.setState((prevState) => ({
      goals: currentGoals,
      dataSource: prevState.dataSource.cloneWithRows(currentGoals),
    }));
  };

  async createGoal(text) {
    try {
      uniqueId()
        .then(id => {
          const goal = { id, text };

          prevGoals = this.state.goals;
          const nextGoals = [ ...prevGoals, goal ];

          this.setState(() => {
            return {
              goals: nextGoals,
              dataSource: this.state.dataSource.cloneWithRows(nextGoals),
            }
          });

          // prop
          this.props.doInsert(nextGoals);
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <TextInput
           autoCapitalize="none"
           placeholder="Günlük hedefini belirle"
           autoCorrect={false}
           onSubmitEditing={(event) => this.createGoal(event.nativeEvent.text)}
          style={styles.input}
          />
          <ListView
             dataSource={this.state.dataSource}
             renderRow={(goal) => <Text>{goal.text}</Text>}
            />
      </View>
    );
  }
}

List.defaultProps = {
  currentGoals: [],
  doInsert: () => null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    color: '#333333',
    marginBottom: 5,
  },
});
