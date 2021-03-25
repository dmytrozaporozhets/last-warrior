import React from 'react';
import {CREATE_POST} from './actionTypes';
import {forbidden} from '../../constants';
import {Alert} from '../../components';

export const forbiddenWordsMiddleware = ({dispatch}) => {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((words) =>
          action.payload.includes(words),
        );
        console.log(found);
        if (found.length) {
          return dispatch(<Alert text="This word is prohibited" />);
        }
      }
      return next(action);
    };
  };
};
