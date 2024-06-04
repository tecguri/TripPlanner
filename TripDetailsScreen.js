import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TripDetailsScreen = ({ route, navigation }) => {
    const {tripName, imageUrl} = route.params;
    
    const [numberOfPeople, setNumberOfPeople] = useState(1); // State to store number of people

    const ticketPricePerPerson = 50;
    const totalPrice = numberOfPeople * ticketPricePerPerson;

    const handleSubmit = () => {
        navigation.navigate('Success', { tripName, numberOfPeople, totalPrice });
    };


    // Function to handle increment
    const handleIncrement = () => {
        setNumberOfPeople(prev => prev + 1);
    };

    // Function to handle decrement
    const handleDecrement = () => {
        setNumberOfPeople(prev => (prev > 1 ? prev - 1 : 1));
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Location: <Text style={styles.locationName}>{tripName}</Text> </Text>
            <Image source={require("./public/plan_vacation.jpg")} style={styles.image} />
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Number of person:   </Text>
                <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={String(numberOfPeople)}
                    keyboardType="numeric"
                    onChangeText={text => setNumberOfPeople(Number(text))}
                />
                <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>Ticket Price per Person: ${ticketPricePerPerson}</Text>
            <Text style={styles.priceText}>Total Price: ${totalPrice}</Text>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Text style={styles.goBackButtonText}>Go Back</Text>
            </TouchableOpacity>

    </View>
    
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain', 
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    locationName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#28a745"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 60,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 18,
        marginTop: 20,
    },
    submitButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        marginTop: 50,
        width: '80%',
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    goBackButton: {
        backgroundColor: '#6c757d',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    goBackButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TripDetailsScreen;
