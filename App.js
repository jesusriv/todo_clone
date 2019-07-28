import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home/Home';
import TodoView from './src/screens/TodoView/TodoView';
import AddTodo from './src/screens/AddTodo/AddTodo';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  TodoView: {screen: TodoView},
  AddTodo: {screen: AddTodo}
});

const App = createAppContainer(MainNavigator);

export default App;