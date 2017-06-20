/**
 * Created by Administrator on 2017/6/15.
 */


import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class news extends Component {


    show = (title) => {
        //alert(title)
    }

    render(){

        let news = this.props.news.map((item,index) => {
            return (
                <Text key={index}
                   onPress={this.show(item)}
                   numberOfLines={2}
                   style={styles.news_item}
                >
                    {item}
                </Text>
            )
        })

        return(
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                <ScrollView>
                {news}
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    news_item:{

    },
    news_title:{
        marginTop: 15,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cdcdcd'
    },
    news_item:{
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        lineHeight: 20,
        height: 40
    }
})