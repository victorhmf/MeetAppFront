import React from 'react';

import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const MultipleCheckBox = ({ checkboxes, handleCheckBox }) => {
  const toggleCheckBox = (id) => {
    const changedCheckBoxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        checkbox.checked = !checkbox.checked;
      }
      return checkbox;
    });

    handleCheckBox(changedCheckBoxes);
  };

  return (
    <View>
      {checkboxes.map(checkbox => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          checkedIcon="square"
          uncheckedIcon="square"
          checkedColor="#E5556E"
          uncheckedColor="#666"
          textStyle={styles.text}
          containerStyle={styles.container}
          onPress={() => toggleCheckBox(checkbox.id)}
        />
      ))}
    </View>
  );
};

MultipleCheckBox.propTypes = {
  checkboxes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  handleCheckBox: PropTypes.func.isRequired,
};

export default MultipleCheckBox;
