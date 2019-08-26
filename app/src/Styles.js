import { StyleSheet } from 'react-native';
import R from './R';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  c1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  c2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cc1: {
    flex: 4
  },
  cc2: {
    flex: 2
  },
  statusbar: {
    backgroundColor: R.colors.statusbar
  },
  celsiusText: {
    fontSize: 70,
    fontStyle: 'normal',
    fontFamily: R.fonts.psBold
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashImg: {
    height: 200,
    width: 200
  },
  splashTitle: {
    fontSize: 30,
    fontFamily: R.fonts.psRegular,
    paddingTop: 20
  },
  spinnerStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: { padding: 30 }
});

export default styles;
