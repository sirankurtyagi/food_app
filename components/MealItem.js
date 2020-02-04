import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const MealItem = props =>{
    console.log(props.itemData.item);
    return (
        <TouchableOpacity style={styles.itemBox} onPress={props.onSelectMeal}>
            <View>
                <ImageBackground source={{uri:props.itemData.item.imageUrl}} style={styles.bgImage}/>
                <Text style={styles.mealItem}>{props.itemData.item.title}</Text>
            </View>
            <View style={styles.mealRecipe}><Text>{props.itemData.item.steps}</Text></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemBox:{
        width:'100%',
        marginBottom:10,
        paddingBottom:10
    },
    mealItem:{
        width:'100%',
        height:50,
        backgroundColor:'yellow',
        marginTop:5
    },
    mealRecipe:{
        width:'100%',
        backgroundColor:'pink',
        marginTop:5
    },
    bgImage:{
        width:'100%',
        height:200
    }
});

export default MealItem;