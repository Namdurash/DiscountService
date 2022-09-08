module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@managers': './src/managers',
          '@screens': './src/screens',
          '@ui': './src/ui',
          '@store': './src/store',
          '@components': './src/components',
          '@api': './src/api',
        },
      },
    ],
  ],
};
