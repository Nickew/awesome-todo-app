/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import { convertDate, convertTime } from '../../utils/convertUnixToDate';

type TodoItemProps = $ReadOnly<{|
  date?: ?number,
  description?: ?string,
  title: ?string,
  id: number,
  completed: boolean,
  removeMethod: id => mixed,
  completeMethod: id => mixed,
|}>;

class TodoItem extends React.Component<TodoItemProps> {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive() {
    this.setState({ active: !this.state.active });
  }
  setCompleted = () => {
    this.props.completeMethod(this.props.id);
    this.toggleActive();
  };
  render() {
    const {
      id,
      completed,
      date,
      description,
      title,
      removeMethod,
      completeMethod,
    } = this.props;
    const { active } = this.state;
    const TodoStyles = [styles.todo];
    if (completed) {
      TodoStyles.push(styles.todoCompleted);
    }
    const convertedDate = convertDate(date);
    const convertedTime = convertTime(date);
    return (
      <TouchableWithoutFeedback
        onPress={this.toggleActive}
        touchSoundDisabled={true}
      >
        <View style={TodoStyles}>
          {completed ? (
            <View style={styles.todoCompletedCrossline} />
          ) : null}
          <View style={styles.todoContainer}>
            <Text style={styles.title}>{title}</Text>
            {active ? (
              <Text style={styles.description}>{description}</Text>
            ) : null}
            <Text>
              {convertedDate} - {convertedTime}
            </Text>
          </View>
          {active ? (
            <View style={styles.todoControls}>
              <View style={styles.todoControlsItem}>
                <Button
                  onPress={() => removeMethod(id)}
                  styled={removeButtonStyles}
                >
                  Remove
                </Button>
              </View>
              <View style={styles.todoControlsItem}>
                <Button
                  onPress={this.setCompleted}
                  styled={completeButtonStyles}
                >
                  Complete
                </Button>
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
  todoCompleted: {
    opacity: 0.5,
  },
  todoCompletedCrossline: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    left: 0,
    top: 27,
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
