import React,{useState} from  'react';

import {View, Text, ImageBackground, FlatList, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsDetail = props => {

    const mealId = props.navigation.getParam('mealId');
    
    const mealDetails = MEALS.filter(meal=> meal.id === mealId);

    const meal = item => {
        return ( 
            <View>
                <ImageBackground 
                 source={{uri:item.item.imageUrl}}
                 style={styles.bgImage} />

                <Text style={styles.meals}>{item.item.title}</Text>
                <Text style={styles.meals}>{item.item.duration}</Text>
                <Text>{item.item.steps}</Text>
            </View>
        );
    };
    
    return (
        <View style={styles.detailContainer}>
            <FlatList  data={mealDetails}
                        renderItem={meal}
            />
        </View>
    );
};

const styles = ({
    detailContainer:{
        margin:10
    },
    bgImage: {
        width: "100%",
        height: 200
    },
    meals: {
        margin: 10,
        borderColor: "green",
        padding: 20,
        color: "red",
        backgroundColor: "yellow",
        fontSize: 20,
        borderRadius: 50,
        width: 300,
        textAlign: "center"
      }
    
});

export default MealsDetail;