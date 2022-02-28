import {
  transaction,
  transactions,
  transactions,
  transactionsFor,
} from "./09-inventory-item-transactions";

function isItemAvailble(itemId: number, transactions: transaction[]) {
  const itemsTransactions: transaction[] = transactionsFor(
    itemId,
    transactions
  );
  console.log(itemsTransactions);
  let quantity = itemsTransactions.reduce(
    (prevValue, { movement, quantity }) => {
      switch (movement) {
        case "in":
          return prevValue + quantity;
        case "out":
          return prevValue - quantity;
      }
    },
    0
  );
  return quantity > 0;
}

console.log(isItemAvailble(105, transactions));
