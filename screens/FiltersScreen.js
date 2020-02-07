import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const Filters = props => {
    
    const [ isGlutenFree, setIsGlutenFree] = useState(false);

    return ( 

        <View>
            <View>
                <Text>Available Filters</Text>
            </View>
            <View>
                <Text>Gluten-Free</Text>
                <Switch trackColor={{true: 'grey'}}
                        thumbColor='yellow'
                        value={isGlutenFree}
                        onValueChange={newValue => setIsGlutenFree(newValue) }
                />
            </View>
        </View>
    );
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