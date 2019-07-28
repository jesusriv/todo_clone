import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../../components/Category/Category';
import CreateCategory from '../../components/CreateCategory/CreateCategory';
import AddNoteModal from '../../components/AddNoteModal/AddNoteModal';
import Title from '../../components/Title/Title';


export default class App extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    categoryAdd: false,
    category: []
  }

  pressHandler = () => {
    this.setState({
      categoryAdd: true
    });
  }

  modalCloseHandler = () => {
    this.setState({
      categoryAdd: false
    });
  }

  addCategory = (categoryName, color) => {
    this.setState(prevState => {
      return {
        category: prevState.category.concat({
          title: categoryName,
          color: color,
          tasks: 0
        })
      }
    });
  }

  render() {
    const {navigate} = this.props.navigation
    const categories = this.state.category.map((c, i) => {
     return (
        <Category 
          key={i}
          onItemPressed={() => navigate('TodoView', {title: c.title, color: c.color, tasks: c.tasks})}
          color={c.color}
          title={c.title}
          tasks={c.tasks}
          size={20}
          thk={4}
        />
     )
    });
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <AddNoteModal 
          add={this.state.categoryAdd} 
          closeModal={this.modalCloseHandler}
          onAddedCategory={this.addCategory}
        />
        <Title />
        <View style={this.state.category.length >= 2 ? styles.contentContainer : styles.contentContain}>
          {categories}
          <CreateCategory 
            pressHandler={this.pressHandler} 
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 165,
  },
  contentContainer: {
    width: "100%", 
    justifyContent: "space-between", 
    height: 500,
    alignItems: "flex-start", 
    flexWrap: "wrap", 
    flexDirection: "row", 
    paddingLeft:80, 
    paddingRight: 20,
  },
  contentContain: {
    width: "100%", 
    justifyContent: "space-between", 
    height: 500,
    alignItems: "flex-start", 
    flexWrap: "wrap", 
    flexDirection: "row", 
    paddingLeft:80, 
    paddingRight: 20,
  },
});


