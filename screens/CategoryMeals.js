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
import MealList from "../components/MealList";

const CategoriesMeals = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
 
  return (
   <MealList  displayedMeals={displayedMeals} navigation={props.navigation} />
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
