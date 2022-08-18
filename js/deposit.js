//step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step 3: get the current deposit totall
  //for non input use innertext to get the text
  const depositTotallElement = document.getElementById("deposit-total");
  const previousdepositTotallString = depositTotallElement.innerText;
  const previousdepositTotall = parseFloat(previousdepositTotallString);
  // step -4: add numbers to set the totall deposit
  const currentDepositTotal = previousdepositTotall + newDepositAmount;
  // set the deposit totall
  depositTotallElement.innerText = currentDepositTotal;

  // step -5: get ballance current total

  const ballanceTotalElement = document.getElementById("balance-total");
  const previousBalanceString = ballanceTotalElement.innerText;
  const previousBalanceTotall = parseFloat(previousBalanceString);

  //step-6: calculate current total balance
  const currentBalanceTotall = previousBalanceTotall + newDepositAmount;
  // set the balance totall
  ballanceTotalElement.innerText = currentBalanceTotall;

  //step-7: clear the deposit field
  depositField.value = "";
});
