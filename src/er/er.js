/**
 * Created by Administrator on 2017/6/12.
 */


import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ErTop extends Component {
    render(){
        return (
            <View style={[styles.allView,{marginBottom: 10}]}>
                <View style={[styles.viewLeft,styles.viewBorder]}>
                    <Image source={require('../image/1_1.png')} />
                </View>
                <View style={[styles.viewRight,styles.viewBorder]}>
                    <View style={{borderBottomWidth: 1,borderColor: '#000'}}>
                        <Image source={require('../image/1_2.png')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.viewBorder}>
                            <Image source={require('../image/1_3.png')}/>
                        </View>
                        <View style={styles.viewBorder}>
                            <Image source={require('../image/1_4.png')}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    allView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    viewLeft:{
        flex:1,
        height: 160,
        borderWidth: 1,
        borderColor: '#000',
    },
    viewRight: {
        flex:2,
        height: 160,
        borderWidth: 1,
        borderColor: '#000',
    },
    viewBorder: {
        fontSize: 50,
        justifyContent:'center',
        alignItems:'center',
    },
})