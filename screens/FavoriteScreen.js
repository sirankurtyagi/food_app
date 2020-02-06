import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from "../components/MealList";
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const Favorites = props => {
    
    const favMeals = MEALS.filter(meal=> meal.id === 'm1' || meal.id === 'm2' );
    return (
           <MealList  displayedMeals={favMeals} navigation={props.navigation} />
            );
};

Favorites.navigationOptions = (navData) => {
    return {
        
        headerTitle: 'Your Favorites',
        headerTintColor: 'black',
        headerLeft:(
            <HeaderButtons Component={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} 
                />
            </HeaderButtons>)
    };
};


const styles = StyleSheet.create({
    
});

export default Favorites;