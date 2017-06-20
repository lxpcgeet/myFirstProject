/**
 * Created by Administrator on 2017/6/19.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    CameraRoll,
    Dimensions

} from 'react-native';

import Camera from 'react-native-camera';

const height = Dimensions.get('window').height;

//照片获取参数
let fetchParams = {
    first: 4,
    // groupTypes: 'All',
    assetType: 'Photos'
}

let imgURL = 'http://vczero.github.io/lvtu/img/';



//默认应用的容器组件
export default class Cameraroll extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            photos: null
        };
    }

    static navigationOptions = {
        title:'cameraroll 调用手机本地图片',
        //header:null
    }

    //页面的组件渲染完毕（render）之后执行
    componentDidMount() {
        let _that = this;
        //获取照片
        let promise = CameraRoll.getPhotos(fetchParams)
        promise.then(function(data){
            let edges = data.edges;
            let photos = [];
            for (let i in edges) {
                photos.push(edges[i].node.image.uri);
            }
            _that.setState({
                photos:photos
            });
        },function(err){
            alert('获取照片失败！');
        });
    }

    //saveImg函数
    saveImg = (img1,img2) => {
        let _that = this;
        // CameraRoll.saveImageWithTag(imgURL+img1,(url)=>{
        //
        //     console.log(url)
        //
        //     if( url ){
        //         let photos = _that.state.photos;
        //         photos.unshift(url);
        //         _that.setState({
        //             photos:photos,
        //         })
        //         CameraRoll.saveImageWithTag(imgURL+img2,(url)=>{
        //             photos.unshift(url);
        //             _that.setState({
        //                 photos:photos,
        //             })
        //             alert('保存图片成功')
        //         },()=>{
        //             alert('图片保存失败')
        //         })
        //     }
        //
        // },()=>{
        //     alert('保存图片失败')
        // })

        CameraRoll.saveImageWithTag('http://vczero.github.io/lvtu/img/3.jpeg')
            .then((success)=>{
                alert('成功')
            },(err)=>{
                alert(err)
            })



    }
    
    //相机函数
    takePicture = () => {
        const options = {};

        this.camera.capture({metadata:options})
            .then((data)=>{
                console.log(data);
                //拍照成功后系统会自动添加照片进入相册， 下面又手动调用方法 将这个相片再次加入相册，因此这个照片有两张
                CameraRoll.saveImageWithTag(data.path)
                    .then((success)=>{
                        //alert('成功')
                    },(err)=>{
                        alert(err)
                    })
            })
            .catch((err)=>console.log(err))
    }

    //渲染
    render() {

        let photos = this.state.photos || [];
        let photosView = [];
        for(let i = 0; i < 4 ; i += 2){
            photosView.push(
                <View key={i} style={styles.row}>
                    <View style={styles.flex}>
                        <Image resizeMode="stretch" style={styles.image} source={{uri:photos[i]}}/>
                    </View>
                    <View style={styles.flex}>
                        <Image resizeMode="stretch" style={styles.image} source={{uri:photos[i+1]}}/>
                    </View>
                </View>
            )
        }

        return (
            <ScrollView>
                {/*<View style={styles.row}>*/}

                    {/*<View style={styles.flex}>*/}
                        {/*<Image resizeMode="stretch" source={{uri:imgURL+"city.jpg"}} style={styles.image}/>*/}
                    {/*</View>*/}

                    {/*<View style={styles.flex}>*/}
                        {/*<Image resizeMode="stretch" source={{uri:imgURL+"3.jpeg"}} style={styles.image}/>*/}
                    {/*</View>*/}
                {/*</View>*/}
                {/*<View>*/}
                    {/*<Text*/}
                        {/*onPress={()=>{this.saveImg('city.jpg','3.jpeg')}}*/}
                        {/*style={styles.saveImg}*/}
                    {/*>保存图片到相册</Text>*/}
                {/*</View>*/}

                {/*<View style={styles.container}>*/}
                    {/*{photosView}*/}
                {/*</View>*/}

                <View style={styles.container}>
                    <Camera
                        ref={(cam)=>{
                            this.camera = cam;//把相机这个对象给映射出来
                        }}
                        aspect={Camera.constants.Aspect.stretch}//设置view，具体不懂
                        style={styles.preview}
                    >
                        <Text
                            onPress={()=>this.takePicture()}
                            style={styles.capture}
                        >[CAPTURE]</Text>
                    </Camera>
                </View>

            </ScrollView>
        );
    }

}

//样式定义
const styles = StyleSheet.create({
    // flex:{
    //     flex:1
    // },
    // container: {
    //     flex: 1,
    //     paddingTop: 30,
    //     alignItems:'center'
    // },
    // row:{
    //     flexDirection: 'row'
    // },
    // image:{
    //     height: 120,
    //     marginTop: 10,
    //     marginLeft: 5,
    //     marginRight: 5,
    //     borderWidth: 1,
    //     borderColor: '#ddd'
    // },
    // saveImg:{
    //     flex:1,
    //     height: 30,
    //     textAlign: 'center',
    //     marginTop: 20,
    //     backgroundColor: '#3bc1ff',
    //     color: '#fff',
    //     lineHeight: 20,
    //     borderRadius:5,
    //     marginLeft: 5,
    //     marginRight: 5,
    //     fontWeight: 'bold',
    // }


    //相机样式
    container:{
        flex:1,
        flexDirection: 'row',
    },
    preview:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    capture:{
        flex:0,
        backgroundColor:'#fff',
        borderRadius:5,
        color:'#000',
        padding:10,
        marginTop:200,
        marginBottom: 20,
        opacity: 0.3
    }
});

























































