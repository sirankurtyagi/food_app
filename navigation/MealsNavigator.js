
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealsDetail from '../screens/MealsDetail';


const MealsNavigator = createStackNavigator({
        CategoriesScreen: CategoriesScreen,
        CategoryMeals:CategoryMeals,
        MealsDetail: MealsDetail
    });

export default createAppContainer(MealsNavigator);