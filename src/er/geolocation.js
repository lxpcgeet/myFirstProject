/**
 * Created by Administrator on 2017/6/20.
 */

//基于位置的服务(LBS)  H5也有这个功能  geolocation (地理定位)


// import React,{Component} from 'react';
//
// import {
//     View,
//     Text,
//     StyleSheet,
// } from 'react-native'
//
// // console.log( navigator.geolocation )
// export default class Geolocationm extends Component {
//
//     static navigationOptions = {
//         title:'Geolocation地理位置组件'
//     }
//
//     vibration = () => {
//         navigator.geolocation.getCurrentPosition((data)=>{
//             alert(JSON.stringify(data))
//         })
//     }
//
//     render(){
//
//
//         return(
//             <View>
//                 <Text
//                     onPress={()=>this.vibration()}
//                     style={styles.btn}
//                 >获取位置</Text>
//             </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     btn:{
//         marginTop: 50,
//         marginLeft: 10,
//         marginRight: 10,
//         height: 35,
//         backgroundColor: '#3bc1ff',
//         color: '#fff',
//         lineHeight: 24,
//         fontWeight: 'bold',
//         textAlign:'center',
//     }
// })