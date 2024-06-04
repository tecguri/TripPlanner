import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SuccessScreen = ({ route, navigation }) => {
  const { tripName, numberOfPeople, totalPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Submission Successful!</Text>
      <Text style={styles.detail}>Trip Name: {tripName}</Text>
      <Text style={styles.detail}>Number of People: {numberOfPeople}</Text>
      <Text style={styles.detail}>Total Price: ${totalPrice}</Text>
      <Button title="Go Back Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SuccessScreen;
