
import {React} from 'react';
import {Platform} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Ionicons from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealsDetail from '../screens/MealsDetail';
import Favorites from '../screens/FavoriteScreen';
import Filters from '../screens/FiltersScreen';
import Color from '../constants/Color';


const navOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
    },
    headerTintColor: 'black'
};

const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen,
    CategoryMeals:CategoryMeals,
    MealsDetail: MealsDetail
},
{
    defaultNavigationOptions: navOptions
});

const favNavigator = createStackNavigator(
    {
        Favorites: Favorites,
        MealsDetail: MealsDetail
    },
    {
        defaultNavigationOptions: navOptions
    });
const bottomTab = {
    Meals: { screen: MealsNavigator,
            defaultNavigationOptions: () => {
               tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-restaurant' size={40} color={tabInfo.tintColor}  />
                }
            }
        },
    Favorite:  { screen: favNavigator,
        defaultNavigationOptions: () => {
           tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={40} color={tabInfo.tintColor}  />
            }
        }
    },
};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTab,{
                                                            shifting:false
                                                        }) 
                                                        : createBottomTabNavigator(bottomTab);

const FilterNav = createStackNavigator({
    Filters:Filters
});

const MainNavigator = createDrawerNavigator({
    MealsFav: MealsFavTabNavigator,
    Filters:FilterNav
});
                                                        
export default createAppContainer(MainNavigator);