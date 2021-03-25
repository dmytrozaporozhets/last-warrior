import {
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
  REDUX,
  REDUX_COUNTER,
  REDUX_TODOS,
  TAB_SCREEN,
  REACT_HOOKS_USER,
  COUNTER,
} from '../screens/constants';

export const buttonCounter = [
  {title: '+', color: 'blue', operation: 'add', id: 1},
  {title: '-', color: 'red', operation: 'sub', id: 2},
  {title: 'Async', color: 'green', operation: 'async', id: 3},
  {title: 'Reset', color: 'orange', operation: 'reset', id: 4},
];

export const libraryScreen = [
  {title: 'React Hooks', pathway: REACT_HOOKS, id: 1},
  {title: 'Redux', pathway: REDUX, id: 2},
  {title: 'Tabs', pathway: TAB_SCREEN, id: 3},
  {title: 'Network requests', pathway: NETWORK_REQUEST, id: 4},
  {title: 'Counter', pathway: COUNTER, id: 5},
  {title: 'Practice', pathway: EXAMPLE_SCREEN, id: 6},
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
  {title: 'useUser', id: 8, pathway: REACT_HOOKS_USER},
];

export const reduxPractice = [
  {title: 'Counter', id: 1, pathway: REDUX_COUNTER},
  {title: 'Posts', id: 2, pathway: REDUX_TODOS},
];

export const fakePhotosData = [
  {
    albumId: 100,
    id: 1,
    thumbnailUrl: 'https://via.placeholder.com/150/315aa6',
    title: 'qui quo cumque distinctio aut voluptas',
    url: 'https://via.placeholder.com/600/315aa6',
  },
  {
    albumId: 100,
    id: 2,
    thumbnailUrl: 'https://via.placeholder.com/150/1b9d08',
    title: 'in voluptate sit officia non nesciunt quis',
    url: 'https://via.placeholder.com/600/1b9d08',
  },
  {
    albumId: 100,
    id: 3,
    thumbnailUrl: 'https://via.placeholder.com/150/6dd9cb',
    title: 'error quasi sunt cupiditate voluptate ea odit beatae',
    url: 'https://via.placeholder.com/600/6dd9cb',
  },
];

export const forbidden = ['fuck', 'spam', 'php'];
