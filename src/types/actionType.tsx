export enum ActionType {
  Add = 'Add',
  Remove = 'Remove',
  Toggle = 'Toggle',
}

export type Action = {
  type: ActionType.Add | ActionType.Remove | ActionType.Toggle;
  item: string;
};
