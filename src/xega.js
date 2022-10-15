import React from 'react';
import {Image} from 'react-native'


export default function XEGA() {
    return (
      <Image source={require("../img/xega.png")  } style={{width: '100%', height: '90%', borderWidth:1,borderRadius:50,borderColor:'#00CCFF', }}></Image>  
    );
  }