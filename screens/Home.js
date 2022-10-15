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
import CA1 from '../src/chuyenanh';
import XEGA from '../src/xega';
import XEMSO from '../src/xeso';
import PKL from '../src/pkl';
import VISION1 from '../src/vision1';


import { FontAwesome, Ionicons,Octicons,Fontisto,AntDesign,MaterialIcons  } from '@expo/vector-icons';
import EXCITER1 from "../src/exciter1";
import WINNER1 from "../src/winner1";
import CBR500R from "../src/cbr500r";


export default function HomeScreen({ navigation }) {
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
              // justifyContent:'space-between',

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
            
            <TouchableOpacity style={{
                    marginLeft:'4%',
                  }}>
                    <Octicons name="filter" size={18} color="white" />
            </TouchableOpacity>
          </View>        
        </View>
      </View>
      <View style={styles.box2}>
        <View style={{
          flex:1,
          backgroundColor:'violet',
          justifyContent: 'space-between',
          height:'100%',
          width:'100%',
          borderTopWidth:2,
        }}>
            <CA1></CA1>
        </View>
        <View style={{
          flex:0.6,
          backgroundColor:'#00CCFF',
          flexDirection:'row',
          justifyContent: 'space-between',
          borderTopWidth:2,
          borderBottomWidth:2,
        }}>
          <View>
            <TouchableOpacity>
              <View style={{
                borderWidth:1,
                width:33,
                height:33,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'#00CCFF',
                marginLeft:25,
                marginTop:8,
              }}>
                  <AntDesign name="appstore-o" size={23} color="black" />
              </View>
              <Text style={{
                fontSize:14,
                marginLeft:22,
                marginTop:5,
                fontWeight:'bold'
              }}>Tất cả</Text>
            </TouchableOpacity>
          </View> 
          <View>
            <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:33,
                height:33,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'#00CCFF',
                marginLeft:20,
                marginTop:8,
                borderColor:'black',
              }}>
                  <XEGA></XEGA>
              </View>
              <Text style={{
                fontSize:14,
                marginLeft:10,
                marginTop:5,
                fontWeight:'bold'
              }}>Xe tay ga</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:33,
                height:33,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'#00CCFF',
                marginLeft:10,
                marginTop:8,
                borderColor:'black',
              }}>
                  <XEMSO></XEMSO>
              </View>
              <Text style={{
                fontSize:14,
                marginLeft:10,
                marginTop:5,
                fontWeight:'bold'
              }}>Xe số</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:33,
                height:33,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'#00CCFF',
                marginLeft:15,
                marginRight:15,
                marginTop:8,
                borderColor:'black',
              }}>
                  <PKL></PKL>
              </View>
              <Text style={{
                fontSize:14,
                marginLeft:8,
                marginTop:5,
                fontWeight:'bold'
              }}>Xe PKL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          flex:3,
          backgroundColor:'#00CCFF',
        }}>
          <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginTop:30,
          }}>
            <View style={{
              marginLeft:'7%',
            }}>
              <VISION1></VISION1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Vision</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>45.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>42.990.000 Đ</Text>
            </View>
            <View style={{
              marginRight:'7%',
            }}>
              <EXCITER1></EXCITER1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Exciter</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>43.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>40.990.000 Đ</Text>
            </View>
          </View>
 
          <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
            <View style={{
              marginLeft:'7%',
            }}>
              <WINNER1></WINNER1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Winner</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>42.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>39.990.000 Đ</Text>
            </View>
            <View style={{
              marginRight:'7%',
            }}>
              <CBR500R></CBR500R>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe CBR500R 2022</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>192.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>190.990.000 Đ</Text>
            </View>
          </View>
          {/* <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
            <View style={{
              marginLeft:'7%',
            }}>
              <VISION1></VISION1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Vision</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>45.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>42.990.000 Đ</Text>
            </View>
            <View style={{
              marginRight:'7%',
            }}>
              <EXCITER1></EXCITER1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Exciter</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>43.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>40.990.000 Đ</Text>
            </View>
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginTop:10,
          }}>
            <View style={{
              marginLeft:'7%',
            }}>
              <VISION1></VISION1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Vision</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>45.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>42.990.000 Đ</Text>
            </View>
            <View style={{
              marginRight:'7%',
            }}>
              <EXCITER1></EXCITER1>
              <Text style={{textAlign:'center',color:'red',fontSize:17,}}>Xe Exciter</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'line-through',fontSize:10,marginTop:-4,}}>43.000.000 Đ</Text>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:13,}}>40.990.000 Đ</Text>
            </View>
          </View> */}
        </View>
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

