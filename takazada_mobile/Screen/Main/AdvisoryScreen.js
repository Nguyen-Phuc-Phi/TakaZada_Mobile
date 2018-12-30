import React from 'react';
import { StyleSheet, Text,ScrollView, View, Button,Alert, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props_question1 = [
    {label: 'Dưới 1 năm', value: 0 },
    {label: 'Từ 1 đến 3 năm', value: 0 },
    {label: 'Từ 3 đến 5 năm', value: 0 },
    {label: 'Trên 5 năm', value: 0 },
  ];
  var radio_props_question2 = [
    {label: 'Dưới 2 giờ', value: 0 },
    {label: 'Từ 2 giờ đến 4 giờ', value: 0 },
    {label: 'Từ 4 giờ đến 6 giờ', value: 0 },
    {label: 'Từ 6 giờ đến 8 giờ', value: 0 },
    {label: 'Trên 8 giờ', value: 0 },
  ];
  var radio_props_question3 = [
    {label: 'Học tập', value: 0 },
    {label: 'Giải trí', value: 1 },
    {label: 'Công việc', value: 0 },
  ];
  var radio_props_question4 = [
    {label: 'Hơi lag khi sử dụng dù ứng dụng nhẹ', value: 0 },
    {label: 'Lag khi chơi game', value: 1 },
    {label: 'Máy quá nóng', value: 0 },
    {label: 'Ổ cứng hết dung lượng', value: 0 },
    {label: 'Máy khởi động chậm', value: 0 },
  ];
  var radio_props_question5 = [
    {label: 'Tốc độ', value: 0 },
    {label: 'Dung lượng ổ đĩa', value: 1 },
    {label: 'Nhiệt độ', value: 0 },
  ];

class AdvisoryScreen extends React.Component{
    // static navigationOptions=({navigation})=>({
    //     title: "TakaZada",
    //     headerLeft:
        

    // })
    static navigationOptions = ({ navigation }) => ({
        title: "Tư vấn",
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

  

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Tìm hiểu về nhu cầu máy tính và laptop</Text>
                    <Text style={{fontSize:12,marginLeft:10}}>Đây là 1 vài câu hỏi liên quan đến những vấn đề khi bạn muốn nâng cấp máy tính hoặc mua linh kiện máy mới..</Text>
                    <View style={{borderColor:'black',borderWidth:3,width:350,height:700}}>
                        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>1) Bạn đã sử dụng chiếc máy tính đó bao lâu ?</Text>
                        <View style={{marginLeft:5}}>
                          <RadioForm
                                      radio_props={radio_props_question1}
                                      initial={0}
                                      onPress={(value) => {this.setState({value:value})}}
                                      buttonColor={'#212121'}
                                      buttonSize={10}
                                      />
                        </View>
                        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>2) Khoảng thời gian sử dụng máy tính trong ngày ?</Text>
                        <View style={{marginLeft:5}}>
                          <RadioForm
                                      radio_props={radio_props_question2}
                                      initial={0}
                                      onPress={(value) => {this.setState({value:value})}}
                                      buttonColor={'#212121'}
                                      buttonSize={10}
                                      />
                        </View>
                        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>3) Mục đích sử dụng</Text>
                        <View style={{marginLeft:5}}>
                          <RadioForm
                                      radio_props={radio_props_question3}
                                      initial={0}
                                      onPress={(value) => {this.setState({value:value})}}
                                      buttonColor={'#212121'}
                                      buttonSize={10}
                                      />
                        </View>
                        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>4) Hiện nay bạn cảm thấy máy mình thế nào?</Text>
                        <View style={{marginLeft:5}}>
                          <RadioForm
                                      radio_props={radio_props_question4}
                                      initial={0}
                                      onPress={(value) => {this.setState({value:value})}}
                                      buttonColor={'#212121'}
                                      buttonSize={10}
                                      />
                        </View>
                        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>5) Bạn muốn cải thiện phần nào ở máy mình hiện tại</Text>
                        <View style={{marginLeft:5}}>
                          <RadioForm
                                      radio_props={radio_props_question5}
                                      initial={0}
                                      onPress={(value) => {this.setState({value:value})}}
                                      buttonColor={'#212121'}
                                      buttonSize={10}
                                      />
                        </View>
                        <Button onPress={() => {
                                Alert.alert('Submit thành công!');
                                }} 
                            title="Submit">
                        </Button>
                       
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default AdvisoryScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  