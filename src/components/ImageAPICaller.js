import {NativeModules} from 'react-native';

export default async () => {
  return NativeModules.ImageAPICaller.fetchImagesDataFromAPI();
};
