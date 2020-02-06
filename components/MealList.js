import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from "./MealItem";

const MealList = props => {

    const displayMealItem = itemData => {
        return <MealItem itemData={itemData} 
            onSelectMeal={()=>{
                props.navigation.navigate({
                    routeName: 'MealsDetail',
                    params:{
                        mealId: itemData.item.id
                    }
                });
            }}
        />;
      };

    return (
        <View style={styles.mealsContainer}>
        <FlatList
          data={props.displayedMeals}
          keyExtractor={(item, index) => item.id}
          renderItem={displayMealItem}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    mealsContainer: {
        margin: 10
    }
});

export default MealList;