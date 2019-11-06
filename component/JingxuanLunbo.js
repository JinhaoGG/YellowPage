import React from 'react';
import { Button, Text, View,StyleSheet,Image } from 'react-native'; 
import Swiper from "react-native-swiper";

export default class lunbotu extends React.Component {
  render(){ 
    return( 
        <Swiper
            style={styles.swiper}          //样式
            height={100}                   //组件高度
            loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={true}                //自动轮播
            autoplayTimeout={4}                //每隔4秒切换
            horizontal={true}              //水平方向，为false可设置为竖直方向
            paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
            showsButtons={false}           //为false时不显示控制按钮
            showsPagination={true}       //为false不显示下方圆点
            dot={<View style={{           //未选中的圆点样式
            backgroundColor: 'rgba(0,0,0,.2)',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 10,
            marginRight: 9,
            marginTop: 9,
            marginBottom: 9,
        }}/>}
            activeDot={<View style={{    //选中的圆点样式
            backgroundColor: '#FBCB54',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 10, 
            marginRight: 9,
            marginTop: 9,
            marginBottom: 9,
        }}/>}

        >
            <Image source={require('../Image/timesquare.jpg')} style={styles.img}/>
            <Image source={require('../Image/timesquare.jpg')} style={styles.img}/>
            <Image source={require('../Image/timesquare.jpg')} style={styles.img}/>
        </Swiper>
    )  
    
  }
} 
const styles = StyleSheet.create({
    swiper: {
    //   marginVertical:20
    },
    img: {
        width:"100%",
        height: 100,
        borderRadius:5, 
    }
})