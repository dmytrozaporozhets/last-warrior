import {
  DISPLAY_SCREEN,
  EXAMPLE_SCREEN,
  NETWORK_REQUEST,
  REACT_HOOKS,
  REACT_HOOKS_CALLBACK,
  REACT_HOOKS_CONTEXT,
  REACT_HOOKS_EFFECT,
  REACT_HOOKS_MEMO,
  REACT_HOOKS_REDUCER,
  REACT_HOOKS_REF,
  REACT_HOOKS_STATE,
  TAB_SCREEN,
} from '../screens/constants';
import React from 'react';

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

export const counterData = [
  {title: 'Add', size: 'small', btnType: 'green', operation: 'add', id: 1},
  {title: 'Sub', size: 'small', btnType: 'red', operation: 'sub', id: 2},
];

export const numberData = [
  {title: 'Add', size: 'small', btnType: 'green', operation: 'add', id: 1},
  {title: 'Sub', size: 'small', btnType: 'red', operation: 'sub', id: 2},
  {
    title: 'Change',
    size: 'small',
    btnType: 'orange',
    operation: 'change',
    id: 3,
  },
];

export const elementState = [
  {title: 'Add', size: 'small', btnType: 'green', func: 'add', id: 1},
  {title: 'Change', size: 'small', btnType: 'red', func: 'change', id: 2},
];

export const resourceJSON = [
  {title: 'Users', size: 'small', btnType: 'green', resource: 'users', id: 1},
  {title: 'Todos', size: 'small', btnType: 'green', resource: 'todos', id: 2},
  {title: 'Posts', size: 'small', btnType: 'green', resource: 'posts', id: 3},
];

export const reactHooks = [
  {title: 'useState', id: 1, pathway: REACT_HOOKS_STATE},
  {title: 'useEffect', id: 2, pathway: REACT_HOOKS_EFFECT},
  {title: 'useRef', id: 3, pathway: REACT_HOOKS_REF},
  {title: 'useMemo', id: 4, pathway: REACT_HOOKS_MEMO},
  {title: 'useCallback', id: 5, pathway: REACT_HOOKS_CALLBACK},
  {title: 'useContext', id: 6, pathway: REACT_HOOKS_CONTEXT},
  {title: 'useReducer', id: 7, pathway: REACT_HOOKS_REDUCER},
];
