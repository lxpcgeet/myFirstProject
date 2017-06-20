/**
 * Created by Administrator on 2017/6/16.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'

let icons = [
    'http://vczero.github.io/ctrip/message.png',
    'http://vczero.github.io/ctrip/phone.png',
    'http://vczero.github.io/ctrip/star.png',
]

let name = [
    '消息',
    '联系人',
    '动态',
]

export default class Tab extends Component {

    static navigationOptions = {
        title:'Tab组件'
    }

    constructor(props){
        super(props)
        this.state = {
            selectedTab:'消息'
        }
    }


    render() {
        return(
            <View style={{flex:1,height: 50}}>

                <TabNavigator
                    hidesTabTouch = {true}
                    tabBarStyle = {styles.tabBarStyle}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '消息'}
                        title='消息'
                        renderIcon={()=><Image source={{uri:icons[0]}} style={{height: 20,width: 20}}/>}
                        onPress = {()=>{this.setState({selectedTab:'消息'})}}
                        badgeText="2"
                        titleStyle={styles.titleStyle}

                    >
                        <Text>消息</Text>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '联系人'}
                        title='联系人'
                        renderIcon={()=><Image source={{uri:icons[1]}} style={{height: 20,width: 20}}/>}
                        onPress = {()=> {this.setState({selectedTab:'联系人'})}}
                    >
                        <Text>联系人</Text>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '动态'}
                        title='动态'
                        renderIcon={()=><Image source={{uri:icons[2]}} style={{height: 20,width: 20}}/>}
                        onPress = {()=> {this.setState({selectedTab:'动态'})}}
                    >
                        <Text>动态</Text>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height: 50,
        backgroundColor: '#303030',
    },
    titleStyle:{
        color: 'red',
        fontSize: 13
    }
})