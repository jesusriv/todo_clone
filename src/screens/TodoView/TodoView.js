import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import IconBtn from '../../components/IconBtn/IconBtn';
import Circle from '../../components/Category/Circle/Circle'
import Icon from 'react-native-vector-icons/Ionicons';

export class TodoView extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    todo: []
  }

  returnData = todo => {
    this.setState(prevState => {
      return {
        todo: prevState.todo.concat({
          todo: todo,
          completed: false
        })
      }
    });
  }

  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const tasks = navigation.getParam('tasks');
    const color = navigation.getParam('color');
    const todos = this.state.todo.map((t, i) => {
      return (
        <View
          key={i} 
          style={{
              borderColor: "#e8e8e8", 
              borderBottomWidth: 1, 
              padding: 0, 
              flexDirection: "row", 
              alignItems: 'center'
            }}>
          <TouchableOpacity 
            style={{width: 60, alignItems: 'center', justifyContent: 'center'}} 
            onPress={() => { 
                t.completed = !t.completed
              }}
          >
            {
              t.completed ? 
              <Icon 
                name="ios-checkmark"
                style={{fontSize: 38, marginTop: 5}}
              /> :
              <Icon
                name="ios-remove"
                style={{fontSize: 40, marginTop: 5}}
              />
            }
          </TouchableOpacity>
          <Text key={i} style={{fontSize: 20}}>{t.todo}</Text>
        </View>
      );
    }); 
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <IconBtn 
            onItemPressed={() => navigation.goBack()}
            name="ios-arrow-round-back"
            size={28}
          />
          <IconBtn 
            name="ios-cog"
            size={22}
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
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              <Text style={styles.tasks}>{tasks} tasks</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.bottomContainer}> 
          {todos}
        </ScrollView>
        <TouchableOpacity 
          title=""
          style={
            styles.addButton,
            {
              position: "absolute",
              height: 80,
              width: 50,
              marginLeft: 325,
              marginTop: 640
            }
          }
          onPress={() => navigate("AddTodo", {color, returnData: this.returnData.bind(this)})}
        >
          <View 
            style={{
              backgroundColor: color, 
              width: "100%", 
              height: "100%",
              borderBottomLeftRadius: 8,
              borderTopLeftRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Icon
              name="ios-add"
              style={{fontSize: 35, fontWeight: "bold", color: "#fff", marginLeft: 7}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

export default TodoView;

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
  tasks: {
    marginTop: 6, 
    fontSize: 16, 
    color: "#b3b3b3"
  }, 
  bottomContainer: {
    borderColor: "#e8e8e8", 
    borderTopWidth: 1, 
    width: "100%", 
    height: "72%",
  },
  addButton: {
    width: 50,
    height: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});