/**
 * Created by Administrator on 2017/6/16.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    WebView,
    StyleSheet,
    Dimensions
} from 'react-native'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;//获取屏幕的宽度和高度

export default class WebViews extends Component {

    static navigationOptions = {
        header:null
    }



    render(){
        return(
            <View style={styles.flex}>
                <WebView
                    injectJavaScript={()=>{alert('这是app嵌套的活动页')}}
                    source={{uri:'http://www.baidu.com'}}
                    style={{width:width,height: height}}
                >

                </WebView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    }
})