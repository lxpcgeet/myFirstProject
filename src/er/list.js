/**
 * Created by Administrator on 2017/6/15.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';



export default class List extends Component {

    static navigationOptions = {
        title:'this is detailTitle'
    }

    render(){


        const { navigate } = this.props.navigation;
        // console.log(navigate)
        //const navigate = this.props.navigate;
        return(
            <View style={[styles.flex,styles.list_item]}>
                <Text
                    style={styles.list_item_font}
                    onPress = { () => {navigate( 'Detail', {} )} }
                >{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        //flex:1
    },
    list_item:{
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent:'center',
    },
    list_item_font:{
        fontSize: 16,
    }
})
