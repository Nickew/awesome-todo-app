/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';

type TodoItemProps = $ReadOnly<{|
  date?: ?number,
  description?: ?string,
  title: ?string,
|}>;

class TodoItem extends React.Component<TodoItemProps> {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({ active: !this.state.active });
  }
  render() {
    const { date, description, title } = this.props;
    const { active } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        touchSoundDisabled={true}
      >
        <View style={styles.todo}>
          <View style={styles.todoContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text>{date}</Text>
          </View>
          {active ? (
            <View style={styles.todoControls}>
              <View style={styles.todoControlsItem}>
                <Button styled={removeButtonStyles}>Remove</Button>
              </View>
              <View style={styles.todoControlsItem}>
                <Button styled={completeButtonStyles}>Complete</Button>
              </View>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const removeButtonStyles = {
  backgroundColor: 'red',
  color: '#fff',
  width: 100,
  borderBottomLeftRadius: 3,
};
const completeButtonStyles = {
  backgroundColor: 'green',
  color: '#fff',
  width: 100,
  borderBottomRightRadius: 3,
};

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 3,
    marginBottom: 15,
  },
  todoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
  },
  description: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  todoControls: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  todoControlsItem: {
    width: '50%',
  },
  todoActive: {},
});

export default TodoItem;
