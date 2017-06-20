/**
 * Created by Administrator on 2017/6/12.
 */


import React, {Component} from 'react';


import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class Luchantu extends Component {
    render(){
        return (
            <View style={styles.viewEr}>
                {/*1元吃大餐*/}
                <View style={styles.viewErContent1}>
                    <View>
                        <Text style={styles.viewErText1}>1元吃大餐</Text>
                        <Text style={styles.viewErText2}>新用户专享</Text>
                    </View>
                    <View>
                        <Image source={require('../image/2_1.png')}/>
                    </View>
                </View>
                {/*撸串*/}
                <View style={styles.viewErLu}>
                    <View style={[styles.viewErLu,{flex:1,justifyContent:'space-between'}]}>
                        <View style={{paddingLeft:10}}>
                            <Text>撸串节狂欢</Text>
                            <Text>烧烤6.6起</Text>
                        </View>
                        <View style={{paddingRight: 10}}>
                            <Image source={require('../image/2_2.png')}/>
                        </View>
                    </View>
                    <View style={[styles.viewErLu,{flex:1,justifyContent:'space-between'}]}>
                        <View style={{paddingLeft:10}}>
                            <Text>毕业旅行</Text>
                            <Text>选好酒店才能安心</Text>
                        </View>
                        <View style={{paddingRight: 10}}>
                            <Image source={require('../image/2_2.png')}/>
                        </View>
                    </View>
                </View>
                {/*0元餐来袭*/}
                <View>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewEr:{
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    viewErContent1:{
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 30,
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    viewErText1:{
        fontSize: 24,
        color: 'red',
        lineHeight: 32,
    },
    viewErText2:{
        fontSize: 12,
        color: '#000',
        lineHeight: 20,
    },


    viewErLu:{
        flexDirection: 'row',
    },
})