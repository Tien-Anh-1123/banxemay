import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
} from 'react-native';


import { FontAwesome, Ionicons,Octicons,Fontisto,AntDesign,MaterialIcons  } from '@expo/vector-icons';

export default function CuaHangScreen({ navigation }) {
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
          <View style={{
            marginLeft: '4%',
            marginTop: '5%',
            marginRight:'4%',
          }}>
          <View style={{
            flexDirection:'row',
            marginTop:'7%',

            }}>
              <TouchableOpacity style={{
                    marginLeft:'2%',
                  }}>
                    <FontAwesome name="map-marker" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity >
                <View>
                  <Text style={{
                      marginLeft:5,
                      fontSize:17,
                      color:'white',
                      fontWeight:'bold',
                    }}>Việt Nam</Text>
                </View>
              </TouchableOpacity>
              <Text style={{
              marginLeft:'13%',
              fontSize:20,
              color:'white',
              fontWeight:'bold',
              }}>T.A MoTo</Text>
                  <TouchableOpacity style={{
                    marginLeft:'15%',
                  }}>
                    <FontAwesome name="comment" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    marginLeft:'4%',
                  }}>
                    <Ionicons name="ios-notifications" size={24} color="white" />
                  </TouchableOpacity>
            </View>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              marginTop:'4%',
            }}>
              
              <TouchableOpacity style={{
                    flexDirection:'row', borderWidth:1, borderColor:'white', padding:5,backgroundColor:'#0099FF',borderRadius:20,
                    marginLeft:'1%',
                    paddingLeft:'20%',
                    paddingRight:'20%',
                  }}>
                    <Octicons name="search" size={18} color="white" />
              <Text style={{
                color:'white',
                marginLeft:5,
              }}>Nhập từ khóa tìm kiếm</Text>
            </TouchableOpacity>
          </View>        
        </View>
      </View>
      <View style={styles.box2}>
        
      </View>
      <View style={styles.box3}>
        <View style={{
          flexDirection:'row',
          paddingTop:2,
          justifyContent: 'space-between',
          marginRight:2,
          marginLeft:10,
        }}>
        <TouchableOpacity style={{
          
        }}>
          <FontAwesome name="home" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-10,
              color:'#00CCCC',
          }}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingTop:5,
        }}>
          <Fontisto name="shopping-store" size={32} color="#00CCCC" />
          <Text style={{
            paddingTop:3,
              marginLeft:-13,
              color:'#00CCCC',
            }}>Cửa hàng</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <MaterialIcons name="add-box" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-4,
              color:'#00CCCC',
            }}>Đăng tin</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <MaterialIcons name="library-books" size={40} color="#00CCCC" />
          <Text style={{
            marginLeft:8,
            color:'#00CCCC',
            }}>Blog</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <FontAwesome name="user" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-18,
              color:'#00CCCC',
            }}>Tài khoản</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#00CCFF',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  box1: {
    flex: 1.2,
    backgroundColor: '#00CCFF',
  },
  box2: {
    flex: 4.8,
    backgroundColor: '#00CCFF',
  },

  
  box3: {
    flex: 0.55,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderTopWidth:2,
    borderWidth:2,
  },
});

