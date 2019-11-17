import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const height = Dimensions.get('window').height;

const ImagesList = props => (
  <FlatList
    data={props.imagesList}
    renderItem={renderRowItem}
    keyExtractor={keyExtractor}
    numColumns={props.numOfColumns}
    key={props.numOfColumns}
    onEndReached={props.onEndReached}
    onEndReachedThreshold={0.5}
    onMomentumScrollBegin={props.onMomentumScrollBegin}
  />
);

renderRowItem = itemData => {
  return (
    <View style={styles.gridView}>
      <FastImage
        style={styles.image}
        source={{uri: itemData.item.avatar}}
        resizeMode={FastImage.resizeMode.cover} // Scale the image uniformly (maintain the image's aspect ratio)
        cacheControl={FastImage.cacheControl.immutable} //- Only updates if url changes.
      />
    </View>
  );
};

keyExtractor = (item, index) => {
  return index.toString();
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 1,
  },
  image: {
    height: 120,
    width: '100%',
    backgroundColor: 'grey',
  },
});

export default ImagesList;
