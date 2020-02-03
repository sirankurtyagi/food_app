import React,{useState} from  'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity, Platform} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            
            <CategoryGridTile 
                title='Categories List'
                // title={itemData.item.title}
                onSelect={()=>{
                    // props.navigation.navigate('CategoryMeals');
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params:{
                            categoryId: 3
                            // categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns = {3} />

        // <View style={styles.categoriesContainer}>
        //     <Button title="Go to Meals List" onPress={() =>{
        //         props.navigation.navigate({routeName:'CategoryMeals'});
        //     }} />
        //     <Text style={styles.textContainer}>Breakfast</Text>
        //     <Text style={styles.textContainer}>North Indian</Text>
        //     <Text style={styles.textContainer}>Continental</Text>
        //     <Text style={styles.textContainer}>South Indian</Text>
        //     <Text style={styles.textContainer}>Italian</Text>
        //     <Text style={styles.textContainer}>Swedish</Text>
        //     <Text style={styles.textContainer}>Quick Bites</Text>
        // </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
    },
    headerTintColor: 'black'
};

const styles = ({
    
    textContainer:{
        margin:10,
        borderRadius:5,
        borderWidth:4,
        borderColor:'green',
        padding:20,
        color:'red',
        backgroundColor: 'green',
        fontSize:20,
        borderRadius:50,
        width:300,
        textAlign: 'center',
        marginTop:5

    }
});

export default CategoriesScreen;