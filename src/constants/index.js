import {
  PRACTICE_SCREEN,
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
  CLASS_ROOM,
  CHOOSE_CITIES,
  SELECT_ITEM,
  SORT_ITEM,
} from '../screens/constants';
import {
  autumn,
  England,
  Liverpool,
  London,
  LosAngeles,
  Lvov,
  NewYork,
  spring,
  summer,
  Ukraine,
  USA,
  winter,
} from '../../assets/link/image';

export const buttonCounter = [
  {title: '+', color: 'blue', operation: 'add', id: 1},
  {title: '-', color: 'red', operation: 'sub', id: 2},
  {title: 'Async', color: 'green', operation: 'async', id: 3},
  {title: 'Reset', color: 'orange', operation: 'reset', id: 4},
];

export const libraryScreen = [
  {title: REACT_HOOKS, pathway: REACT_HOOKS, id: 1},
  {title: REDUX, pathway: REDUX, id: 2},
  {title: TAB_SCREEN, pathway: TAB_SCREEN, id: 3},
  {title: NETWORK_REQUEST, pathway: NETWORK_REQUEST, id: 4},
  {title: COUNTER, pathway: COUNTER, id: 5},
  {title: CLASS_ROOM, pathway: CLASS_ROOM, id: 6},
  {title: PRACTICE_SCREEN, pathway: PRACTICE_SCREEN, id: 7},
  {title: CHOOSE_CITIES, pathway: CHOOSE_CITIES, id: 8},
  {title: SELECT_ITEM, pathway: SELECT_ITEM, id: 9},
  {title: SORT_ITEM, pathway: SORT_ITEM, id: 10},
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

export const weekends = [
  {title: 'пн', color: 'black', id: 1},
  {title: 'вт', color: 'black', id: 2},
  {title: 'ср', color: 'black', id: 3},
  {title: 'чт', color: 'black', id: 4},
  {title: 'пт', color: 'black', id: 5},
  {title: 'сб', color: 'red', id: 6},
  {title: 'вс', color: 'red', id: 7},
];
export const days = [
  {title: '1', color: 'black', select: false, id: 1},
  {title: '2', color: 'black', select: false, id: 2},
  {title: '3', color: 'black', select: false, id: 3},
  {title: '4', color: 'black', select: false, id: 4},
  {title: '5', color: 'black', select: false, id: 5},
  {title: '6', color: 'red', select: false, id: 6},
  {title: '7', color: 'red', select: false, id: 7},
  {title: '8', color: 'black', select: false, id: 8},
  {title: '9', color: 'black', select: false, id: 9},
  {title: '10', color: 'black', select: false, id: 10},
  {title: '11', color: 'black', select: false, id: 11},
  {title: '12', color: 'black', select: false, id: 12},
  {title: '13', color: 'red', select: false, id: 13},
  {title: '14', color: 'red', select: false, id: 14},
  {title: '15', color: 'black', select: false, id: 15},
  {title: '16', color: 'black', select: false, id: 16},
  {title: '17', color: 'black', select: false, id: 17},
  {title: '18', color: 'black', select: false, id: 18},
  {title: '19', color: 'black', select: false, id: 19},
  {title: '20', color: 'red', select: false, id: 20},
  {title: '21', color: 'red', select: false, id: 21},
  {title: '22', color: 'black', select: false, id: 22},
  {title: '23', color: 'black', select: false, id: 23},
  {title: '24', color: 'black', select: true, id: 24},
  {title: '25', color: 'black', select: false, id: 25},
  {title: '26', color: 'black', select: false, id: 26},
  {title: '27', color: 'red', select: false, id: 27},
  {title: '28', color: 'red', select: false, id: 28},
  {title: '29', color: 'black', select: false, id: 29},
  {title: '30', color: 'black', select: false, id: 30},
];

export const fakeCities = [
  {city: 'Kiev', country: 'Ukraine', population: 2.967, id: 1},
  {city: 'Kharkov', country: 'Ukraine', population: 1.443, id: 2},
  {city: 'Odessa', country: 'Ukraine', population: 1.017, id: 3},
  {city: 'Dnepropetrovsk', country: 'Ukraine', population: 0.99, id: 4},
  {city: 'Lvov', country: 'Ukraine', population: 0.724, image: Lvov, id: 5},
  {city: 'London', country: 'England', population: 8.982, image: London, id: 6},
  {city: 'Manchester', country: 'England', population: 0.553, id: 7},
  {
    city: 'Liverpool',
    country: 'England',
    population: 0.496,
    image: Liverpool,
    id: 8,
  },
  {city: 'New York', country: 'USA', population: 8.419, image: NewYork, id: 9},
  {
    city: 'Los Angeles',
    country: 'USA',
    population: 3.967,
    image: LosAngeles,
    id: 10,
  },
  {city: 'Chicago', country: 'USA', population: 2.71, id: 11},
  {city: 'Houston', country: 'USA', population: 2.31, id: 12},
];
export const fakeCountries = [
  {name: 'England', image: England, id: 1},
  {name: 'Ukraine', image: Ukraine, id: 2},
  {name: 'USA', image: USA, id: 3},
];

export const monthsOfTheYear = [
  {title: 'January', season: 'winter', image: winter, id: 1},
  {title: 'February', season: 'winter', image: winter, id: 2},
  {title: 'March', season: 'spring', image: spring, id: 3},
  {title: 'April', season: 'spring', image: spring, id: 4},
  {title: 'May', season: 'spring', image: spring, id: 5},
  {title: 'June', season: 'summer', image: summer, id: 6},
  {title: 'July', season: 'summer', image: summer, id: 7},
  {title: 'August', season: 'summer', image: summer, id: 8},
  {title: 'September', season: 'autumn', image: autumn, id: 9},
  {title: 'October', season: 'autumn', image: autumn, id: 10},
  {title: 'November', season: 'autumn', image: autumn, id: 11},
  {title: 'December', season: 'winter', image: winter, id: 12},
];

export const seasonOfTheYear = [
  {title: 'Winter', image: winter, id: 1},
  {title: 'Spring', image: spring, id: 2},
  {title: 'Summer', image: summer, id: 3},
  {title: 'Autumn', image: autumn, id: 4},
];

export const footballChampionships = [
  {label: 'Serie A', value: 'Serie A', id: 1},
  {label: 'LaLiga', value: 'LaLiga', id: 2},
  {label: 'Ligue 1', value: 'Ligue 1', id: 3},
  {label: 'Premier League', value: 'Premier League', id: 4},
];

export const footballClub = [
  {title: 'Milan', championship: 'Serie A', id: 1},
  {title: 'Everton', championship: 'Premier League', id: 2},
  {title: 'Arsenal', championship: 'Premier League', id: 3},
  {title: 'Real Madrid', championship: 'LaLiga', id: 4},
  {title: 'FC Barcelona', championship: 'LaLiga', id: 5},
  {title: 'PSG', championship: 'Ligue 1', id: 6},
  {title: 'Leicester', championship: 'Premier League', id: 7},
  {title: 'Liverpool', championship: 'Premier League', id: 8},
  {title: 'Inter', championship: 'Serie A', id: 9},
  {title: 'Napoli', championship: 'Serie A', id: 10},
  {title: 'Roma', championship: 'Serie A', id: 11},
  {title: 'AS Monaco', championship: 'Ligue 1', id: 12},
  {title: 'Lyon', championship: 'Ligue 1', id: 13},
];
