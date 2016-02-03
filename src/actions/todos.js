import {
  ADD_TODO,
  TOGGLE_CHECKED,
  DELETE_TODO,
  SET_FILTER,
  CLEAR_TODO
} from 'constants/ActionTypes';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text: text,
      completed: false
    }
  };
};

export const toggleChecked = (index) => {
  return {
    type: TOGGLE_CHECKED,
    payload: {
      index: index
    }
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: {
      index: index
    }
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export const clearTodo = () => {
  return {
    type: CLEAR_TODO
  };
};
