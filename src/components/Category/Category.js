import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Circle from './Circle/Circle';

export default class Category extends Component { 

  render() {
    return (
      <TouchableOpacity 
        style={styles.touchContainer} 
        onPress={this.props.onItemPressed}
      >
        <View style={styles.addButton}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.tasks}>{this.props.tasks.toString()} tasks</Text>
          </View>
          <Circle 
            color={this.props.color} 
            size={this.props.size}
            thk={this.props.thk}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchContainer: {
    width: 130,
    height: 110,
    marginTop: 10
  },
  titleContainer: {
    flex: 1, 
    justifyContent: "flex-end", 
    padding: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "bold"
  },
  tasks: {
    fontSize: 17, 
    fontWeight: "100",
    color: "#b3b3b3"
  },
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
  iconStyle: {
    fontSize: 35,
    color: "#a0a0a0",
    marginRight: 12,
    marginTop: 4
  }
});