import okWeb3 from '@okwallet/extension';

import { displayResult } from '../utils';

const basic = document.querySelector('#basic');
const basicAddListener = basic.querySelector('#basicAddListener');

const basicAddListenerConnectResult = basicAddListener.querySelector('#basicAddListenerConnectResult');
const basicAddListenerDisconnectResult = basicAddListener.querySelector('#basicAddListenerDisconnectResult');
const basicAddListenerConnectWalletResult = basicAddListener.querySelector('#basicAddListenerConnectWalletResult');
const basicAddListenerWalletChangedResult = basicAddListener.querySelector('#basicAddListenerWalletChangedResult');
const basicAddListenerAccountChangedResult = basicAddListener.querySelector('#basicAddListenerAccountChangedResult');
const basicAddListenerNetworkChangedResult = basicAddListener.querySelector('#basicAddListenerNetworkChangedResult');
const basicAddListenerStreamFailedResult = basicAddListener.querySelector('#basicAddListenerStreamFailedResult');

okWeb3.addListener('connect', (isConnected) => {
  displayResult(basicAddListenerConnectResult, 'connect', isConnected)
});

okWeb3.addListener('disconnect', () => {
  displayResult(basicAddListenerDisconnectResult, 'disconnect')
});

okWeb3.addListener('connectWallet', (wallet) => {
  displayResult(basicAddListenerConnectWalletResult, 'connectWallet', wallet)
});

okWeb3.addListener('walletChanged', (wallet) => {
  displayResult(basicAddListenerWalletChangedResult, 'walletChanged', wallet)
});

okWeb3.addListener('accountChanged', (wallet) => {
  displayResult(basicAddListenerAccountChangedResult, 'accountChanged', wallet)
});

okWeb3.addListener('networkChanged', (chainId) => {
  displayResult(basicAddListenerNetworkChangedResult, 'networkChanged', chainId)

});

okWeb3.addListener('streamFailed', () => {
  displayResult(basicAddListenerStreamFailedResult, 'streamFailed')
});
