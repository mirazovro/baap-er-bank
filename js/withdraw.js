// step: 1 add event handler with the withdraw button

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2: get  the withdraw amount from the withdraw input field
  // const withDrawField = document.getElementById("withdraw-field");
  // const newWithdrawAmountString = withDrawField.value;
  // const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(newWithdrawAmount);

  const withdrawField = document.getElementById("withdraw-field");
  const newDepositAmountString = withdrawField.value;
  // convert the input into a number by using parseFloat
  const newWithdrawAmount = parseFloat(newDepositAmountString);
  console.log(newWithdrawAmount);

  // step 3: get previous withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotall = parseFloat(previousWithdrawTotalString);
  console.log(previousWithdrawTotall);

  // step 4: calculate totall withdrawamount

  const currentWithdrawTotal = previousWithdrawTotall + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 5: get the previous balance totall

  const ballanceTotalElement = document.getElementById("balance-total");
  const previousBalanceString = ballanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceString);

  // step 6: set the new balance total
  // step 6.5: set the new balance total
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  ballanceTotalElement.innerText = newBalanceTotal;

  // step 7: clear the input field:
  withdrawField.value = "";
});
