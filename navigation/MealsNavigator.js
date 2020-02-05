
import {React} from 'react';
import {Platform} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealsDetail from '../screens/MealsDetail';
import Favorites from '../screens/FavoriteScreen';
import Color from '../constants/Color';

const MealsNavigator = createStackNavigator({
        CategoriesScreen: CategoriesScreen,
        CategoryMeals:CategoryMeals,
        MealsDetail: MealsDetail
    },
    {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
            },
            headerTintColor: 'black'
        }
    });

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: MealsNavigator,
            defaultNavigationOptions: () => {
               tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}  />
                }
            }
        },
    Favorite:  { screen: Favorites,
        defaultNavigationOptions: () => {
           tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}  />
            }
        }
    },
});

export default createAppContainer(MealsFavTabNavigator);