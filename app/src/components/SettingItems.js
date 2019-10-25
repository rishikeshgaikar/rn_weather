import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const styles = StyleSheet.create({
  c1: { flexDirection: 'row' },
  cc1: { flex: 8, margin: 2, alignItems: 'center', justifyContent: 'center' },
  cc2: { flex: 1, margin: 2, alignItems: 'center' },
  titleText: { alignSelf: 'flex-start', fontSize: 20, paddingVertical: 5 },
  selectedText: { alignSelf: 'flex-start' },
  icon: { alignSelf: 'flex-end', paddingVertical: 10 }
});

export const SettingItems = ({ title, icon, Selected, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Card>
      <View style={styles.c1}>
        <View style={styles.cc1}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.selectedText}>{Selected}</Text>
        </View>
        <View style={styles.cc2}>
          <Icon style={styles.icon} name={icon} size={30} color='#000' />
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);
