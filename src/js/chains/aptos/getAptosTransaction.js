import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosGetAptosTransaction = aptos.querySelector(
  '#aptosGetAptosTransaction',
);

const aptosGetAptosTransactionHash = aptosGetAptosTransaction.querySelector(
  '#aptosGetAptosTransactionHash',
);
const aptosGetAptosTransactionButton = aptosGetAptosTransaction.querySelector(
  '#aptosGetAptosTransactionButton',
);
const aptosGetAptosTransactionResult = aptosGetAptosTransaction.querySelector(
  '#aptosGetAptosTransactionResult',
);

aptosGetAptosTransactionButton.addEventListener('click', () => {
  const hash = aptosGetAptosTransactionHash.value;

  okxWeb3.aptos
    .getAptosTransaction(hash)
    .then((status) => {
      displayResult(aptosGetAptosTransactionResult, status);
    })
    .catch((error) => {
      displayResult(aptosGetAptosTransactionResult, error);
    });
});
