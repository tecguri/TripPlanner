import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Banff", imageUrl: "./public/destination1.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination1.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Banff</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>Nestled amid the foothills of the Canadian Rockies, this tiny mountain town in Alberta appeals to both nature enthusiasts and luxury seekers. </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Jasper National Park", imageUrl: "./public/destination2.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination2.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Jasper National Park</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>As the largest national park in the Canadian Rockies, Jasper is ripe for exploration.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Vancouver, Canada", imageUrl: "./public/destination3.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination3.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Vancouver, Canada</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>A trip to this British Columbia city, which sits approximately 145 miles north of Seattle, is all about embracing the outdoors.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Niagara Falls", imageUrl: "./public/destination4.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination4.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Niagara Falls</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>Travel to this iconic destination in southeastern Ontario to see and capture photos of its namesake world-famous tourist attraction.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Whitehorse", imageUrl: "./public/destination5.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination5.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Whitehorse</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>Referred to as the "small city with a big backyard," Whitehorse – the capital of Canada's Yukon territory – shines with all of its outdoor activities.</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TripDetails', {tripName: "Quebec City", imageUrl: "./public/destination6.jpeg"})} style={styles.tripCardContainer}>
                <View style={styles.tripCardHeader}>
                    <Image source={require("./public/destination6.jpeg")} style={styles.image} />
                    <Text style={styles.tripCardHeaderText}>Quebec City</Text>
                </View>
                <View style={styles.tripCardBody}>
                    <Text style={styles.tripCardText}>A trip to Europe may not be in your budget, but a visit to Québec City could be. This Canadian city charms visitors with its picturesque centuries-old buildings that make up Old Québec – a UNESCO World Heritage Site. </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Trip Planner</Text>
    //   <Button
    //     title="View Trip Details"
    //     onPress={() => navigation.navigate('TripDetails')}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 2,
    },
    tripCardContainer: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    tripCardHeader: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tripCardHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tripCardBody: {
        padding: 10,
    },
    tripCardText: {
        fontSize: 16,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain', 
    },
});

export default HomeScreen;
