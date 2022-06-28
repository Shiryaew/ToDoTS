import React from 'react';
import {State} from '../types/stateType';
import {Action, ActionType} from '../types/actionType';

export const ItemReducer: React.Reducer<State, Action> = (
  state,
  action,
): State => {
  switch (action.type) {
    case ActionType.Add: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            name: action.item,
            isComplete: false,
          },
        ],
      };
    }
    case ActionType.Remove: {
      return {
        ...state,
        items: [...state.items.filter(Item => Item.name !== action.item)],
      };
    }
    case ActionType.Toggle: {
      return {
        ...state,
        items: [
          ...state.items.map(item =>
            item.name !== action.item
              ? item
              : {...item, isComplete: !item.isComplete},
          ),
        ],
      };
    }
  }
};
