import * as React from 'react';
import {
  Text as TextNative,
  TextStyle,
  TextProps as TextNativeProps,
} from 'react-native';
import {normalize} from '../normalize';

import {styles} from './styles';

enum FontWeight {
  Bold = 'Bold',
  BoldItalic = 'BoldItalic',
  SemiBold = 'SemiBold',
  Regular = 'Regular',
  Italic = 'Italic',
  Light = 'Light',
}

enum FontFamily {
  raleway = 'RalewayRegular',
  ptSans = 'PTSansRegular',
}

const fontWeights: Record<FontWeight, TextStyle['fontWeight']> = {
  [FontWeight.Bold]: '700',
  [FontWeight.BoldItalic]: '600',
  [FontWeight.SemiBold]: '500',
  [FontWeight.Regular]: '400',
  [FontWeight.Italic]: '400',
  [FontWeight.Light]: '300',
};

interface TextProps extends TextNativeProps {
  type: keyof typeof FontWeight;
  family: keyof typeof FontFamily;
  size: number;
  autoScaleFont?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  type = FontWeight.Regular,
  size = 18,
  family = FontFamily.ptSans,
  autoScaleFont = false,
  ...textProps
}) => {
  const finalFontSize = autoScaleFont ? normalize(size) : size;
  const textStyle = [
    styles.text,
    textProps.style,
    {
      fontSize: finalFontSize,
      fontFamily: `${family}-${type}`,
      fontWeight: fontWeights[type],
    },
  ];

  return (
    <TextNative {...textProps} style={textStyle} accessible>
      {children}
    </TextNative>
  );
};
