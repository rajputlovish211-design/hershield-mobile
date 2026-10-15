import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { api } from '../services/api';

export default function SosScreen() {
  const [loading, setLoading] = useState(false);

  const handleEmergencySos = async () => {
    try {
      setLoading(true);

      const dummyLocation = {
        userId: 'sample_user_id',
        latitude: 28.6139,
        longitude: 77.2090,
        accuracy: 10,
      };

      const response = await api.post('/sos', dummyLocation);

      if (response.data.success) {
        Alert.alert('SOS Triggered!', 'Emergency responders and trusted contacts have been notified.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to trigger SOS. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HerShield Emergency</Text>
      <Text style={styles.subtitle}>Tap the button below in case of danger</Text>

      <TouchableOpacity 
        style={styles.sosButton} 
        onPress={handleEmergencySos}
        disabled={loading}
      >
        <Text style={styles.sosText}>{loading ? 'SENDING...' : 'SOS'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  sosButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sosText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
