/**
 * Created by Administrator on 2017/6/15.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';



export default class Detail extends Component {

    static navigationOptions = {
        title:'this is detailTitle'
    }

    render(){

        return (
            <View>
                <Text>this is detailPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})