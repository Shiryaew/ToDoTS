import React from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
  Switch,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AppState} from '../../store/Store';
import {ActionType} from '../../types/actionType';
import {Item} from '../../types/itemType';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateAddItem = () => {
    navigation.navigate('add');
  };

  const {state, changeState} = React.useContext(AppState);

  const removeItem = (name: string) => {
    changeState({type: ActionType.Remove, item: name});
  };
  const toggleItem = (name: string) => {
    changeState({type: ActionType.Toggle, item: name});
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.view}>
        {state.items.map((item: Item) => (
          <View style={styles.item}>
            <Switch
              style={styles.switch}
              onValueChange={() => {
                toggleItem(item.name);
              }}
              value={item.isComplete}
            />
            <Text
              style={[styles.itemText, item.isComplete && styles.textSelected]}>
              {item.name}
            </Text>

            <TouchableOpacity
              onPress={() => {
                removeItem(item.name);
              }}
              style={styles.removeButton}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={navigateAddItem}>
        <Text style={styles.addButtonContent}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  textSelected: {
    textDecorationLine: 'line-through',
    color: 'darkgray',
  },
  item: {
    marginLeft: 25,
    marginRight: 25,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  removeButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    position: 'absolute',
  },
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - 200,
  },
  addButtonContent: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
  },
  switch: {
    marginLeft: 10,
    position: 'absolute',
  },
  itemText: {
    marginLeft: 80,
    fontSize: 18,
  },
  view: {
    paddingTop: 25,
  },
});
