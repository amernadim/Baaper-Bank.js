// Step 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
// Step 2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString =  withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

if(isNaN(newWithdrawAmount)){
  alert('Please provide a valid number')
}
// step 3
withdrawField.value = "";
// step 4
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString =  withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
// step 6
const balanceTotaloElement = document.getElementById('balance-tatal');
const previousBalanceTotalString = balanceTotaloElement.innerText;
const previousBalanceTotal = parseFloat( previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
  alert('Baaper Ato Tk Nai');
  return;
}
 // step 5
 const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
 withdrawTotalElement.innerText = currentWithdrawTotal;

// step 7
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotaloElement.innerText = newBalanceTotal;
})
