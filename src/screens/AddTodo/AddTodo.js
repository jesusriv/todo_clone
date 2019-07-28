import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import IconBtn from '../../components/IconBtn/IconBtn';
import Circle from '../../components/Category/Circle/Circle'

export class AddTodo extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    todo: ''
  }

  toDoChangeHandelr = val => {
    this.setState({
      todo: val
    });
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation 
    const color = navigation.getParam('color');
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <IconBtn 
            name="ios-close"
            size={43}
            onItemPressed={() => navigation.goBack()}
          />
          <IconBtn 
            name="ios-checkmark"
            size={43}
            onItemPressed={() => {
              navigation.state.params.returnData(this.state.todo);
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.topContainer}>
          <View style={styles.circleContainer}>
            <Circle 
              color={color} 
              size={27}
              thk={6}
            />
          </View>
          <View style={styles.titleContainer}>
            <View>
              <TextInput 
                style={styles.title}
                placeholder="To Do"
                onChangeText={this.toDoChangeHandelr}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginTop: 52,
    alignItems: "flex-end"
  },
  top: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15
  },
  topContainer: {
    width: 340, 
    flexDirection: "row", 
    height: 91, 
    marginTop: 70
  },
  circleContainer: {
    width: "15%", 
    paddingLeft: 7, 
    justifyContent: "flex-start"
  },
  titleContainer: {
    width: "85%"
  },
  title: {
    fontSize: 36, 
    fontWeight: "bold", 
    marginTop: 4
  },
});