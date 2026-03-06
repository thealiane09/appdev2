import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Todo from './screens/Todo';

export default function App() {
  // Controls which screen is currently shown
  const [currentScreen, setCurrentScreen] = useState('Login');

  // Simple navigation object passed to each screen
  const navigation = {
    navigate: (screen) => setCurrentScreen(screen),
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <Login navigation={navigation} />
      ) : currentScreen === 'Signup' ? (
        <Signup navigation={navigation} />
      ) : (
        <Todo navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});