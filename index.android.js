/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button
} from 'react-native';


import HeaderContent from './src/er/header';
import List from './src/er/list';
import News from './src/er/news';
import Detail from './src/er/detail';
import Search from './src/er/search';
import Touchable from './src/er/touchable';
import ImageAss from './src/er/image';
import Tab from './src/er/tab';
import WebViews from './src/er/webview';
import Item from './src/er/asyncstroage';
import Gouwu from './src/er/gouwu';
import Alertm from './src/er/alert';
import NetInfom from './src/er/NetInfo'
import Cameraroll from './src/er/cameraroll';
// import Geolocationm from './src/er/geolocation';

import {StackNavigator} from 'react-navigation';


import Storage from 'react-native-storage';

import {AsyncStorage} from 'react-native';

global.AsyncStorage = AsyncStorage;

let storage = new Storage({
    size:1000,
    storageBackend:AsyncStorage,
    defaultExpires:10*60*1000,
    enableCache:true,
    //sync:require('./sync')
})

//创建一个全局的storage实例，更加方便直接调用
global.storage = storage;


import {Provider} from 'react-redux';

import {connect} from 'react-redux';



// import ErTop from './src/er/er';
// import Luchantu from './src/luchuan/luchan';
//
// class HelloWorld  extends Component {
//   render(){
//     return (
//        <View>
//            <ErTop/>
//            <Luchantu/>
//        </View>
//     )
//   }
// }


// 这个是TextInput 输入框
// class HelloWorld extends Component {
//     constructor(props){
//         super(props);
//         this.state = {text:'useLess Placeholder'}
//     }
//     render(){
//         return (
//             <View style={{flexDirection:'row'}}>
//                 <TextInput
//                     placeholder='请输入内容'
//                     underlineColorAndroid="transparent"
//                     onChangeText={ (text) => { this.setState({text}) } }
//                     value={this.state.text}
//                     style={{borderWidth: 1,borderColor: 'red',fontSize:28,height:70,flex:1,padding:0 ,marginTop:100}}/>
//             </View>
//         )
//     }
//
// }
//
// class UselessInput extends Component {
//     render(){
//         return (
//             <TextInput
//                 {...this.props}
//                 underlineColorAndroid = 'transparent'//去除android的默认底色
//                 editable = {true}//是否可以编辑 默认为true 可以编辑
//             />
//         )
//     }
// }

// class HelloWorld extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             text:'Useless Multiline Placeholder',
//         }
//     }
//
//     render(){
//         return (
//             <View style={{
//                 backgroundColor: this.state.text,
//                 borderBottomColor: '#000',
//                 borderBottomWidth: 1
//             }}>
//                 <UselessInput
//                     multiline = {true}//为true时,可以输入多行文字
//                     numberOfLines = {4}//android 设置可以输入的行数
//                     onChangeText = {(text) => { this.setState({text}) }}
//                     value = {this.state.text}
//                     placeholder = '请输入内容'
//                 />
//             </View>
//         )
//     }
// }



//滚动视图组件 ScrollView
// class HelloWorld extends Component {
//     render(){
//         return (
//             <View style={{height: 300,marginTop: 20}}>
//                 <ScrollView
//                     contentContainerStyle={styles.contentContainer}
//                     style={{borderWidth: 1,borderColor: 'red'}}
//                     horizontal = {true}
//                 >
//                     <Text style={{fontSize:20}}>
//                         scroll me ple
//                         scroll me ple
//                     </Text>
//                     <Image source={require('./src/image/1_1.png')}/>
//                     <Image source={require('./src/image/1_2.png')}/>
//                     <Image source={require('./src/image/1_2.png')}/>
//                 </ScrollView>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     contentContainer:{//ScrollView 内层又自动生成了一个内容的容器 该滚动容器样式不能通过style设置
//         // paddingVertical:20,
//         margin: 20,
//         backgroundColor: 'yellow',
//     }
// })


//列表 FlatList
// export default class HelloWorld extends Component {
//     render(){
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data = {[
//                         {key:'Devin'},
//                         {key:'du'},
//                         {key:'lan'},
//                         {key:'teddd'},
//                         {key:'Devin'},
//                         {key:'du1'},
//                         {key:'lan2'},
//                     ]}
//                     renderItem = { ({item}) => <Text key={item.key} style={styles.item}>{item.key}</Text> }
//                 >
//                 </FlatList>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         paddingTop: 22
//     },
//     item:{
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     }
// })


// class HomeScreen extends Component {
//     static navigationOptions = {//导航栏的标题 可以设置很多选项  static 静态方法 可以直接在类上调用
//       title:'Welcome',
//     }
//     render(){
//         const {navigate} = this.props.navigation;//把这个方法暴露出来 然后调用这个方法跳转
//         return(
//             <View>
//                 <Text>Hello,Chat App!</Text>
//                 <Button
//                   onPress = {()=> navigate('Chat',{user:'Lucy'})}
//                   title = 'Chat with Lucy'
//                 />
//             </View>
//         )
//     }
// }
//
// class ChatScreen extends Component {
//     static navigationOptions = ( {navigation} ) => ({
//         title:`Chat with ${navigation.state.params.user}`
//     })
//     render(){
//         const {params} = this.props.navigation.state;
//         return (
//             <View>
//                 <Text>Chat with {params.user}</Text>
//             </View>
//         )
//     }
// }
//
// const HelloWorld = StackNavigator({//导航栏
//     Home:{screen:HomeScreen},//首先展示什么页面 是跟这里边的顺序有关的
//     Chat:{screen:ChatScreen}
// })


//跳转页面
// class HomeScreen extends Component {
//     static navigationOptions = {
//         title:'Welcome'
//     }
//     render(){
//         const { navigate } = this.props.navigation;
//         return (
//             <View>
//                 <Text>hello chat</Text>
//                 <Button
//                     onPress = { () => navigate('Chat',{user:'lili'}) }
//                     title = 'come to chat'//title直接变大写
//                 />
//             </View>
//         )
//     }
// }
// class ChatScreen extends Component {
//     static navigationOptions = ({navigation}) => ({
//         title: `Chat with ${navigation.state.params.user}`
//     })
//
//     render(){
//         const {params} = this.props.navigation.state;
//         return(
//             <Text>Chat with {params.user}</Text>
//         )
//     }
// }
// const HelloWorld = StackNavigator({
//     Home:{screen:HomeScreen},
//     Chat:{screen:ChatScreen}
// })

// const VisibleTodoList = connect()(TodoList)
//
// const mapStateToProps = (state) => {
//     return {
//         todos:getVisibleTodos(state.todos,state.visibilityFilter)
//     }
// }
//
// const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//         onClick:() => {
//             dispatch({
//                 type:'SET_VISIBILITY_FILTER',
//                 filter:ownProp.filter,
//             })
//         }
//     }
// }
//
// const getVisibleTodos = (todos,filter) => {
//     switch(filter){
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETD':
//             return todos.filter(t => t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => !t.completed)
//         default:
//             throw new Error('unknown filter' + filter)
//     }
// }


// class TodoList extends Component {
//
//     constructor(props){
//         super(props)
//         this.state = {
//             todos:'litodo',
//             visibilityFilter:'SHOW_ALL'
//         }
//     }
//
//     render(){
//         return (
//             <Text>我就是一个Text</Text>
//         )
//     }
// }



//view 教材 布局写法
//View 组件写法
// class HelloWorld extends Component {
//     render(){
//         return(
//             <View style={styles.ccontainer}>
//                 <View style={[styles.item,styles.center]}>
//                     <Text style={styles.font}>酒店</Text>
//                 </View>
//                 <View style={[styles.item,styles.lineLeftRight]}>
//                     <View style={[styles.center,styles.lineCenter,styles.flex]}>
//                         <Text style={styles.font}>海外酒店</Text>
//                     </View>
//                     <View style={[styles.center,styles.flex]}>
//                         <Text style={styles.font}>特惠酒店</Text>
//                     </View>
//                 </View>
//                 <View style={styles.item}>
//                     <View style={[styles.center,styles.lineCenter,styles.flex]}>
//                         <Text style={styles.font}>团购</Text>
//                     </View>
//                     <View style={[styles.center,styles.flex]}>
//                         <Text style={styles.font}>客栈.公寓</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     ccontainer:{
//         flexDirection: 'row',
//         marginTop: 25,
//         marginLeft: 5,
//         marginRight: 5,
//         borderRadius: 5,
//         height: 80,
//         backgroundColor: '#FF0067',
//     },
//     item:{
//         flex: 1,
//         height: 80,
//     },
//     center:{
//         justifyContent:'center',
//         alignItems: 'center',
//     },
//     font:{
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     lineLeftRight:{
//         borderLeftWidth: 1,
//         borderRightWidth: 1,
//         borderColor: '#fff'
//     },
//     lineCenter:{
//         borderBottomWidth: 1,
//         borderColor: '#fff'
//     },
//     flex:{
//         flex:1
//     }
//
// })

const TABAR_ITEMS = [
    '跳转页面detail',
    '太空宣布宇航员在三体获奖',
    '以上送以上送以上送以上送',
    '函数函数函数函数函数函数',
]


class HelloWorld extends Component {
    static navigationOptions = {
        title:'网易首页',
        header:null,
    }

    render(){

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.flex}>
                <HeaderContent/>

                {
                    TABAR_ITEMS.map((item,index) => {
                        return (
                            <List key={index} title={item} {...this.props}/>
                        )
                    })
                }
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Search',{})}}
                        style={{marginRight: 20}}
                    >TextInput组件实例</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Touchable',{})}}
                        style={{marginRight: 20}}
                    >Touchable组件</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('ImageAss',{})}}
                        style={{marginRight: 20}}
                    >Image组件</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Tab',{})}}
                        style={{marginRight: 20}}
                    >Tab组件</Text>


                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('WebViews',{})}}
                        style={{marginRight: 20}}
                    >webview组件</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Item',{})}}
                        style={{marginRight: 20}}
                    >asyncstroage组件</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Alertm',{})}}
                        style={{marginRight: 20}}
                    >Alert组件</Text>


                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('NetInfom',{})}}
                        style={{marginRight: 20}}
                    >NetInfo组件</Text>

                    <Text
                        {...this.props}
                        onPress = {()=>{navigate('Cameraroll',{})}}
                        style={{marginRight: 20}}
                    >Cameraroll组件</Text>

                    {/*<Text*/}
                        {/*{...this.props}*/}
                        {/*onPress = {()=>{navigate('Geolocationm',{})}}*/}
                        {/*style={{marginRight: 20}}*/}
                    {/*>Geolocationm组件</Text>*/}
                </View>

                <News news={[
                    '1、院表演系2004年参演电视剧《与青春有关的日子》，开始在影视圈崭露头角。2005年拍摄古装剧《锦衣卫》。2007年主',
                    '2、院表演系2004年参演电视剧《与青春有关的日子》，开始在影拍摄古装剧《锦衣卫》。2007年主',
                    '3、院表演系2004年参演电视剧《锦衣卫',
                ]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    }
})


const luyou = StackNavigator({
    HelloWorld:{screen:HelloWorld},
    Detail:{screen:Detail},
    Search:{screen:Search},
    Touchable:{screen:Touchable},
    ImageAss:{screen:ImageAss},
    Tab:{screen:Tab},
    WebViews:{screen:WebViews},
    Item:{screen:Item},
    Gouwu:{screen:Gouwu},
    Alertm:{screen:Alertm},
    NetInfom:{screen:NetInfom},
    Cameraroll:{screen:Cameraroll},
    // Geolocationm:{screen:Geolocationm},
},{
    mode:'card',
})

AppRegistry.registerComponent('myFirstProject', () => luyou);
















