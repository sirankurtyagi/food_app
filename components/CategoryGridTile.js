import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CategoryGridTile = props => {

    const bgColor = props.item.color;
    
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.gridLayout}>
                <Text style={[styles.gridItem,{backgroundColor:bgColor} ]}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    gridLayout:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem:{
        margin: 3,
        width: 180,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        color:'black',
        fontSize:24,
        paddingTop:30,
        paddingLeft:15,
        
    },
});

export default CategoryGridTile;
