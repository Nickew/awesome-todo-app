import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { TodoContext } from '../../modules/todoModule';

const TodoContainer = () => {
  const { data, removeTodoItem, completeTodoItem } = React.useContext(
    TodoContext,
  );
  const sortedData = data && data.sort((a, b) => a.completed - b.completed);
  return (
    <FlatList
      style={styles.flatList}
      data={sortedData}
      renderItem={({ item }) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          date={item.date}
          completed={item.completed}
          removeMethod={removeTodoItem}
          completeMethod={completeTodoItem}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
  },
});

export default TodoContainer;
