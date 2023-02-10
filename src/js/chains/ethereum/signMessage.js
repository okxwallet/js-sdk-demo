import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const ethereum = document.querySelector('#ethereum');
const ethereumSignMessage = ethereum.querySelector('#ethereumSignMessage');

const ethereumSignMessageChainName = ethereumSignMessage.querySelector(
  '#ethereumSignMessageChainName',
);
const ethereumSignMessageAccount = ethereumSignMessage.querySelector(
  '#ethereumSignMessageAccount',
);
const ethereumSignMessageInput = ethereumSignMessage.querySelector(
  '#ethereumSignMessageInput',
);
const ethereumSignMessageButton = ethereumSignMessage.querySelector(
  '#ethereumSignMessageButton',
);
const ethereumSignMessageResult = ethereumSignMessage.querySelector(
  '#ethereumSignMessageResult',
);

// ui
okxWeb3.init().then((wallet) => {
  ethereumSignMessageAccount.value = wallet.addresses.ethereum.address;
});

const { CHAINS } = okxWeb3;
ethereumSignMessageChainName.innerHTML = Object.keys(CHAINS).map((c) => {
  if (CHAINS[c] === CHAINS.OKC) {
    return `<option selected>${CHAINS.OKC}</option>`;
  }
  return `<option>${CHAINS[c]}</option>`;
});

// logic
ethereumSignMessageButton.addEventListener('click', () => {
  const chainName = ethereumSignMessageChainName.value;

  const account = ethereumSignMessageAccount.value;
  const message = ethereumSignMessageInput.value;

  const payload = {
    account,
    message,
  };

  okxWeb3
    .signMessage({ chainName, payload })
    .then((signature) => {
      displayResult(ethereumSignMessageResult, signature);
    })
    .catch((error) => {
      displayResult(ethereumSignMessageResult, error);
    });
});
