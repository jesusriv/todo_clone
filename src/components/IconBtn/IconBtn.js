import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const close = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View>
      <Icon 
        name={props.name} 
        style={styles.iconStyle, {fontSize: props.size}}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 30,
    color: "#a0a0a0"
  }
});

export default close;