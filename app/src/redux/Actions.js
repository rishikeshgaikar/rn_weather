import axios from 'axios';

const changeAuth = auth => {
  return {
    type: 'CHNAGE_AUTH',
    payload: auth
  };
};
const changeUnit = unit => {
  return {
    type: 'CHANGE_UNIT',
    payload: unit
  };
};
const changeLang = lang => {
  return {
    type: 'CHANGE_LANG',
    payload: lang
  };
};
const changeLoc = (loc, lat, lon) => {
  return {
    type: 'CHANGE_LOC',
    payload: { loc, lat, lon }
  };
};
const changeTheme = theme => {
  return {
    type: 'CHANGE_THEME',
    payload: theme
  };
};
const changeAccentColor = color => {
  return {
    type: 'CHANGE_ACCENT_COLOR',
    payload: color
  };
};
const apiLocation = loc => dispatch => {
  const key = '03d87b93bc3308';
  const api = `https://api.locationiq.com/v1/autocomplete.php?key=${key}&q=${loc}`;
  const request = axios.get(api);
  console.log(api);
  dispatch({ type: 'FETCHING_STARTED' });
  request
    .then(res => {
      dispatch({ type: 'FETCHING_SUCCESS_LOC', payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: 'FETCHING_ERROR', payload: err });
      console.log(err);
    });
};
const apiReverseLocation = (lat, lon) => dispatch => {
  const key = '03d87b93bc3308';
  const api = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${lat}&lon=${lon}&format=json`;
  const request = axios.get(api);
  console.log(api);
  dispatch({ type: 'FETCHING_STARTED' });
  request
    .then(res => {
      dispatch({ type: 'FETCHING_SUCCESS_REV_LOC', payload: res.data.address });

      const loc_road = res.data.address.road;
      const loc_city = res.data.address.city;
      const loc = loc_road + ',' + loc_city;

      dispatch(changeLoc(loc, lat, lon));
    })
    .catch(err => {
      dispatch({ type: 'FETCHING_ERROR', payload: err });
      console.log(err);
    });
};
const apiWeather = (lat, lon, unit, lang) => dispatch => {
  const key = '97bbbe51f6bf06e0fa1d20b2f12146b6';
  const api = `https://api.darksky.net/forecast/${key}/${lat},${lon}?units=${unit}&exclude=minutely,hourly,flags&lang=${lang}`;
  const request = axios.get(api);
  console.log(request);
  dispatch({ type: 'FETCHING_STARTED' });
  request
    .then(res => {
      dispatch({ type: 'FETCHING_SUCCESS_WET', payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: 'FETCHING_ERROR', payload: err });
      console.log(err);
    });
};
const apiTimeMachine = (lat, lon, unit, lang, time) => dispatch => {
  const key = '97bbbe51f6bf06e0fa1d20b2f12146b6';
  const api = `https://api.darksky.net/forecast/${key}/${lat},${lon},${time}?units=${unit}&exclude=minutely,daily,flags&lang=${lang}`;
  const request = axios.get(api);
  console.log(api);
  dispatch({ type: 'FETCHING_STARTED' });
  request
    .then(res => {
      dispatch({ type: 'FETCHING_SUCCESS_TM', payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: 'FETCHING_ERROR', payload: err });
      console.log(err);
    });
};
export {
  changeAuth,
  changeUnit,
  changeLang,
  changeTheme,
  changeAccentColor,
  changeLoc,
  apiLocation,
  apiWeather,
  apiTimeMachine,
  apiReverseLocation
};
