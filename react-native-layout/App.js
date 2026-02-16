import React from 'react';
import { View, StyleSheet } from 'react-native';
import Signup from './screens/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});