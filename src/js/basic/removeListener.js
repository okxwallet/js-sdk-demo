import okWeb3 from '@okwallet/extension';

import { displayResult } from '../utils';

const basic = document.querySelector('#basic');
const basicRemoveListener = basic.querySelector('#basicRemoveListener');
const basicRemoveListenerButton = basicRemoveListener.querySelector(
  '#basicRemoveListenerButton',
);
const basicRemoveListenerResult = basicRemoveListener.querySelector(
  '#basicRemoveListenerResult',
);

const changedCb = (wallet) => {
  displayResult(basicRemoveListenerResult, 'walletChanged', wallet)
};
// add
okWeb3.addListener('walletChanged', changedCb);

basicRemoveListenerButton.addEventListener('click', () => {
  // remove
  okWeb3.removeListener('walletChanged', changedCb);
  displayResult(basicRemoveListenerResult, 'remove walletChanged')
});
