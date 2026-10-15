import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import SosScreen from './src/screens/SosScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SosScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
