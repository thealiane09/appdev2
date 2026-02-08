import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📘 Profile Demo</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course & Section</Text>
        <Text style={styles.value}>Bachelor of Science In Information Systems - 3A</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Altia Gonzales Inale</Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>21</Text>

        <Text style={styles.label}>Favorite Hobby</Text>
        <Text style={styles.value}>My favorite hobbies are singing and sleeping</Text>

        <Text style={styles.label}>Short Bio</Text>
        <Text style={styles.bio}>
          Proverbs 3:5 Trust in the LORD with all thine; and lean not unto thine own understanding.
        </Text>

        <Text style={styles.label}>Pet Peeves (Class / Classmates)</Text>
        <Text style={styles.value}>• Acting rude or disrespectful</Text>
        <Text style={styles.value}>• Noisy during discussions</Text>
        <Text style={styles.value}>• Gossiping or spreading rumors</Text>
      </View>
    </View>
  );
};

export default ProfileDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C3E50',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#34495E',
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginTop: 2,
  },
  bio: {
    fontSize: 15,
    color: '#555',
    marginTop: 5,
    lineHeight: 22,
  },
});
