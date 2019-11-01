const initialState = {
  isLoading: false,
  isLogin: false,
  error: '',
  user: {}
};

export default ( state = initialState, action ) => {
  switch(action.type) {
    case 'SET_LOADING': 
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case 'SET_USER_LOGIN':
      return {
        ...state,
        isLogin: true,
        user: action.payload
      }
    case 'RESET_ERROR': 
      return {
        ...state,
        error: ''
      }
    case 'SET_ERROR_LOGIN': 
      return {
        ...state,
        error: 'Incorrect Email/Password!'
      }
    case 'SET_LOGOUT': 
      return {
        ...state,
        isLogin: false,
      }
    case 'SET_USER_LOGOUT':
      return {
        ...state,
        user: {},
      }
    case 'SET_USER_UPDATE':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_ERROR_REGISTER':
      return {
        ...state,
        error: 'Error'
      }
    default:
      return state;
  }
};