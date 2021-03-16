import {
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  NETWORK_REQUEST, REACT_HOOKS,
  TAB_SCREEN,
} from '../screens/constants';

export const buttonCounter = [
  {title: '+', color: 'blue', operation: 'add', id: 1},
  {title: '-', color: 'red', operation: 'sub', id: 2},
  {title: 'Async', color: 'green', operation: 'async', id: 3},
  {title: 'Reset', color: 'orange', operation: 'reset', id: 4},
];

export const libraryScreen = [
  {title: 'Counter', pathway: DISPLAY_SCREEN, id: 1},
  {title: 'Tabs', pathway: TAB_SCREEN, id: 2},
  {title: 'Network requests', pathway: NETWORK_REQUEST, id: 3},
  {title: 'Practice', pathway: EXAMPLE_SCREEN, id: 4},
  {title: 'React Hooks', pathway: REACT_HOOKS, id: 5},
];
