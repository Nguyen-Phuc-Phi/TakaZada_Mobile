import React from 'react';
import { StyleSheet, Text,ImageBackground, View, Button, Image, TouchableOpacity,ScrollView,Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Carousel, { ParallaxImage, Pagination }  from 'react-native-snap-carousel';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import DetailScreen from './DetailScreen'


class ProblemScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        title: "Vấn đề máy tính",
        headerStyle: {
          backgroundColor: '#ff9b05',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Feather name='menu' size={30} style={{ color: '#EEEEEE', marginLeft: 20 }} />
          </TouchableOpacity>
        ),
        headerRight:(
          <Feather name='shopping-cart' size={30} style={{ color: '#EEEEEE', marginRight: 20 }} />
        ),
    })

    constructor() {
        super()
        this.state = {
          entries_HP: [
            { link: require('../../Pictures/News/cai-thien-hieu-suat-may-tinh.jpg'),title:'NÂNG CẤP NÀO SẼ CẢI THIỆN HIỆU SUẤT MÁY TÍNH CỦA BẠN NHIỀU NHẤT ?',id:1},
            { link: require('../../Pictures/News/slow-computer.jpg'),title:'VÌ SAO MÁY TÍNH CHẠY CHẬM ? CÁCH TĂNG TỐC CHO MÁY TÍNH',id:2},
            { link: require('../../Pictures/News/Huong-khac-phuc-tinh-trang-laptop-bi-nong.jpg'),title:'LÀM THẾ NÀO ĐỂ KHẮC PHỤC TÌNH TRẠNG LAPTOP BỊ NÓNG ',id:3},
            { link: require('../../Pictures/News/5-thanh-phan-de-hong-nhat-tren-PC.jpg'),title:'5 THÀNH PHẦN DỄ HỎNG NHẤT TRÊN PC',id:4},
            { link: require('../../Pictures/News/Cac-loi-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'CÁC LỖI THƯỜNG GẶP TRÊN MÁY TÍNH VÀ CÁCH KHẮC PHỤC - PHẦN 1',id:5},
          ],
          activeSlide:0,
          entries_HS: [
            { link: require('../../Pictures/News/cai-thien-hieu-suat-may-tinh.jpg'),title:'NÂNG CẤP NÀO SẼ CẢI THIỆN HIỆU SUẤT MÁY TÍNH CỦA BẠN NHIỀU NHẤT ?'},
            { link: require('../../Pictures/News/nguyen_nhan_may_tinh_cham.jpg'),title:'NẾU LAPTOP CỦA BẠN CHẠY QUÁ CHẬM THÌ ĐÂY LÀ CÁCH KHẮC PHỤC HIỆU QUẢ'},
            { link: require('../../Pictures/News/May-tinh-bi-cham.jpg'),title:'MÁY TÍNH NGÀY CÀNG CHẠY CHẬM, NGUYÊN NHÂN VÀ CÁCH KHẮC PHỤC'},
            { link: require('../../Pictures/News/slow-computer.jpg'),title:'VÌ SAO MÁY TÍNH CHẠY CHẬM ? CÁCH TĂNG TỐC CHO MÁY TÍNH'},
            { link: require('../../Pictures/News/khac-phuc-may-tinh-chay-cham.jpg'),title:'CÁCH KHẮC PHỤC MÁY TÍNH CHẠY CHẬM'},
            { link: require('../../Pictures/News/may-tinh-cham.jpg'),title:'MÁY TÍNH BỊ CHẬM TREO MÁY? NGUYÊN NHÂN VÀ CÁCH KHẮC PHỤC'},
          ],
          activeSlide1:0,
          entries_MTBN: [
            { link:require('../../Pictures/News/781923.jpg'),title:'LÀM GÌ KHI MÁY TÍNH QUÁ NÓNG?'},
            { link:require('../../Pictures/News/xu-ly-khi-laptop-bi-nong.jpg'),title:'LAPTOP BỊ NÓNG, NGUYÊN NHÂN VÀ CÁCH XỬ LÝ'},
            { link:require('../../Pictures/News/Huong-khac-phuc-tinh-trang-laptop-bi-nong.jpg'),title:'LÀM THẾ NÀO ĐỂ KHẮC PHỤC TÌNH TRẠNG LAPTOP BỊ NÓNG'},
            { link:require('../../Pictures/News/hinh1_01ee9.jpg'),title:'KINH NGHIỆM XỬ LÝ LAPTOP BỊ NÓNG'},
            { link:require('../../Pictures/News/khac-phuc-may-tinh-nong.jpg'),title:'NGUYÊN NHÂN VÀ GIẢI PHÁP HẠ NHIỆT CHO PC? - PHẦN CUỐI'},
            { link:require('../../Pictures/News/cach-xu-ly-khi-may-nong.jpg'),title:'LÀM GÌ KHI LAPTOP BỊ NÓNG RỰC, TỰ ĐỘNG TẮT MÁY'},
          ],
          activeSlide2:0,
          entries_LKKHD: [
            { link:require('../../Pictures/News/linh_kien_ben_trong_may_tinh.png'),title:'LINH KIỆN BÊN TRONG MÁY TÍNH BÀN VÀ CÁC LỖI HAY GẶP - PHẦN 1'},
            { link:require('../../Pictures/News/5-thanh-phan-de-hong-nhat-tren-PC.jpg'),title:'5 THÀNH PHẦN DỄ HỎNG NHẤT TRÊN PC'},
            { link:require('../../Pictures/News/tong-hop-cac-loi-phan-cung-pc-thuong-gap.png'),title:'HƯỚNG DẪN PHÁN ĐOÁN BỆNH PHẦN CỨNG SỬA MAINBOARD - MÀN HÌNH -LAPTOP'},
            { link:require('../../Pictures/News/3-nguyen-nhan-pho-bien-gay-hong-mainboard-PC.jpg'),title:'3 NGUYÊN NHÂN PHỔ BIẾN GÂY HỎNG MAINBOARD PC'},
            { link:require('../../Pictures/News/7-tac-nhan-gay-hai-cho-phan-cung-may-tinh-co-the-ban-chua-biet.jpg'),title:'7 TÁC NHÂN GÂY HẠI CHO PHẦN CỨNG MÁY TÍNH CÓ THỂ BẠN CHƯA BIẾT'},
            { link:require('../../Pictures/News/nhung-su-co-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'TỔNG HỢP CÁC LỖI PHẦN CỨNG PC THƯỜNG GẶP'},
          ],
          activeSlide3:0,
          entries_VDK: [
            { link:require('../../Pictures/News/loi-may-tinh-thuong-gap.png'),title:'CÁC LỖI PHẦN CỨNG MÁY TÍNH THƯỜNG GẶP - HIỆN TƯỢNG VÀ CÁCH KHẮC PHỤC'},
            { link:require('../../Pictures/News/loi-may-tinh-va-cach-khac-phuc.jpg'),title:'10 LỖI MÁY TÍNH THƯỜNG GẶP VÀ CÁCH KHẮC PHỤC'},
            { link:require('../../Pictures/News/nhung-su-co-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'NHỮNG SỰ CỐ THƯỜNG GẶP TRÊN MÁY TÍNH VÀ CÁCH KHẮC PHỤC'},
            { link:require('../../Pictures/News/Cac-loi-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'KHẮC PHỤC MỘT SỐ LỖI MÁY TÍNH THƯỜNG GẶP - PHẦN 2'},
            { link:require('../../Pictures/News/Cac-loi-thuong-gap-tren-may-tinh-va-cach-khac-phuc.jpg'),title:'KHẮC PHỤC MỘT SỐ LỖI MÁY TÍNH THƯỜNG GẶP - PHẦN 3'},
            { link:require('../../Pictures/News/tu-sua-mot-so-loi-thong-dung-cua-laptop-PC.jpg'),title:'TỰ SỬA MỘT SỐ LỖI THÔNG DỤNG PC, LAPTOP'},
          ],
          activeSlide4:0,
        }
        this._renderItem_HP = this._renderItem_HP.bind(this);
        // this._onPress = this._onPress.bind(this);
        
      }
     
    // _onPress= (index) => {
    //   this.props.navigation.navigate('Details',{
    //     id: index,
    //   })
    // }

    _renderItem_HP ({item, index}) {
      // this._onPress = this._onPress.bind(this);
        return (
          <View style={{flex:1,flexDirection:'column',paddingRight:5}}>
              <TouchableOpacity onPress={()=>{
                   this.props.navigation.navigate('Details',{
                    id: item.id,
                  })
              }}>
                <ImageBackground source={item.link} style={{width: 400, height: 300}}>
                  <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                    <Text style={{paddingLeft:5,color:'white',fontWeight:'bold',backgroundColor:'black'}}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
          </View>
      );}
    _renderItem_HS ({item, index}) {
      return (
        <View style={{flex:1,flexDirection:'column'}}>
              <ImageBackground source={item.link} style={{width: 280, height: 300}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Text style={{paddingLeft:5,color:'white',fontWeight:'bold',backgroundColor:'black'}}>{item.title}</Text>
                </View>
              </ImageBackground>
        </View>
      );}
    _renderItem_MTBN ({item, index}) {
      return (
        <View style={{flex:1,flexDirection:'column'}}>
              <ImageBackground source={item.link} style={{width: 280, height: 300}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Text style={{paddingLeft:5,color:'white',fontWeight:'bold',backgroundColor:'black'}}>{item.title}</Text>
                </View>
              </ImageBackground>
        </View>
      );}
    _renderItem_LKKHD ({item, index}) {
        return (
          <View style={{flex:1,flexDirection:'column'}}>
              <ImageBackground source={item.link} style={{width: 280, height: 300}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Text style={{paddingLeft:5,color:'white',fontWeight:'bold',backgroundColor:'black'}}>{item.title}</Text>
                </View>
              </ImageBackground>
          </View>
        );}
    _renderItem_VDK  ({item, index}) {
        return (
          <View style={{flex:1,flexDirection:'column'}}>
            <ImageBackground source={item.link} style={{width: 280, height: 300}}>
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                <Text style={{paddingLeft:5,color:'white',fontWeight:'bold',backgroundColor:'black'}}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
        );}
          
    get pagination () {
      return (
          <Pagination
            dotsLength={this.state.entries_HP.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ paddingRight: 120 ,paddingTop:5}}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: '#ff9b05',
                alignSelf:'center'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      );
  }
    render(){
        return(
            <View style={styles.container}>
                  <ScrollView>
                  <View style={{width:450,height:380,backgroundColor:'white',paddingTop:15}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_HP}
                        renderItem={this._renderItem_HP}
                        hasParallaxImages={true}
                        sliderWidth={370}
                        sliderHeight={300}
                        itemWidth={370}
                        loop={true}
                        autoplay={true}
                        autoplayDelay={500}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        // onLayout={this._onPress}
                    />
                       { this.pagination } 
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:20}}>Hiệu suất</Text>
                  </View>
                  <View style={{width:400,height:320,backgroundColor:'white',paddingTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_HS}
                        renderItem={this._renderItem_HS}
                        hasParallaxImages={true}
                        sliderWidth={360}
                        // useScrollView={true}
                        sliderHeight={500}
                        itemWidth={280}
                    />
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:20}}>Máy tính bị nóng</Text>
                  </View>
                  <View style={{width:400,height:320,backgroundColor:'white',paddingTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_MTBN}
                        renderItem={this._renderItem_MTBN}
                        hasParallaxImages={true}
                        sliderWidth={360}
                        // useScrollView={true}
                        sliderHeight={500}
                        itemWidth={280}
                    />
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:20}}>Linh kiện không hoạt động</Text>
                  </View>
                  <View style={{width:400,height:320,backgroundColor:'white',paddingTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_LKKHD}
                        renderItem={this._renderItem_LKKHD}
                        hasParallaxImages={true}
                        sliderWidth={360}
                        // useScrollView={true}
                        sliderHeight={500}
                        itemWidth={280}
                    />
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:20}}>Vấn đề khác</Text>
                  </View>
                  <View style={{width:400,height:320,backgroundColor:'white',paddingTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_VDK}
                        renderItem={this._renderItem_VDK}
                        hasParallaxImages={true}
                        sliderWidth={360}
                        // useScrollView={true}
                        sliderHeight={500}
                        itemWidth={280}
                    />
                  </View>
                </ScrollView>
            </View>
        );
    }
}
export default ProblemScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  _title:{
    backgroundColor:"#212121",
    alignItems:'center',
    borderRadius:150/2,
    width:360
  }
});
  