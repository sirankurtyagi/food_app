import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoriesMeals = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  const displayMealItem = itemData => {
    return <MealItem itemData={itemData} />;
  };
  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={displayMealItem}
      />
    </View>
  );
};

CategoriesMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};
const styles = {
  mealsContainer: {
    margin: 10
  },
  mealsList: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "green",
    padding: 20,
    color: "red",
    backgroundColor: "yellow",
    fontSize: 20,
    borderRadius: 50,
    width: 300,
    textAlign: "center"
  }
};

export default CategoriesMeals;
