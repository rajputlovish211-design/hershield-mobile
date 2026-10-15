import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import SosScreen from './src/screens/SosScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SosScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
