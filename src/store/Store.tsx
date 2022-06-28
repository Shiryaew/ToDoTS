import React from 'react';
import {State} from '../types/stateType';
import {Action} from '../types/actionType';
import {ItemReducer} from '../reducers/ItemReducer';

import MainNavigation from '../navigators/MainNavigation';

export type ContextState = {
  state: State;
  changeState: React.Dispatch<Action>;
};

export const AppState = React.createContext<Partial<ContextState>>({});

export const initState: State = {
  items: [
    {name: '123', isComplete: false},
    {name: '1234', isComplete: false},
  ],
};

const Store: React.FC = () => {
  const [state, changeState] = React.useReducer<React.Reducer<State, Action>>(
    ItemReducer,
    initState,
  );

  const ContextState: ContextState = {
    state,
    changeState,
  };

  return (
    <AppState.Provider value={ContextState}>
      <MainNavigation />
    </AppState.Provider>
  );
};

export default Store;
