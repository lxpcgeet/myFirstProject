/**
 * Created by Administrator on 2017/6/16.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'


let imgs = [
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg',
]

let len = imgs.length;

export default class ImageAss extends Component {

    static navigationOptions = {
        title:'Image组件'
    }

    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
    }

    actionadd = () => {
        let count = this.state.count;
        count++;
        if( count > len - 1 ){
            count = len - 1
        }
        this.setState({
            count:count
        })
    }

    actionreduce = () => {
        let count = this.state.count;
        count--;
        if( count < 0 ){
            count = 0
        }
        this.setState({
            count:count
        })
    }

    render(){
        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri:imgs[this.state.count]}}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.text}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={()=>this.actionreduce()}
                    >
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={()=>this.actionadd()}
                    >
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        alignItems:'center',
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        width: 300,
        height: 200,
    },
    img:{
        height: 150,
        width: 200,
    },
    text:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 10
    },
    btn:{
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 25,
        marginRight: 25,
        width: 60,
        height: 30,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})