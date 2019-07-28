import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const createCategory = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.pressHandler}
      btn="ios-add"
      title="Create"
      style={{width: 130, height: 110, marginTop: 10}} 
    > 
      <View style={styles.addButton}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create</Text>
        </View>
        <View>
          <Icon 
            name="ios-add"
            style={styles.iconStyle}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default createCategory;

const styles = StyleSheet.create({
  addButton: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowOpacity: 0.75,
    shadowRadius: 8,
    shadowColor: '#d5d5d5',
    shadowOffset: { height: 0, width: 0 },
    marginTop: 10
  },
  title: {
    fontSize: 17, 
    fontWeight: "bold"
  },
  titleContainer: {
    flex: 1, 
    justifyContent: "flex-end", 
    padding: 10, 
    paddingBottom: 15, 
    paddingLeft: 15
  },
  iconStyle: {
    fontSize: 35,
    color: "#a0a0a0",
    marginRight: 19,
    marginTop: 10
  }
});