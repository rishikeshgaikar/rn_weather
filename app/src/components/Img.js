import React from 'react';
import { Image } from 'react-native';
import R from '../R';

export const Img = props => {
  let icon = props.d2;
  let w = props.h;
  let h = props.w;
  switch (icon) {
    case 'clear-day':
      return (
        <Image source={R.images.clear_day} style={{ width: w, height: h }} />
      );
    case 'clear-night':
      return (
        <Image source={R.images.clear_night} style={{ width: w, height: h }} />
      );
    case 'rain':
      return <Image source={R.images.rain} style={{ width: w, height: h }} />;
    case 'snow':
      return <Image source={R.images.rain} style={{ width: w, height: h }} />;
    case 'sleet':
      return <Image source={R.images.sleet} style={{ width: w, height: h }} />;
    case 'wind':
      return <Image source={R.images.wind} style={{ width: w, height: h }} />;
    case 'fog':
      return <Image source={R.images.fog} style={{ width: w, height: h }} />;
    case 'cloudy':
      return <Image source={R.images.cloudy} style={{ width: w, height: h }} />;
    case 'partly-cloudy-day':
      return (
        <Image
          source={R.images.partly_cloudy_day}
          style={{ width: w, height: h }}
        />
      );
    case 'partly-cloudy-night':
      return (
        <Image
          source={R.images.partly_cloudy_night}
          style={{ width: w, height: h }}
        />
      );
    default:
      return (
        <Image source={R.images.clear_day} style={{ width: w, height: h }} />
      );
  }
};
