import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Button from '../../components/Button';
import { TodoContext } from '../../modules/todoModule';

const Header = () => {
  const { addTodoItem } = React.useContext(TodoContext);
  const [toggle, setToggle] = React.useState(false);
  const [title, setTitle] = React.useState('What else should I do?');
  const [description, setDescription] = React.useState('Maybe some details?');
  const onPress = () => setToggle(!toggle);
  const addNewTodo = () => {
    addTodoItem({
      id: Date.now(),
      title,
      description,
      date: Date.now(),
      completed: false,
    });
  };
  return (
    <View style={styles.container}>
      <Button onPress={onPress} styled={buttonStyles}>
        Add todo task
      </Button>
      {toggle ? (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={title => setTitle(title)}
            value={title}
          />
          <TextInput
            style={styles.input}
            onChangeText={description => setDescription(description)}
            value={description}
          />
          <Button onPress={addNewTodo}>Save to list</Button>
        </View>
      ) : null}
    </View>
  );
};

const buttonStyles = {
  backgroundColor: '#000',
  color: '#fff',
  height: 50,
  padding: 10,
  fontSize: 20,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  input: {
    marginTop: 20,
    height: 40,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 2,
  },
});

export default Header;
