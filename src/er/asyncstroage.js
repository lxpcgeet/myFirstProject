/**
 * Created by Administrator on 2017/6/16.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native'




let width = Dimensions.get('window').width;

const Model = [
    {
        id:'1',
        title:'黑龙江猕猴桃',
        desc:'12个装',
        price:99,
        url:'http://vczero.github.io/ctrip/guo_1.jpg'
    },
    {
        id:'2',
        title:'牛油果',
        desc:'2个装',
        price:55,
        url:'http://vczero.github.io/ctrip/guo_2.jpg'
    },
    {
        id:'3',
        title:'车厘子',
        desc:'10个装',
        price:188,
        url:'http://vczero.github.io/ctrip/guo_3.jpg'
    },
    {
        id:'4',
        title:'西梅',
        desc:'1000g',
        price:20,
        url:'http://vczero.github.io/ctrip/guo_4.jpg'
    },
    {
        id:'5',
        title:'大冬枣',
        desc:'2000g',
        price:200,
        url:'http://vczero.github.io/ctrip/guo_5.jpg'
    },
    {
        id:'6',
        title:'胡辣汤',
        desc:'20包',
        price:1000,
        url:'http://vczero.github.io/ctrip/guo_6.jpg'
    },
]

let gouwuDataArr = [];

class Stroe extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    press = (item,index) => {

        let count = this.state.count;
        count++;
        this.setState({
            count:count,
        })

        AsyncStorage.setItem(
            'gouwu'+Date.parse(new Date()),
            JSON.stringify(item),
            (error,result) => {
                if(!error){
                    console.log('保存成功')
                }
            }
        )


        // storage.save({
        //     key:'gouwukuang',
        //     id:index,
        //     data:JSON.stringify(item),
        //     expires:10*60*1000,
        // })

        // storage.load({
        //     key:'gouwukuang'
        // }).then(ret =>{
        //     console.log('存储成功')
        // }).catch(err=>{
        //     console.log('存储失败')
        // })
    }


    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.flex}>
                <ScrollView
                    contentContainerStyle = {styles.contain}
                >
                    {
                        Model.map((item,index)=> {
                            return (
                                <TouchableOpacity
                                    activeOpacity = {0.3}
                                    key={index}
                                    onPress={()=>{ this.press(item,index) }}
                                >
                                    <View
                                        style={styles.signStroe}

                                    >
                                        <Image source={{uri:item.url}}  style={styles.img}>
                                            <Text style={styles.text}>{item.title}</Text>
                                        </Image>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.btn}>
                    <TouchableOpacity
                        activeOpacity = {0.3}
                    >
                        <Text
                            {...this.props}
                            onPress = {()=> navigate('Gouwu',{})}
                        >去结算，共{this.state.count}件商品</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default class Item extends Component {

    static navigationOptions = {
        title:'商品列表'
    }

    render(){

        return (
            <View>
                <Stroe {...this.props}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    flex:{
      //flex:1,
      alignItems:'center',
    },
    contain:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 5,
        marginRight: 5,
    },
    signStroe:{
        borderWidth: 1,
        borderColor: '#ddd',
        width: width/2 - 10,
        height: 120,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
    },
    img:{
        width: width/2-12,
        height: 118,
        position: 'relative',

    },
    text:{
        textAlign: 'center',
        backgroundColor: '#000',
        opacity: 0.7,
        color:'#fff',
        lineHeight: 18,
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width: width/2,
        marginTop: 20,
        height: 40,
        backgroundColor: '#cdcdcd',
        borderRadius: 5,
    }

})