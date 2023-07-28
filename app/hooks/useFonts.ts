
import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    MochiyPopOne: require('../assets/fonts/MochiyPopOne-Regular.ttf'),
  });

export default useFonts