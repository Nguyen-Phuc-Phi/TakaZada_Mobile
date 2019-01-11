import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, AsyncStorage,Text } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems,createAppContainer} from 'react-navigation';
import HomeScreen from './Screen/Main/HomeScreen'
import AccessoriesScreen from './Screen/Main/AccessoriesScreen'
import AdvisoryScreen from './Screen/Main/AdvisoryScreen'
import ComponentScreen from './Screen/Main/ComponentScreen'
import ComputerScreen from './Screen/Main/ComputerScreen'
import ProblemScreen from './Screen/Main/ProblemScreen'
import InformationScreen from './Screen/Main/InformationScreen'
import LoginScreen from './Screen/Main/LoginScreen'
import DetailScreen from './Screen/Main/DetailScreen'
import FontAwesome from '@expo/vector-icons/FontAwesome';

class MainScreen extends React.Component{
    render(){
        const HomeNavigator = createStackNavigator(
            {
                Home: HomeScreen,
            },
            {
                initialRouteName: 'Home',
            }
        );
        const InforNavigator = createStackNavigator(
            {
                Info: InformationScreen,
            },
            {
                initialRouteName: 'Info',
            }
        );
        const AccessoriesNavigator = createStackNavigator(
            {
                Accessories: AccessoriesScreen,
            },
            {
                initialRouteName: 'Accessories',
            }
        );
        const AdvisoryNavigator = createStackNavigator(
            {
                Advisory: AdvisoryScreen,
            },
            {
                initialRouteName: 'Advisory',
            }
        );
        const ComponentNavigator = createStackNavigator(
            {
                Components: ComponentScreen,
            },
            {
                initialRouteName: 'Components',
            }
        );
        const ComputerNavigator = createStackNavigator(
            {
                Computer: ComputerScreen,
            },
            {
                initialRouteName: 'Computer',
            }
        );
        const ProblemNavigator = createStackNavigator(
            {
                Problem: ProblemScreen,
                Details: DetailScreen,
            },
            {
              initialRouteName: 'Problem',
              navigationOptions: () => ({
                  headerStyle: {
                      backgroundColor: '#FF198F',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 20,
                  },
              }),
            }
          );
        const LoginNavigator = createStackNavigator(
            {
                Login: LoginScreen,
            },
            {
                initialRouteName: 'Login',
            }
        );
        const CustomDrawerComponent = (props) => (
            <SafeAreaView style={{ flex: 1,paddingTop:40 }}>
                {/* <View style={styles.drawerH}>
                    <Image source={require('./Image/drawerImage.jpg')} />
                </View> */}
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{paddingLeft:10}}>
                    <Image source={{uri: 'http://icons.iconarchive.com/icons/icons8/ios7/512/Users-User-Male-2-icon.png'}}
                            style={{width: 50, height: 50}} />
                    </View>
                <Text style={{paddingRight:40}}>Nguyen Van A</Text>
                </View>
                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView>
        )
        const AppDrawerNavigation= createDrawerNavigator(
            {
                'Trang chủ':{
                    screen:HomeNavigator,
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='home' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Linh kiện':{
                    screen:ComponentNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='microchip' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Máy tính':{
                    screen:ComputerNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='laptop' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Phụ kiện':{
                    screen:AccessoriesNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='headphones' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Thông tin':{
                    screen:InforNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='info-circle' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Vấn đề máy tính':{
                    screen:ProblemNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='wrench' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
                'Tư vấn':{
                    screen:AdvisoryNavigator,  
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='question-circle' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                    contentOptions: {
                        activeTintColor: '#FF9B05'
                      }
                },
                'Đăng xuất':{ 
                    screen:LoginNavigator,
                    navigationOptions:()=>({
                        drawerIcon:({tintColor})=>(
                          <FontAwesome name='sign-out' size={20} style={{color:tintColor}}/>
                        ),
                    }),
                },
            },
            {
                drawerWidth:200,
                initialRouteName:'Trang chủ',
                contentComponent: CustomDrawerComponent,
                contentOptions:{
                    activeTintColor: '#FF9B05'
                },
            }
        )
        const App = createAppContainer(AppDrawerNavigation);
        return(
            <App/>
        );
    }
}

export default MainScreen;