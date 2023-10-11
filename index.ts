import { Pusher, PusherEvent } from '@pusher/pusher-websocket-react-native';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import serverEnvs from './util/server/serverEnvs';

const init = async () => {
  const pusher = Pusher.getInstance();

  await pusher.init({
    apiKey: serverEnvs.PUSHER_API_KEY,
    cluster: 'us2',
  });

  await pusher.connect();
  await pusher.subscribe({
    channelName: 'my-channel',
    onEvent: (event: PusherEvent) => {
      console.log(`Event received: ${event}`);
    },
  });
};

init();

AppRegistry.registerComponent(appName, () => App);
