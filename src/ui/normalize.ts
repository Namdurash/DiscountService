import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
  if (scale < 1) {
    return size;
  }
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
