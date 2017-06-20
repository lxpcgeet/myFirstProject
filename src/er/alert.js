/**
 * Created by Administrator on 2017/6/19.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
    'catalysts for change. Dynamically revolutionize.';
export default class Alertm extends Component {

    static navigationOptions = {
        title:'Alert页面'
    }

    render(){
        return (
            <View>
                <TouchableOpacity
                    activeOpacity = {0.5}
                    onPress = {()=>{
                        Alert.alert(
                            'alert title',
                            alertMessage,
                            [
                                {text:'ask me later',onPress:()=>console.log('ask me later pressed')},
                                {text:'cancel',onPress:()=>console.log('cancel pressed')},
                                {text:'ok',onPress:()=>console.log('ok pressed')}
                            ],
                            {cancelable:false}
                        )
                    }}
                >
                    <Text>Alert点击按钮</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({

})