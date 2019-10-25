const initialState = {
  unit: 'si'
};

export const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_UNIT': {
      return { unit: (state.unit = action.payload) };
    }
  }
  return state;
};
