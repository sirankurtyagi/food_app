import React,{useState} from  'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Icon from '@expo/vector-icons/Feather';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        const { item } = itemData;
        
        return (
            <CategoryGridTile 
                onSelect={()=>{
                    // props.navigation.navigate('CategoryMeals');
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params:{
                            categoryId: item.id
                        }
                    });
                }}
                item={item}
            />
        );
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns = {2} />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        
        headerTitle: 'Meal Categories',
        headerTintColor: 'black',
        headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
                <Icon 
                    name="menu" 
                    size={30} 
                    onPress={() => navData.navigation.toggleDrawer()} 
                    />
            </View>
        )
    };
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
