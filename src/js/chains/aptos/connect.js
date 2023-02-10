const aptosSendTransactionAPTButton = document.getElementById('aptosSendTransactionAPTButton');
const aptosInitResult = document.getElementById('aptosInitResult');

import { displayResult } from '../../utils';

aptosSendTransactionAPTButton.addEventListener('click', async () => {
  const wallet = await window.aptos.connect();
  displayResult(aptosInitResult, wallet);
});
