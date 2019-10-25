import React from 'react';
import { RootView } from '../components';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: { padding: 30 }
});

const Loading = () => {
  return (
    <RootView>
      <View style={styles.view}>
        <ActivityIndicator size={'large'} style={styles.spinner} />
      </View>
    </RootView>
  );
};

export { Loading };
