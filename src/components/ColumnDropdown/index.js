import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const dropdownOptions = [{value: '2'}, {value: '3'}, {value: '4'}];

const ColumnDropdown = props => (
  <View style={styles.dropdownContainer}>
    <Dropdown
      data={dropdownOptions}
      value={props.numOfColumns}
      onChangeText={props.onChangeText}
      label="Change Column"
      labelFontSize={16}
      baseColor="grey"
    />
  </View>
);

const styles = StyleSheet.create({
  dropdownContainer: {
    margin: 8,
  },
});

export default ColumnDropdown;
