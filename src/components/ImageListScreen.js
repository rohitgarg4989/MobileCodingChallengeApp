import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ImagesList from './ImageList';
import ColumnDropdown from './ColumnDropdown';
import ActivityLoader from './ActivityLoader';

import {connect} from 'react-redux';
import {fetchImages, changeGridColumn} from '../actions';

class ImageListScreen extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.onMomentumScrollBegin = this.onMomentumScrollBegin.bind(this);
    this.onEndReachedCalledDuringMomentum = false;
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  onEndReached = () => {
    if (this.onEndReachedCalledDuringMomentum) {
      //this.props.fetchImages();
      this.onEndReachedCalledDuringMomentum = false;
    }
  };

  onMomentumScrollBegin = () => {
    this.onEndReachedCalledDuringMomentum = true;
  };

  onChangeText(text) {
    let count = text.toString();
    this.props.changeColumnCount(count);
  }

  render() {
    if (this.props.loading) {
      return <ActivityLoader />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Image Listing Page</Text>
        <ColumnDropdown
          numOfColumns={this.props.numOfColumns}
          onChangeText={this.onChangeText}
        />
        <ImagesList
          imagesList={this.props.imagesList}
          numOfColumns={this.props.numOfColumns}
          onEndReached={this.onEndReached}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 44 : 0,
  },
  header: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'green',
  },
});

const mapStateToProps = state => ({
  loading: state.imageListReducer.loading,
  imagesList: state.imageListReducer.imagesList,
  numOfColumns: state.gridColumnReducer.numOfColumns,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages()),
  changeColumnCount: count => dispatch(changeGridColumn(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageListScreen);
