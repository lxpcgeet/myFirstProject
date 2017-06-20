/**
 * Created by Administrator on 2017/6/15.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    Button
} from 'react-native';

export default class HeaderContent extends Component {
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex:{
        flexDirection: 'row',
        marginTop: 25,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems:'center',
        justifyContent:'center',
    },
    font:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    font_1:{
        color: '#cdcdcd'
    },
    font_2:{
        color: '#fff',
        backgroundColor: '#000'
    }
})
