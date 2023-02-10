import okWeb3 from '@okwallet/extension';

import { displayResult } from '../utils';

const { CHAINS } = okWeb3;

const basic = document.querySelector('#basic');
const basicGetAddress = basic.querySelector('#basicGetAddress');
const basicGetAddressButton = basicGetAddress.querySelector(
  '#basicGetAddressButton',
);
const basicGetAddressResult = basicGetAddress.querySelector(
  '#basicGetAddressResult',
);
const basicGetEthereumAddressButton = basicGetAddress.querySelector(
  '#basicGetEthereumAddressButton',
);
const basicGetEthereumAddressResult = basicGetAddress.querySelector(
  '#basicGetEthereumAddressResult',
);

basicGetAddressButton.addEventListener('click', () => {
  // get addresses of all chains
  okWeb3
    .getAddress()
    .then((addrMap) => {
      // return chain-address map
      displayResult(basicGetAddressResult, addrMap);
    })
    .catch((error) => {
      // Error returned when rejected
      displayResult(basicGetAddressResult, error);
    });
});

basicGetEthereumAddressButton.addEventListener('click', () => {
  // get ETHEREUM chain address
  okWeb3
    .getAddress(CHAINS.ETHEREUM)
    .then((addr) => {
      // return ETHEREUM address
      displayResult(basicGetEthereumAddressResult, addr);
    })
    .catch((error) => {
      // Error returned when rejected
      displayResult(basicGetEthereumAddressResult, error);
    });
});
