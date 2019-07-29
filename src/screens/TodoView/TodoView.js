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
    key: this.props.navigation.getParam('key')
  }

  componentWillMount = () => {
    const { navigation } = this.props;
    const category = navigation.getParam('category');
    this.setState({category: category['c']});
  }

  returnData = todo => {
    let category = this.state.category;
    category.todos = [...category.todos, {todo}]
    category.tasks++;
    this.setState({category});
  }
  
  toggleComplete = (i) => {
    let category = this.state.category;
    let todo = category.todos[i];
    todo.completed = !todo.completed;
    category.todos[i] = todo;
    todo.completed ? category.tasks-- : category.tasks++
    this.setState({category});
  }

  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const todos = this.state.category['todos'].map((t, i) => {
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
            onPress={() => this.toggleComplete(i)}
          >
            {
              t.completed ? 
              <Icon 
                name="ios-checkmark"
                style={{fontSize: 38, marginTop: 5, color: '#e8e8e8'}}
              /> :
              <Icon
                name="ios-remove"
                style={{fontSize: 40, marginTop: 5}}
              />
            }
          </TouchableOpacity>
          {
            t.completed ?
            <Text key={i} style={{fontSize: 20, color: '#e8e8e8'}}>{t.todo}</Text>
            :
            <Text key={i} style={{fontSize: 20}}>{t.todo}</Text>
          }
          
        </View>
      );
    }); 
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <IconBtn 
            onItemPressed={() => {
                navigation.state.params.updateCategory(this.state.category, this.state.key);
                navigation.goBack();
              } 
            }
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
              color={this.state.category['color']} 
              size={27}
              thk={6}
            />
          </View>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>{this.state.category['title']}</Text>
            </View>
            <View>
              <Text style={styles.tasks}>{this.state.category['tasks']} tasks</Text>
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
          onPress={() => navigate("AddTodo", {color: this.state.category['color'], returnData: this.returnData.bind(this)})}
        >
          <View 
            style={{
              backgroundColor: this.state.category['color'], 
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