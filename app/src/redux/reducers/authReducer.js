const initialState = {
  auth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHNAGE_AUTH': {
      return { auth: action.payload };
    }
  }
  return state;
};
