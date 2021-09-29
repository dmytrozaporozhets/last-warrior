import {
  REACT_HOOKS_CALLBACK,
  REACT_HOOKS_CONTEXT,
  REACT_HOOKS_EFFECT,
  REACT_HOOKS_MEMO,
  REACT_HOOKS_REDUCER,
  REACT_HOOKS_REF,
  REACT_HOOKS_STATE,
  REDUX_COUNTER,
  REDUX_POSTS,
  REACT_HOOKS_USER,
  SELECT_ITEM,
  SORT_ITEM,
  SELECT_CHECKBOX,
  ADD_PROGRESS,
  CHOOSE_ITEM,
} from '../navigation/constants';
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
  lightningLogo,
} from '../../assets/images/imageLink';

export const buttonCounter = [
  {title: '+', color: 'blue', operation: 'add', id: 1},
  {title: '-', color: 'red', operation: 'sub', id: 2},
  {title: 'Async', color: 'green', operation: 'async', id: 3},
  {title: 'Reset', color: 'orange', operation: 'reset', id: 4},
];

export const mainCategories = [
  {title: SELECT_ITEM, pathway: SELECT_ITEM, image: lightningLogo, id: 1},
  {title: SORT_ITEM, pathway: SORT_ITEM, image: lightningLogo, id: 2},
  {title: CHOOSE_ITEM, pathway: CHOOSE_ITEM, image: lightningLogo, id: 3},
  {
    title: SELECT_CHECKBOX,
    pathway: SELECT_CHECKBOX,
    image: lightningLogo,
    id: 4,
  },
  {title: ADD_PROGRESS, pathway: ADD_PROGRESS, image: lightningLogo, id: 5},
];

export const reduxCategories = [
  {title: REDUX_COUNTER, pathway: REDUX_COUNTER, image: lightningLogo, id: 1},
  {title: REDUX_POSTS, pathway: REDUX_POSTS, image: lightningLogo, id: 2},
];

export const taskGroup = [
  {title: 'Task 1', pathway: '', id: 1},
  {title: 'Task 2', pathway: '', id: 2},
  {title: 'Task 3', pathway: '', id: 3},
  {title: 'Task 4', pathway: '', id: 4},
  {title: 'Task 5', pathway: '', id: 5},
  {title: 'Task 6', pathway: '', id: 6},
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

export const loginWith = [
  {title: 'Login with GitHub', icon: 'github', id: 1, type: 'github'},
  {title: 'Login with Google', icon: 'google', id: 2, type: 'google'},
];

export const Genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Non-Binary', value: 'unknown'},
  {label: 'Prefer not to say', value: 'unknown'},
];

export const statisticCategories = [
  {category: 'Friends', quantity: 0, id: 1},
  {category: 'Photos', quantity: 0, id: 2},
  {category: 'Posts', quantity: 0, id: 3},
  {category: 'Likes', quantity: 0, id: 4},
];
