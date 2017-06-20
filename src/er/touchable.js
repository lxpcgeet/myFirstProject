/**
 * Created by Administrator on 2017/6/16.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback//触发没有反馈  这个一般不适用  有用到的地方可以再看文档
} from 'react-native'

export default class Touchable extends Component {


    static navigationOptions = {
        title:'touchable组件',
    }

    show = ( val ) => {
        alert(val)
    }

    showAction = () => {
        alert('添加背景触发的事件')
    }

    hideAction = () => {
        alert('隐藏背景触发的事件')
    }


    render(){
        return(
            <View>
                <TouchableHighlight
                    underlayColor="#ddd"
                    onPress = { ()=> {} }
                    onShowUnderlay = {()=>{ this.showAction() }}
                    onHideUnderlay = { ()=> {this.hideAction()} }
                    activeOpacity = {0.3}
                >
                    <Text>TouchableHighlight 组件</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    activeOpacity = {0.3}
                >
                    <Text>TouchableOpacity 组件</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const styles = StyleSheet.create({

})