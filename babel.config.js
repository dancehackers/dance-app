module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'PUSHER_API_KEY',
        moduleName: '@env',
        path: '.env',
      },
      {
        envName: 'PUSHER_CLUSTER',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
