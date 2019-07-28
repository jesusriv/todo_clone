import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export class AddNote extends Component {
  state = {
    title: '',
    color: 'k',
    circles: [],
    selected: false
  }

  categoryChangeHandler = val => {
    this.setState({
      title: val
    });
    this.onChangeTitle();
  }

  onChangeTitle = () => {
    this.props.changeTitle(this.state.title);
  }

  componentDidMount = () => {
    let colors = ["#ad2a2a", "#f2b244", "#ab8d59", "#c26e00", "#16719c", "#353a66"]
    colors.map((color, i) => {
      return this.setState(prevState => {
        return {
            circles: prevState.circles.concat({
              key: i,
              color: color,
              backgroundColor: "#fff"
            })
          }
        },
      )
    });
  }

  changeColor = (col, index) => {
    this.setState({color: col})
    if (this.state.selected) {
      let circles = [...this.state.circles];
      circles.map(c => {
        return c.backgroundColor = "#fff"
      });
      this.setState({circles});
      this.setState({selected: false})
    }
    

    let circles = [...this.state.circles];
    let circle = {...circles[index]};
    if (circle.backgroundColor == "#fff") {
      circle.backgroundColor = col;
      this.setState(prevState => {
        color: col;
      })
    } else {
      circle.backgroundColor = "#fff";
    }
    circles[index] = circle;
    this.setState({circles});
    this.setState({selected: true})
    this.props.changeColor(col);
  }

  render() {
    let circles = this.state.circles.map((c, i) => {
      return (
        <TouchableOpacity
          onPress={() => this.changeColor(c.color, i)}
          key={i}
          style={{width: 35, height: 35, borderRadius: "50%", borderColor: c.color, backgroundColor: c.backgroundColor, borderWidth: 8, marginRight: 19, marginTop: 10}}>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.categoryInput}
          placeholder="Category Name"
          value={this.state.title}
          onChangeText={this.categoryChangeHandler}
        />
        <View style={styles.circleContainer}>
          {circles}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //  flex: 1,
    width: "95%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 10
  },
  categoryInput: {
    marginTop: 54,
    width: "90%",
    height: 52,
    fontSize: 35,
    fontWeight: "bold"
  },
  categoryButton: {
    width: "30%"
  },
  circleContainer: {
    flexDirection: "row", 
    justifyContent: "space-between",
    width: "90%", 
    flexWrap: "wrap", 
    alignItems: "flex-start",
    marginTop: 65
  }
});

export default AddNote;