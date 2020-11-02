import { NativeModules } from 'react-native';

const { RNMisnap } = NativeModules;

export default {
  greet():Promise<string> {
    return RNMisnap.greet();
  },

  capture(config: any) {
    return RNMisnap.capture(config);
  },
};
