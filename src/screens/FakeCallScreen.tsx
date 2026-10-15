import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FakeCallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caller}>Incoming Call...</Text>
      <Text style={styles.name}>Mom</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.callBtn, { backgroundColor: '#4CD964' }]}>
          <Text style={styles.btnText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.callBtn, { backgroundColor: '#FF3B30' }]}>
          <Text style={styles.btnText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', justifyContent: 'space-around', alignItems: 'center' },
  caller: { color: '#AAA', fontSize: 18 },
  name: { color: '#FFF', fontSize: 32, fontWeight: 'bold' },
  buttonRow: { flexDirection: 'row', gap: 40 },
  callBtn: { width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold' },
});

export default FakeCallScreen;
