import React,{useState} from  'react';

import {View, StyleSheet, Text} from 'react-native';

const CategoriesMeals = props => {

    return (
        <View style={styles.mealsContainer}>
            
            <Text style={styles.mealsList}>Sandwich</Text>
            <Text style={styles.mealsList}>bla bla</Text>
            <Text style={styles.mealsList}>bla bla bla</Text>
            <Text style={styles.mealsList}>dosa</Text>
            <Text style={styles.mealsList}>samosa</Text>
            <Text style={styles.mealsList}>candies</Text>
            <Text style={styles.mealsList}>burger</Text>
        </View>
    );
};

const styles = ({
    mealsContainer:{
        margin:10
    },
    mealsList:{
        margin:10,
        borderRadius:5,
        borderWidth:4,
        borderColor:'green',
        padding:20,
        color:'red',
        backgroundColor: 'yellow',
        fontSize:20,
        borderRadius:50,
        width:300,
        textAlign: 'center'

    }
});

export default CategoriesMeals;