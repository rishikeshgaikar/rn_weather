const initialState = {
  lang: 'en'
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG': {
      return { lang: (state.lang = action.payload) };
    }
  }
  return state;
};
