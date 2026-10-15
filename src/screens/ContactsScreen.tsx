import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Mom', phone: '+91 9876543210' },
    { id: '2', name: 'Dad', phone: '+91 9123456789' },
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { id: Date.now().toString(), name, phone }]);
      setName('');
      setPhone('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Contact Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        <TouchableOpacity style={styles.addButton} onPress={addContact}>
          <Text style={styles.btnText}>Add Contact</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#D9534F', marginBottom: 20 },
  inputContainer: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#DDD', padding: 10, borderRadius: 8, marginBottom: 10 },
  addButton: { backgroundColor: '#D9534F', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold' },
  card: { backgroundColor: '#F9F9F9', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#EEE' },
  contactName: { fontSize: 16, fontWeight: 'bold' },
  contactPhone: { fontSize: 14, color: '#666' },
});

export default ContactsScreen;
