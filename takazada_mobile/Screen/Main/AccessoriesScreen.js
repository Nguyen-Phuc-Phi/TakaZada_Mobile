import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

class AccessoriesScreen extends React.Component{
    // static navigationOptions=({navigation})=>({
    //     title: "TakaZada",
    //     headerLeft:
        

    // })
    static navigationOptions = ({ navigation }) => ({
        title: "Phụ kiện",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Feather name='menu' size={30} style={{ color: '#EEEEEE', marginLeft: 20 }} />
          </TouchableOpacity>
        ),
    })
    render(){
        return(
            <View style={styles.container}>
                <Text>Accessories Screen</Text>
            </View>
        );
    }
}
export default AccessoriesScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  