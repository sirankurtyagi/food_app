import React,{useState} from  'react';

import {View, StyleSheet, Text} from 'react-native';

const MealsDetail = props => {

    return (
        <View style={styles.detailContainer}>
            
            <Text style={styles.mealDetail}>Veg Sandwich</Text>
            <Text style={styles.mealDetail}>It contains---</Text>
            <Text style={styles.mealDetail}>tomatoes</Text>
            <Text style={styles.mealDetail}>capsicum</Text>
            <Text style={styles.mealDetail}>ginger</Text>
            <Text style={styles.mealDetail}>peas</Text>
            <Text style={styles.mealDetail}>sauces</Text>
            <Text style={styles.mealDetail}>potato</Text>
        </View>
    );
};

const styles = ({
    detailContainer:{
        margin:10
    },
    mealDetail:{
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

export default MealsDetail;