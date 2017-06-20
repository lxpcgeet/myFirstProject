/**
 * Created by Administrator on 2017/6/15.
 */


import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'

export default class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            show:false,
            text:'',
        }
    }

    static navigationOptions = {
        header:null,
    }

    hide = (val) => {
        this.setState({
            show:false,
            text:val
        })
    }


    render(){
        return(
            <View>
                <View style={[styles.flexDirection]}>
                    <View style={styles.flex}>
                        <TextInput
                            placeholder='请输入搜索内容'
                            underlineColorAndroid = 'transparent'
                            style = { styles.input }
                            onChangeText={(text)=>{
                                if( text.trim() ){
                                    this.setState({
                                        text:text,
                                        show:true,
                                    })
                                }else{
                                    this.setState({
                                        show:false,
                                        text:''
                                    })
                                }
                            }}
                            value={this.state.text}
                        />
                    </View>
                   <View style={styles.btn}>
                        <Text
                            onPress={()=> this.hide(this.state.text)}
                            style={styles.text}>搜索</Text>
                    </View>
                </View>
                {this.state.show  &&
                    <View style={styles.result}>
                        <Text
                            onPress={()=> this.hide(this.state.text+'庄')}
                            style={styles.item}>{this.state.text}庄</Text>
                        <Text
                            onPress={()=> this.hide(this.state.text+'园区')}
                            style={styles.item}>{this.state.text}园区</Text>
                        <Text
                            onPress={()=> this.hide(this.state.text+'综合商店')}
                            style={styles.item}>{this.state.text}综合商店</Text>
                        <Text
                            onPress={()=> this.hide('杨树'+this.state.text)}
                            style={styles.item}>杨树{this.state.text}</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexDirection: {
        flexDirection: 'row',
        marginTop: 25
    },
    flex:{
        flex:1,
    },
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 5,
        paddingLeft: 5,
        borderRadius: 4,
    },
    btn:{
        width: 55,
        height: 45,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        justifyContent:'center',
        alignItems:'center',

    },
    text:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    result:{
        marginTop:0,
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        borderColor: '#ccc',
        borderTopWidth: 1,
    },
    item:{
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
    }

})