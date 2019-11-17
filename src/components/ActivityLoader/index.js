import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const ActivityLoader = ({heading, content}) => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.heading]}>{heading}</Text>
    <Text style={[styles.text, styles.offset]}>{content}</Text>
  </View>
);

ActivityLoader.defaultProps = {
  heading: 'Loading...',
  content: 'Please wait',
};

ActivityLoader.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  text: {
    color: '#061a40',
    fontSize: 18,
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  offset: {
    marginTop: 20,
  },
});

export default ActivityLoader;
