// step 1: add event handler to the deposite button 
// step 2: get the deposite amount from the deposite input field \ for input    use .value to the value inside the input feild
// step 3: clear the deposite field 
// step 4: get the current deposite total
// step 5: add nuimber to set the total deposite 
// step 6: get balance currernt total 
// step 7: calculate current total balance. set the balance total

// step 1
document.getElementById('btn-deposite').addEventListener('click',function(){
// step 2
const depositeField = document.getElementById('deposit-feild');
const newDepositeAmountString = depositeField.value;
const newDepositeAmount = parseFloat(newDepositeAmountString);
//  step 3 
depositeField.value = '';
//  step 4
const depositeTotalElement = document.getElementById('deposite-total');
const previousDepositeTotalString = depositeTotalElement.innerText;
const previousDepositeTotal = parseFloat(previousDepositeTotalString);
// step 5
const newtDepositeTotal = previousDepositeTotal + newDepositeAmount;
depositeTotalElement.innerText = newtDepositeTotal;

// step 6 
const balanceTotalElement = document.getElementById('balance-tatal');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step 7
const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
balanceTotalElement.innerText = newBalanceTotal;
})
