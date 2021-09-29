import axios from 'axios';
import {requestUserUrl} from '../../assets/link/request';

export const fetchGitHub = (token) => {
  return axios.get(requestUserUrl, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/json',
    },
  });
};
