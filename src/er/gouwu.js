/**
 * Created by Administrator on 2017/6/18.
 */


import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';



export default class Gouwu extends Component {

    static navigationOptions = {
        title:'购物车，商品列表'
    }


    constructor(props){
        super(props)
        this.state = {
            data:[],
        }
    }

    clear = () => {
        AsyncStorage.clear((err)=>{
            if( !err ){
                console.log('清楚')

                this.setState({
                    data:[],
                })
            }
        })
    }

    render(){

        let data = this.state.data;
        let list = [];

        for( let i = 0;i < data.length;i++ ){
            list.push(
                <View style={styles.list} key={i}>
                    <Text>{data[i].title}{data[i].desc}</Text>
                    <Text>￥{data[i].price}</Text>
                </View>
            )
        }

        return(
            <View>
                <View style={styles.listContain}>
                    {list}
                </View>
                <View>
                    <Button
                        title="一共多少钱"
                        onPress={()=>{}}
                    />
                    <Button
                        title="去结算"
                        onPress={()=>{}}
                    />

                    <Button
                        title="清空所有AsyncStorage"
                        onPress={()=>{this.clear()}}
                    />
                </View>
            </View>
        )
    }


    componentDidMount = () => {

        let _that = this;

        AsyncStorage.getAllKeys((err,keys)=>{
            if( err ){
                return
            }

            AsyncStorage.multiGet(keys,(errs,result)=>{

                let arr = [];
                console.log( result )
                for( let i in result ){
                    if( i > 0 ){
                        arr.push( JSON.parse(result[i][1]) )
                    }

                }

                _that.setState({
                    data:arr,
                })

            })

        })
    }
}

const styles = StyleSheet.create({
    listContain:{
        marginBottom: 20,
    },
    list:{
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection:'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})