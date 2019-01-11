import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Carousel, { ParallaxImage, Pagination }  from 'react-native-snap-carousel';
import { SearchBar } from 'react-native-elements'



class HomeScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        title:'TakaZada',
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
          // <View style={{paddingRight:50}}>
          //    <SearchBar
          //         round
          //         searchIcon={{ size: 24 }}
          //         placeholder='Tìm kiếm sản phẩm' />
              
          // </View>
          <Feather name='shopping-cart' size={30} style={{ color: '#EEEEEE', marginRight: 20 }} />
        ),
    })

    constructor() {
        super()
        this.state = {
          entries_HP: [
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Ram/B%E1%BB%99%20nh%E1%BB%9B%20DDR3%20G.Skill%208GB%20(1600)%20F3-1600C11S-8GIS.jpg',title:'Bộ nhớ DDR3 G.Skill 8GB (1600) F3-1600C11S-8GIS'},
            { link: 'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/VGA/Card%20m%C3%A0n%20h%C3%ACnh%20Asus%204GB%20Strix-GTX1050TI-DC2O4G-Gaming.jpg',title:'Card màn hình Asus 4GB Strix-GTX1050TI-DC2O4G-Gaming'},
            { link: 'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Keyboard/B%C3%A0n%20ph%C3%ADm%20Logitech%20Gaming%20G213.png',title:'Bàn phím Logitech Gaming G213' },
            { link: 'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Mainboard/Bo%20m%E1%BA%A1ch%20ch%C3%ADnh%20Mainboard%20Asus%20Strix%20B350-F%20Gaming.jpg',title:'Bo mạch chính Mainboard Asus Strix B350-F Gaming' },
          ],
          activeSlide:0,
          entries_SD: [
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/deal1.png'},
            { link: 'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/deal2.png'},
            { link: 'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/deal3.jpg'},
          ],
          activeSlide1:0,
          entries_CP: [
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Computer/M%C3%A1y%20t%C3%ADnh%20x%C3%A1ch%20tay%20Laptop%20Dell%20Inspiron%2013%207373-C3TI501OW.jpg',title:'Máy tính xách tay Laptop Dell Inspiron 13 7373-C3TI501OW',prices:'26.190.000 VND'},
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Computer/M%C3%A1y%20t%C3%ADnh%20x%C3%A1ch%20tay%20Laptop%20MacBook%20MR9Q2.jpg',title:'Máy tính xách tay Laptop MacBook MR9Q2',prices:'46.990.000 VND'},
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Computer/M%C3%A1y%20t%C3%ADnh%20x%C3%A1ch%20tay%20Laptop%20Asus%20FX503VM-E4087T.jpg',title:'Máy tính xách tay Laptop Asus FX503VM-E4087T',prices:'25.990.000 VND'},
            { link:'https://raw.githubusercontent.com/LuongQuocKhang/TakaZada/master/TakaZada/Content/Pictures/Computer/M%C3%A1y%20t%C3%ADnh%20x%C3%A1ch%20tay%20Laptop%20Asus%20UX430UN-GV091T.jpg',title:'Máy tính xách tay Laptop Asus UX430UN-GV091T',prices:'29.490.000 VND'},           
          ],
          activeSlide2:0,
        }
      }
    _renderItem_HP ({item, index}) {
        return (
          <View style={{flex:1,flexDirection:'column',paddingLeft:5}}>
              <Image source={{uri:item.link}} 
                    style={{width: 200, height: 200}} />
              <Text style={{fontSize:14}}>{item.title}</Text>
          </View>
      );}
    _renderItem_SD ({item, index}) {
      return (
        <View style={{flex:1,flexDirection:'column',paddingLeft:15}}>
            <Image source={{uri:item.link}} 
                  style={{width: 330, height: 200,resizeMode:'stretch'}} />
            <Text style={{fontSize:14}}>{item.title}</Text>
        </View>
      );}
    _renderItem_CP ({item, index}) {
      return (
        <View style={{flex:1,flexDirection:'column',paddingLeft:5}}>
            <Image source={{uri:item.link}} 
                  style={{width: 200, height: 200}} />
            <Text style={{fontSize:14,width:210,textAlign: 'center'}}>{item.title}</Text>
            <Text style={{fontSize:14,width:210,fontSize: 15,fontWeight: 'bold',textAlign: 'center'}}>{item.prices}</Text>
        </View>
      );}
          
    get pagination () {
      return (
          <Pagination
            dotsLength={this.state.entries_SD.length}
            activeDotIndex={this.state.activeSlide1}
            containerStyle={{ paddingRight: 130 ,paddingTop:5}}
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
            <View >
                <SearchBar
                  lightTheme
                  searchIcon={{ size: 24 }}
                  placeholder='Tìm kiếm sản phẩm' />
                <ScrollView>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:30}}>Hot Product</Text>
                  </View>
                  <View style={{width:500,height:300,backgroundColor:'white'}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_HP}
                        renderItem={this._renderItem_HP}
                        hasParallaxImages={true}
                        sliderWidth={400}
                        sliderHeight={300}
                        itemWidth={250}
                    />
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:30}}>Special deals</Text>
                  </View>
                  <View style={{width:500,height:250,backgroundColor:'white',paddingTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_SD}
                        renderItem={this._renderItem_SD}
                        hasParallaxImages={true}
                        sliderWidth={350}
                        sliderHeight={250}
                        itemWidth={400}
                        onSnapToItem={(index) => this.setState({ activeSlide1: index }) }
                    />
                    { this.pagination }
                  </View>
                  <View style={styles._title}>
                    <Text style={{color:"#ffffff",fontSize:30}}>Computer</Text>
                  </View>
                  <View style={{width:500,height:350,backgroundColor:'white',alignItems:'stretch'}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries_CP}
                        renderItem={this._renderItem_CP}
                        hasParallaxImages={true}
                        sliderWidth={400}
                        sliderHeight={300}
                        itemWidth={220}
                    />
                  </View>
                </ScrollView>
            </View>
        );
    }
}
export default HomeScreen;
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
      borderRadius:150/2
    }
  });
  