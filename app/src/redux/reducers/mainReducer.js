const initialState = {
  loc: 'Mumbai',
  lat: '19.0760',
  lon: '72.8777'
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOC': {
      return {
        loc: (state.loc = action.payload.loc),
        lat: (state.lat = action.payload.lat),
        lon: (state.lon = action.payload.lon)
      };
    }
  }
  return state;
};
