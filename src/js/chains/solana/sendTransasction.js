import okxWeb3 from '@okwallet/extension';
import {
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
  Connection,
} from '@solana/web3.js';
import { createTransferCheckedInstruction } from '@solana/spl-token';

import { displayResult } from '../../utils';

const solana = document.querySelector('#solana');
const solanaSendTransaction = solana.querySelector('#solanaSendTransaction');

// ------------------------------ send sol ------------------------------
const solanaSendTransactionSOL = solanaSendTransaction.querySelector(
  '#solanaSendTransactionSOL',
);
const solanaSendTransactionSOLFrom = solanaSendTransactionSOL.querySelector(
  '#solanaSendTransactionSOLFrom',
);
const solanaSendTransactionSOLTo = solanaSendTransactionSOL.querySelector(
  '#solanaSendTransactionSOLTo',
);
const solanaSendTransactionSOLLamports = solanaSendTransactionSOL.querySelector(
  '#solanaSendTransactionSOLLamports',
);
const solanaSendTransactionSOLButton = solanaSendTransactionSOL.querySelector(
  '#solanaSendTransactionSOLButton',
);
const solanaSendTransactionSOLResult = solanaSendTransactionSOL.querySelector(
  '#solanaSendTransactionSOLResult',
);
const solanaSetRpc = solana.querySelector(
  '#solanaSetRpc',
);
const solanaSetRpcButton = solana.querySelector(
  '#solanaSetRpcButton',
);

// ui
window.addEventListener('load', () => {
  okxWeb3.init().then((wallet) => {
    solanaSendTransactionSOLFrom.value = wallet.addresses.solana.address;
    solanaSendTransactionSOLTo.value = wallet.addresses.solana.address;
  }).catch(console.log);;
});

solanaSetRpcButton.addEventListener('click', () => {
  const solanaRPC = solanaSetRpc.value;
  okxWeb3.setSolanaNetwork(solanaRPC);
});

// logic
solanaSendTransactionSOLButton.addEventListener('click', () => {
  const fromPubkey = solanaSendTransactionSOLFrom.value;
  const toPubkey = solanaSendTransactionSOLTo.value;
  const lamports = solanaSendTransactionSOLLamports.value;

  const { CHAINS } = okxWeb3;

  const transaction = new Transaction({
    feePayer: new PublicKey(fromPubkey),
  }).add(
    SystemProgram.transfer({
      fromPubkey: new PublicKey(fromPubkey),
      toPubkey: new PublicKey(toPubkey),
      lamports: Number(lamports),
    }),
  );

  okxWeb3
    .sendTransaction({ chainName: CHAINS.SOLANA, payload: { transaction } })
    .then((res) => {
      displayResult(solanaSendTransactionSOLResult, res);
    })
    .catch((error) => {
      displayResult(solanaSendTransactionSOLResult, error);
    });
});

// ------------------------send spl token-----------------
const solanaSendTransactionSPL = solanaSendTransaction.querySelector(
  '#solanaSendTransactionSPL',
);
const solanaSendTransactionSPLFrom = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLFrom',
);
const solanaSendTransactionSPLTo = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLTo',
);
const solanaSendTransactionSPLFromOwner =
  solanaSendTransactionSPL.querySelector('#solanaSendTransactionSPLFromOwner');
const solanaSendTransactionSPLToOwner = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLToOwner',
);
const solanaSendTransactionSPLValue = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLValue',
);
const solanaSendTransactionSPLDecimals = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLDecimals',
);
const solanaSendTransactionSPLMintPubkey =
  solanaSendTransactionSPL.querySelector('#solanaSendTransactionSPLMintPubkey');
const solanaSendTransactionSPLButton = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLButton',
);
const solanaSendTransactionSPLResult = solanaSendTransactionSPL.querySelector(
  '#solanaSendTransactionSPLResult',
);

// ui
window.addEventListener('load', () => {
  okxWeb3.init().then((wallet) => {
    solanaSendTransactionSPLFromOwner.value = wallet.addresses.solana.address;
    solanaSendTransactionSPLToOwner.value = wallet.addresses.solana.address;
  }).catch(console.log);
});

const connection = new Connection('https://rpc.ankr.com/solana');

solanaSendTransactionSPLButton.addEventListener('click', async () => {
  let fromPubkey = solanaSendTransactionSPLFrom.value;
  let toPubkey = solanaSendTransactionSPLTo.value;
  const fromOwnerPubkey = solanaSendTransactionSPLFromOwner.value;
  const toOwnerPubkey = solanaSendTransactionSPLToOwner.value;
  const mintPubkey = solanaSendTransactionSPLMintPubkey.value;
  const value = solanaSendTransactionSPLValue.value;
  const decimals = solanaSendTransactionSPLDecimals.value;

  const { CHAINS } = okxWeb3;

  // get account
  const fromPubkeyResp = await connection.getTokenAccountsByOwner(
    new PublicKey(fromOwnerPubkey), // owner here
    {
      mint: new PublicKey(mintPubkey),
    },
  );
  fromPubkeyResp.value.forEach((e) => {
    fromPubkey = e.pubkey.toBase58();
    solanaSendTransactionSPLFrom.value = fromPubkey;
  });

  const toPubkeyResp = await connection.getTokenAccountsByOwner(
    new PublicKey(toOwnerPubkey), // owner here
    {
      mint: new PublicKey(mintPubkey),
    },
  );
  toPubkeyResp.value.forEach((e) => {
    toPubkey = e.pubkey.toBase58();
    solanaSendTransactionSPLTo.value = toPubkey;
  });

  const transaction = new Transaction({
    feePayer: new PublicKey(fromOwnerPubkey),
  }).add(
    createTransferCheckedInstruction(
      new PublicKey(fromPubkey), // from
      new PublicKey(mintPubkey), // mint
      new PublicKey(toPubkey), // to
      new PublicKey(fromOwnerPubkey), // from's owner
      Number(value), // amount
      Number(decimals),
    ),
  );

  okxWeb3
    .sendTransaction({ chainName: CHAINS.SOLANA, payload: { transaction } })
    .then((res) => {
      displayResult(solanaSendTransactionSPLResult, res);
    })
    .catch((error) => {
      displayResult(solanaSendTransactionSPLResult, error);
    });
});
