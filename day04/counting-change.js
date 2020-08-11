/**
 * Memoized version
 */
export default function countChange(money, coins) {
  const map = {};

  function countChangeRecur(leftOverMoney, currCoinIndex) {
    if (leftOverMoney < 0 || currCoinIndex < 0) {
      return 0;
    }
    if (leftOverMoney === 0) {
      return 1;
    }

    const key = `${leftOverMoney}:${currCoinIndex}`;
    if (map[key]) {
      return map[key];
    }

    map[key] =
      countChangeRecur(leftOverMoney - coins[currCoinIndex], currCoinIndex) +
      countChangeRecur(leftOverMoney, currCoinIndex - 1);

    return map[key];
  }

  return countChangeRecur(money, coins.length - 1);
}

/**
 * First attempt
 */
// export default function countChange(money, coins) {
//   function countChangeRec(combination, moneyLeft) {
//     if (moneyLeft < 0) {
//       return;
//     }
//     if (moneyLeft === 0) {
//       combinations.add(combination.sort().join());
//       return;
//     }

//     for (const coin of coins) {
//       countChangeRec(combination.concat([coin]), moneyLeft - coin);
//     }
//   }

//   const combinations = new Set();
//   countChangeRec([], money);
//   return combinations.size;
// }

/**
 * Even simpler solution
 */
// export default function countChange(money, coins) {
//   if (money < 0 || coins.length === 0) return 0;
//   if (money === 0) return 1;
//   return countChange(money - coins[0], coins) + countChange(money, coins.slice(1));
// }
