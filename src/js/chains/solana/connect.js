const solanaSendTransactionAPTButton = document.getElementById('solanaSendTransactionAPTButton');
const solanaInitResult = document.getElementById('solanaInitResult');

import { displayResult } from '../../utils';

solanaSendTransactionAPTButton.addEventListener('click', async () => {
  const wallet = await window.solana.connect();
  displayResult(solanaInitResult, wallet);
});
