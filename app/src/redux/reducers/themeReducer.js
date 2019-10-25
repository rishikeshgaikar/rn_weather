import { lightTheme, darkTheme, accentColor } from '../themes';
const initialState = {
  theme: { ...lightTheme, ...accentColor.orange }
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      console.log('********', action.payload);
      // return { ...state.theme, ...action.payload };
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.payload }
      };
      return newState;
    }
    case 'CHANGE_ACCENT_COLOR': {
      console.log('********', action.payload);
      //return { ...state.theme, ...action.payload };
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.payload }
      };
      return newState;
    }
  }
  return state;
};
