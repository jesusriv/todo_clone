import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';
import IconBtn from '../IconBtn/IconBtn';
import AddNote from './AddNote/AddNote';

export class Home extends Component {
  state = {
    title: '',
    color: '',
  }

  onChangeTitle = title => {
    this.setState({
      title: title
    });
  }

  onChangeColor = color => {
    this.setState({
      color: color
    });
  }

  categorySubmitHandler = () => {
    if (this.state.title.trim() === '' || this.state.color.trim() === '') {
      return;
    }
    
    this.props.onAddedCategory(this.state.title, this.state.color);
    this.setState({title: '', color: ''});
    this.props.closeModal();
  }
  
  render() {
    return (
      <Modal
        visible={this.props.add} 
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.top}>
            <IconBtn 
              onItemPressed={this.props.closeModal}
              name="ios-close"
              size={43}
            />
            {
              this.state.color ?
              <IconBtn 
                onItemPressed={this.categorySubmitHandler}
                name="ios-checkmark"
                size={43}
              /> :
              <IconBtn 
                onItemPressed={this.categorySubmitHandler}
                name="ios-checkmark"
                size={43}
                style={{opacity: 2}}
                disabled={true}
              />
            }
          </View>
          <AddNote 
            onAddedCategory={this.props.onAddedCategory}
            onItemPressed={this.props.closeModal}
            changeTitle={this.onChangeTitle.bind(this)}
            changeColor={this.onChangeColor.bind(this)}
          />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 52,
    alignItems: "flex-end"
  },
  top: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15
  }
});

export default Home;