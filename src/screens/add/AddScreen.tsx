import React from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppState} from '../../store/Store';
import {ActionType} from '../../types/actionType';

const AddScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateMain = () => {
    navigation.navigate('main');
  };

  const {state, changeState} = React.useContext(AppState);

  const addItem = (name: string) => {
    changeState({type: ActionType.Add, item: name});
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        autoFocus={true}
        onEndEditing={value => {
          addItem(value.nativeEvent.text);
        }}
      />
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    backgroundColor: 'white',
  },
});
