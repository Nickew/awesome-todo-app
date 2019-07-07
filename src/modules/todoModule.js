import React from 'react';
import { AsyncStorage } from 'react-native';

export const TodoContext = React.createContext({
  data: [],
  addTodoItem: item => {},
  removeTodoItem: id => {},
  completeTodoItem: id => {},
});

export class TodoProvider extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this._retrieveData();
  }
  componentWillUnmount() {
    this._storeData();
  }
  _storeData = async () => {
    const { data } = this.state;
    try {
      console.log(data);
      await AsyncStorage.setItem('TodoData', JSON.stringify(data));
    } catch (err) {
      console.error(err.message);
    }
  };
  _retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('TodoData');

      if (data !== null) {
        const parsedData = JSON.parse(data);
        this.setState({ data: parsedData });
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  addTodoItem = item => {
    this.setState(
      prevState => ({
        data: [...prevState.data, item],
      }),
      this._storeData,
    );
  };
  removeTodoItem = id => {
    const { data } = this.state;
    const filteredData =
      data.length === 1 ? [] : data.filter(item => item.id !== id);
    this.setState({ data: filteredData }, this._storeData);
  };
  completeTodoItem = id => {
    this.setState(({ data }) => {
      const newData = [...data];
      const itemIndex = newData.findIndex(obj => obj.id === id);
      newData[itemIndex].completed = true;
      return { data: newData };
    }, this._storeData);
  };
  render() {
    return (
      <TodoContext.Provider
        value={{
          data: this.state.data,
          addTodoItem: this.addTodoItem,
          removeTodoItem: this.removeTodoItem,
          completeTodoItem: this.completeTodoItem,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
