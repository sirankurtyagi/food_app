
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import {Platform} from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealsDetail from '../screens/MealsDetail';
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

export default createAppContainer(MealsNavigator);