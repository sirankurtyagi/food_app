import React,{useState} from  'react';

import {View, StyleSheet, Text, Button} from 'react-native';

const CategoriesScreen = props => {
        console.log(props);
    return (
        <View style={styles.categoriesContainer}>
            <Button title="Go to Meals List" onPress={() =>{
                props.navigation.navigate({routeName:'CategoryMeals'});
            }} />
            <Text style={styles.textContainer}>Breakfast</Text>
            <Text style={styles.textContainer}>North Indian</Text>
            <Text style={styles.textContainer}>Continental</Text>
            <Text style={styles.textContainer}>South Indian</Text>
            <Text style={styles.textContainer}>Italian</Text>
            <Text style={styles.textContainer}>Swedish</Text>
            <Text style={styles.textContainer}>Quick Bites</Text>
        </View>
    );
};

const styles = ({
    categoriesContainer:{
        margin:10
    },
    textContainer:{
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

export default CategoriesScreen;