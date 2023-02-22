import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosGetAptosBalance = aptos.querySelector('#aptosGetAptosBalance');

const aptosGetAptosBalanceAddress = aptosGetAptosBalance.querySelector(
  '#aptosGetAptosBalanceAddress',
);
const aptosGetAptosBalanceCurrency = aptosGetAptosBalance.querySelector(
  '#aptosGetAptosBalanceCurrency',
);
const aptosGetAptosBalanceButton = aptosGetAptosBalance.querySelector(
  '#aptosGetAptosBalanceButton',
);
const aptosGetAptosBalanceResult = aptosGetAptosBalance.querySelector(
  '#aptosGetAptosBalanceResult',
);

window.addEventListener('load', () => {
  okxWeb3.init().then((wallet) => {
    aptosGetAptosBalanceAddress.value = wallet.addresses.aptos.address;
  }).catch(console.log);
});

aptosGetAptosBalanceButton.addEventListener('click', () => {
  const address = aptosGetAptosBalanceAddress.value;
  const currency = aptosGetAptosBalanceCurrency.value;

  okxWeb3.aptos
    .getAptosBalance({
      address,
      currency,
    })
    .then((value) => {
      displayResult(aptosGetAptosBalanceResult, value);
    })
    .catch((error) => {
      displayResult(aptosGetAptosBalanceResult, error);
    });
});
