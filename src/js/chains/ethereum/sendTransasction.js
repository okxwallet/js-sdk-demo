import okxWeb3 from '@okwallet/extension';

import { displayResult } from '../../utils';

const { CHAINS } = okxWeb3;

const ethereum = document.querySelector('#ethereum');
const ethereumSendTransaction = ethereum.querySelector(
  '#ethereumSendTransaction',
);

// -------------------------------------- send ether --------------------------
const ethereumSendTransactionETH = ethereumSendTransaction.querySelector(
  '#ethereumSendTransactionETH',
);
const ethereumSendTransactionETHChainName =
  ethereumSendTransactionETH.querySelector(
    '#ethereumSendTransactionETHChainName',
  );
const ethereumSendTransactionETHFrom = ethereumSendTransactionETH.querySelector(
  '#ethereumSendTransactionETHFrom',
);
const ethereumSendTransactionETHTo = ethereumSendTransactionETH.querySelector(
  '#ethereumSendTransactionETHTo',
);
const ethereumSendTransactionETHValue =
  ethereumSendTransactionETH.querySelector('#ethereumSendTransactionETHValue');
const ethereumSendTransactionETHButton =
  ethereumSendTransactionETH.querySelector('#ethereumSendTransactionETHButton');
const ethereumSendTransactionETHResult = ethereumSendTransaction.querySelector(
  '#ethereumSendTransactionETHResult',
);

okxWeb3.init().then((wallet) => {
  ethereumSendTransactionETHFrom.value = wallet.addresses.ethereum.address;
  ethereumSendTransactionETHTo.value = wallet.addresses.ethereum.address;
  ethereumSendTransactionETHChainName.innerHTML = Object.keys(CHAINS).map(
    (c) => {
      if (CHAINS[c] === CHAINS.OKC) {
        return `<option selected>${CHAINS.OKC}</option>`;
      }
      return `<option>${CHAINS[c]}</option>`;
    },
  );
});

ethereumSendTransactionETHButton.addEventListener('click', () => {
  const chainName = ethereumSendTransactionETHChainName.value;

  const from = ethereumSendTransactionETHFrom.value;
  const to = ethereumSendTransactionETHTo.value;
  const value = ethereumSendTransactionETHValue.value;

  const payload = {
    from,
    to,
    value,
  };

  okxWeb3
    .sendTransaction({ chainName, payload })
    .then((res) => {
      displayResult(ethereumSendTransactionETHResult, res);
    })
    .catch((error) => {
      displayResult(ethereumSendTransactionETHResult, error);
    });
});

// ------------------------------ contract interaction --------------------------
const ethereumSendTransactionContract = ethereumSendTransaction.querySelector(
  '#ethereumSendTransactionContract',
);
const ethereumSendTransactionContractChainName =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractChainName',
  );
const ethereumSendTransactionContractFrom =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractFrom',
  );
const ethereumSendTransactionContractTo =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractTo',
  );
const ethereumSendTransactionContractValue =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractValue',
  );
const ethereumSendTransactionContractButton =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractButton',
  );
const ethereumSendTransactionContractResult =
  ethereumSendTransactionContract.querySelector(
    '#ethereumSendTransactionContractResult',
  );

okxWeb3.init().then((wallet) => {
  ethereumSendTransactionContractFrom.value = wallet.addresses.ethereum.address;
  ethereumSendTransactionContractChainName.innerHTML = Object.keys(CHAINS).map(
    (c) => {
      if (CHAINS[c] === CHAINS.OKC) {
        return `<option selected>${CHAINS.OKC}</option>`;
      }
      return `<option>${CHAINS[c]}</option>`;
    },
  );
});

ethereumSendTransactionContractButton.addEventListener('click', () => {
  const chainName = ethereumSendTransactionContractChainName.value;
  const from = ethereumSendTransactionContractFrom.value;
  // different
  const to = ethereumSendTransactionContractTo.value;
  const value = ethereumSendTransactionContractValue.value;
  const data = ethereumSendTransactionContractData.value;

  const payload = {
    from,
    to,
    value,
    data,
  };

  okxWeb3
    .sendTransaction({ chainName, payload })
    .then((res) => {
      displayResult(ethereumSendTransactionContractResult, res);
    })
    .catch((error) => {
      displayResult(ethereumSendTransactionContractResult, error);
    });
});
