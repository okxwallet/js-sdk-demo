import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosRegisterAptosCoin = aptos.querySelector('#aptosRegisterAptosCoin');

const aptosRegisterAptosCoinAddress = aptosRegisterAptosCoin.querySelector(
  '#aptosRegisterAptosCoinAddress',
);
const aptosRegisterAptosCoinButton = aptosRegisterAptosCoin.querySelector(
  '#aptosRegisterAptosCoinButton',
);
const aptosRegisterAptosCoinResult = aptosRegisterAptosCoin.querySelector(
  '#aptosRegisterAptosCoinResult',
);

aptosRegisterAptosCoinButton.addEventListener('click', () => {

  const contractAddress = aptosRegisterAptosCoinAddress.value;

  okxWeb3.aptos
    .registerAptosCoin({
      contractAddress,
    })
    .then((hash) => {
      displayResult(aptosRegisterAptosCoinResult, hash);
    })
    .catch((error) => {
      displayResult(aptosRegisterAptosCoinResult, error);
    });
});
