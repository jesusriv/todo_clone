import React from 'react';
import { View } from 'react-native';

const circle = (props) => {
  return (
    <View
      key={Math.random()}
      style={{width: props.size, height: props.size, borderRadius: "50%", borderColor: props.color, borderWidth: props.thk, marginRight: 19, marginTop: 10}}>
    </View>
  )
}

export default circle