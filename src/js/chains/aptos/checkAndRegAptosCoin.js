import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosCheckAndRegAptosCoin = aptos.querySelector('#aptosCheckAndRegAptosCoin');

const aptosCheckAndRegAptosCoinAddress = aptosCheckAndRegAptosCoin.querySelector(
  '#aptosCheckAndRegAptosCoinAddress',
);
const aptosCheckAndRegAptosCoinContract = aptosCheckAndRegAptosCoin.querySelector(
  '#aptosCheckAndRegAptosCoinContract',
);
const aptosCheckAndRegAptosCoinButton = aptosCheckAndRegAptosCoin.querySelector(
  '#aptosCheckAndRegAptosCoinButton',
);
const aptosCheckAndRegAptosCoinResult = aptosCheckAndRegAptosCoin.querySelector(
  '#aptosCheckAndRegAptosCoinResult',
);

okxWeb3.init().then((wallet) => {
  aptosCheckAndRegAptosCoinAddress.value = wallet.addresses.aptos.address;
});

aptosCheckAndRegAptosCoinButton.addEventListener('click', () => {
  const address = aptosCheckAndRegAptosCoinAddress.value;
  const contractAddress = aptosCheckAndRegAptosCoinContract.value;

  okxWeb3.aptos
    .checkAndRegAptosCoin({
      address,
      contractAddress,
    })
    .then((value) => {
      displayResult(aptosCheckAndRegAptosCoinResult, value);
    })
    .catch((error) => {
      displayResult(aptosCheckAndRegAptosCoinResult, error);
    });
});
