import { PUSHER_API_KEY, PUSHER_CLUSTER } from '@env';
import { assertIsDefined } from '../assertion/assertIsDefined';

console.log(process.env);

assertIsDefined(PUSHER_API_KEY, 'PUSHER_API_KEY');
assertIsDefined(PUSHER_CLUSTER, 'PUSHER_CLUSTER');

export default {
  PUSHER_API_KEY,
  PUSHER_CLUSTER,
};
