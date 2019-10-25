const initialState = {
  wetData: {
    currently: {},
    daily: {
      data: []
    }
  },
  tmData: {
    currently: {},
    hourly: {
      data: []
    }
  },
  locData: {},
  revData: {},
  loading: false,
  error: ''
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_STARTED': {
      return { ...state, loading: true };
    }
    case 'FETCHING_SUCCESS_WET': {
      return { ...state, loading: false, wetData: action.payload };
    }
    case 'FETCHING_SUCCESS_LOC': {
      return { ...state, loading: false, locData: action.payload };
    }
    case 'FETCHING_SUCCESS_REV_LOC': {
      return { ...state, loading: false, revData: action.payload };
    }
    case 'FETCHING_SUCCESS_TM': {
      return { ...state, loading: false, tmData: action.payload };
    }
    case 'FETCHING_ERROR': {
      return { ...state, loading: false, error: action.payload };
    }
  }
  return state;
};
