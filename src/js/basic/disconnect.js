import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../utils';

const disconnect = basic.querySelector('#basicDisconnect');
const disconnectButton = disconnect.querySelector('#basicDisconnectButton');
const disconnectResult = disconnect.querySelector('#basicDisconnectResult');

disconnectButton.addEventListener('click', async () => {
  await okxWeb3.disconnect();
  displayResult(disconnectResult, 'disconnected');
});
