import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../utils';

const basic = document.querySelector('#basic');
const init = basic.querySelector('#basicInit');
const initButton = init.querySelector('#basicInitButton');
const initResult = init.querySelector('#basicInitResult');

const success = (wallet) => {
  // return wallet account information
  displayResult(initResult, wallet);
};
const changed = (wallet) => {
  // return wallet account information
  // if there is no wallet is connecting, it will be null
  displayResult(initResult, wallet);
};
const error = (error) => {
  // Error returned when rejected
  displayResult(initResult, error);
};
const uninstall = () => {
  displayResult(initResult, 'uninstalled');
};

initButton.addEventListener('click', () => {
  okxWeb3
    .init({
      success,
      changed,
      error,
      uninstall,
    })
    .then((wallet) => {
      // return wallet account information
      displayResult(initResult, wallet);
    })
    .catch((error) => {
      // Error returned when rejected
      displayResult(initResult, error);
    });
});
