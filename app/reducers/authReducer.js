export const loginUserReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGINUSER':
			return { ...state, user: action }
		default:
			return state;
	}
}

const initialAuthState = { isLoggedIn: false };

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
      case 'LOGIN':
        return { ...state, isLoggedIn: true };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false };
      default:
        return state;
    }
}
