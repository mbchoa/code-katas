export default function queueTime(customers, numTills) {
  if (customers.length === 0) {
    return 0;
  }

  if (numTills === 1) {
    return customers.reduce((total, customerTime) => total + customerTime, 0);
  }

  if (numTills >= customers.length) {
    return Math.max(...customers);
  }

  const customersToCheckout = customers.splice(0, numTills);

  const fastestCheckout = Math.min(...customersToCheckout);
  const timeRemainingForCheckouts = customersToCheckout.map(
    (customerTime) => customerTime - fastestCheckout
  );

  timeRemainingForCheckouts.reverse().forEach((timeRemaining) => {
    if (timeRemaining > 0) {
      customers.unshift(timeRemaining);
    }
  });

  return fastestCheckout + queueTime(customers, numTills);
}
