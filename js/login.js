// step 1: Add click event handler with login button 
// step 2: get the eamil address inside the email field \ always remember to use .value to get text from an input field.
// step 3: get password. 3.a set id on the html element. 3.b get the element. 3.c get the value from the element 
// step 4: verify email and password

// step 1
document.getElementById('btn-login').addEventListener('click',function(){
// step 2
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step 3
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// Do not verify email password on the client side ( Danger )
// step 4 
if(email === 'sontan@baap.com' && password === 'secret'){
  window.location.href ='bank.html'
} else{
  alert('try again')
}
})

