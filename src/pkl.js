import React from 'react';
import {Image} from 'react-native'


export default function PKL() {
    return (
      <Image source={require("../img/pkl.png")  } style={{width: '100%', height: '90%', borderWidth:1,borderRadius:50,borderColor:'#00CCFF', }}></Image>  
    );
  }