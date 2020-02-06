import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const Filters = props => {
    
    return <View><Text>Filters Screen</Text></View>;
};

Filters.navigationOptions = (navData) => {

    return {
        headerTitle : 'Filters',
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

export default Filters;