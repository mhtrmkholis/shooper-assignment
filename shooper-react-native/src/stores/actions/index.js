import axios from 'axios';
const baseUrl = 'https://testing-255716.appspot.com';

export function Login(form) {
  return dispatch => {
    dispatch({ type: 'SET_LOADING' });
    dispatch({ type: 'RESET_ERROR' });
    axios
      .post(`${baseUrl}/users/login`, form)
      .then(({ data }) => {
        dispatch({ type: 'SET_USER_LOGIN', payload: data });
        dispatch({ type: 'SET_LOADING' });
      })
      .catch(err => {
        dispatch({ type: 'SET_LOADING' });
        dispatch({ type: 'SET_ERROR_LOGIN' });
      });
  };
};

export function Logout() {
  return dispatch => {
    dispatch({ type: 'SET_LOGOUT' });
    axios
      .post(`${baseUrl}/users/logout`)
      .then(() => {
        dispatch({ type: 'SET_USER_LOGOUT' });
      })
  };
};

export function UpdateUser(id, newValue) {
  return async dispatch => {
    let { data } = await axios.put(`${baseUrl}/users/update/${id}`, newValue)
    dispatch({ type: 'SET_UPDATE_USER', payload: data[1][0] });
  };
};

export function Register(form) {
  return dispatch => {
    dispatch({ type: 'SET_LOADING' });
    dispatch({ type: 'RESET_ERROR' });
    axios
      .post(`${baseUrl}/users/create`, form)
      .then(({ data }) => {
        axios
          .post(`${baseUrl}/users/login`, { username: form.username, password: form.password })
          .then(({ data }) => {
            dispatch({ type: 'SET_USER_LOGIN', payload: data });
            dispatch({ type: 'SET_LOADING' });
          })
      })
      .catch(err => {
        dispatch({ type: 'SET_LOADING' });
        dispatch({ type: 'SET_ERROR_REGISTER' });
      })
  };
};