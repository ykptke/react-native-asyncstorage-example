import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#D3D3D3'
  }
})

const AddGoal = ({ addGoal }) => (
  <View style={styles.input}>
    <TextInput
       placeholder="Hedefini gir."
       onSubmitEditing={(event) => addGoal(event.nativeEvent.text)}
      />
  </View>
)

export default AddGoal;
