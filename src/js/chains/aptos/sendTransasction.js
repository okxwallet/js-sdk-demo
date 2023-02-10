import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosSendTransaction = aptos.querySelector('#aptosSendTransaction');

// ------------------------------------ send APT -------------------------
const aptosSendTransactionAPT = aptosSendTransaction.querySelector(
  '#aptosSendTransactionAPT',
);
const aptosSendTransactionAPTFrom = aptosSendTransactionAPT.querySelector(
  '#aptosSendTransactionAPTFrom',
);
const aptosSendTransactionAPTTo = aptosSendTransactionAPT.querySelector(
  '#aptosSendTransactionAPTTo',
);
const aptosSendTransactionAPTValue = aptosSendTransactionAPT.querySelector(
  '#aptosSendTransactionAPTValue',
);
const aptosSendTransactionAPTButton = aptosSendTransactionAPT.querySelector(
  '#aptosSendTransactionAPTButton',
);
const aptosSendTransactionAPTResult = aptosSendTransactionAPT.querySelector(
  '#aptosSendTransactionAPTResult',
);

// ui
okxWeb3.init().then((wallet) => {
  aptosSendTransactionAPTFrom.value = wallet.addresses.aptos.address;
  aptosSendTransactionAPTTo.value = wallet.addresses.aptos.address;
});

// logic
aptosSendTransactionAPTButton.addEventListener('click', () => {
  const to = aptosSendTransactionAPTTo.value;
  const value = aptosSendTransactionAPTValue.value;

  const payload = {
    type: 'entry_function_payload',
    function: '0x1::coin::transfer',
    type_arguments: ['0x1::aptos_coin::AptosCoin'],
    arguments: [to, value],
  };

  const { CHAINS } = okxWeb3;

  okxWeb3
    .sendTransaction({ chainName: CHAINS.APTOS, payload })
    .then((res) => {
      displayResult(aptosSendTransactionAPTResult, res);
    })
    .catch((error) => {
      displayResult(aptosSendTransactionAPTResult, error);
    });
});

// ------------------------------- swap ---------------------
const aptosSendTransactionContract = aptosSendTransaction.querySelector(
  '#aptosSendTransactionContract',
);
const aptosSendTransactionContractFunction = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractFunction',
);
const aptosSendTransactionContractArguments = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractArguments',
);
const aptosSendTransactionContractType = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractType',
);
const aptosSendTransactionContractTypeArguments = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractTypeArguments',
);
const aptosSendTransactionContractButton = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractButton',
);
const aptosSendTransactionContractResult = aptosSendTransactionContract.querySelector(
  '#aptosSendTransactionContractResult',
);

aptosSendTransactionContractButton.addEventListener('click', () => {
  const func = aptosSendTransactionContractFunction.value;
  let args = aptosSendTransactionContractArguments.value;
  const tp = aptosSendTransactionContractType.value;
  let typeArgs = aptosSendTransactionContractTypeArguments.value;

  args = args.split(',').map(v => v.trim()).map(v => Number(v));
  typeArgs = typeArgs.split(',').map(v => v.trim())

  const payload = {
    type: tp,
    function: func,
    type_arguments: typeArgs,
    arguments: args,
  };

  const { CHAINS } = okxWeb3;

  okxWeb3
    .sendTransaction({ chainName: CHAINS.APTOS, payload })
    .then((res) => {
      displayResult(aptosSendTransactionContractResult, res);
    })
    .catch((error) => {
      displayResult(aptosSendTransactionContractResult, error);
    });
});
