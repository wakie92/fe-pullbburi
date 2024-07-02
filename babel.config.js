module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
    'babel-plugin-styled-components',
  ],
};
