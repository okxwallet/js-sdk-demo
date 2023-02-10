import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const aptos = document.querySelector('#aptos');
const aptosSignMessage = aptos.querySelector('#aptosSignMessage');

const aptosSignMessageInput = aptosSignMessage.querySelector(
  '#aptosSignMessageInput',
);
const aptosSignMessageNonce = aptosSignMessage.querySelector(
  '#aptosSignMessageNonce',
);

const aptosSignMessageButton = aptosSignMessage.querySelector(
  '#aptosSignMessageButton',
);
const aptosSignMessageResult = aptosSignMessage.querySelector(
  '#aptosSignMessageResult',
);

aptosSignMessageButton.addEventListener('click', () => {
  const { CHAINS } = okxWeb3;

  const message = aptosSignMessageInput.value;
  const nonce = aptosSignMessageNonce.value;

  const payload = {
    message,
    nonce,
  };

  okxWeb3
    .signMessage({ chainName: CHAINS.APTOS, payload })
    .then((signature) => {
      displayResult(aptosSignMessageResult, signature);
    })
    .catch((error) => {
      displayResult(aptosSignMessageResult, error);
    });
});
