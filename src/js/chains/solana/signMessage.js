import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const solana = document.querySelector('#solana');
const solanaSignMessage = solana.querySelector('#solanaSignMessage');

const solanaSignMessageInput = solanaSignMessage.querySelector(
  '#solanaSignMessageInput',
);
const solanaSignMessageButton = solanaSignMessage.querySelector(
  '#solanaSignMessageButton',
);
const solanaSignMessageResult = solanaSignMessage.querySelector(
  '#solanaSignMessageResult',
);

solanaSignMessageButton.addEventListener('click', () => {
  const { CHAINS } = okxWeb3;

  const message = solanaSignMessageInput.value;

  const payload = {
    message,
  };

  okxWeb3
    .signMessage({ chainName: CHAINS.SOLANA, payload })
    .then((signature) => {
      displayResult(solanaSignMessageResult, signature);
    })
    .catch((error) => {
      displayResult(solanaSignMessageResult, error);
    });
});
