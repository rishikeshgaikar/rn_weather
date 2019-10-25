import React from 'react';
import { CurrentlyCard } from '../components';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

const CurrentlyCardRow = ({
  pressure,
  windSpeed,
  humidity,
  dewPoint,
  uvIndex,
  visibility,
  ozone,
  unit
}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <CurrentlyCard
        data={pressure}
        heading={'Pressure'}
        unit={unit == 'si' ? 'hPa' : 'psi'}
      />
      <CurrentlyCard
        data={windSpeed}
        heading={'Wind Speed'}
        unit={unit == 'si' ? 'm/s' : 'mph'}
      />
      <CurrentlyCard data={humidity} heading={'Humidity'} unit={'%'} />
      <CurrentlyCard data={dewPoint} heading={'Dew Pt'} unit={'\u00B0'} />
      <CurrentlyCard data={uvIndex} heading={'UV Index'} unit={''} />
      <CurrentlyCard data={visibility} heading={'Visibility'} unit={''} />
      <CurrentlyCard data={ozone} heading={'Ozone'} unit={''} />
    </ScrollView>
  );
};
const mapStateToProps = state => {
  return {
    unit: state.unitR.unit
  };
};
export default connect(mapStateToProps)(CurrentlyCardRow);
