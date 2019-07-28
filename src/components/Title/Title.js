import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To Do!</Text>
    </View>
  );
}


export default title;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 80
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
  }
});