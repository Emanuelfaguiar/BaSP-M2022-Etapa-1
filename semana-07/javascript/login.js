var emailLogin = document.querySelector('input[type="email"]')
var passwordLogin = document.querySelector('input[type="password"]');
var loginErrors = document.getElementsByClassName('msg-error');
var submitLogin = document.querySelector('input[type="submit"]');
var validationResults = document.getElementsByClassName('login-validation-result');

// EMAIL

emailLogin.addEventListener('blur', validateEmail);

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailError = document.getElementsByClassName('msg-error')[0];

function validateEmail() {
    if (!emailRegex.test(emailLogin.value)) {
        emailError.style.display = 'inherit';
        emailError.textContent = '* invalid email';
        emailLogin.style.border = '2px solid red';
        return true;
    }
    else {
        emailLogin.style.border = '2px solid green';
        return false;
    }
}

emailLogin.addEventListener('focus', function(){
    emailError.style.display = 'none';
})

// PASSWORD

passwordLogin.addEventListener('blur', validatePassword);
passwordError = document.getElementsByClassName('msg-error')[1];

function validation() {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    for (let i = 0; i < passwordLogin.value.length; i++) {
        if (numbers.includes(passwordLogin.value[i])) {
            num++;
        }
        else {
            stri++;
        }
    if (num > 0 && stri > 0) {
        return true;
    }}
    return false;
}

function validatePassword() {
    if (!validation()) {
        passwordError.style.display = 'inherit';
        passwordError.textContent = '* must contain letters and numbers';
        passwordLogin.style.border = '2px solid red';
        return true
    }
    else if (passwordLogin.value.length < 8) {
        passwordError.style.display = 'inherit';
        passwordError.textContent = '* must contain at least 8 caracters';
        passwordLogin.style.border = '2px solid red';
        return true;
    }
    else {
        passwordLogin.style.border = '2px solid green';
        return false;
    }
}

passwordLogin.addEventListener('focus', function(){
    passwordError.style.display = 'none';
})

// lOGIN RESULTS

validationBox = document.getElementById('login-validation');
submitLogin.addEventListener('click', showResultsLogin);

validationBox.style.display = 'none';

function showResultsLogin() {
    event.preventDefault();
    validationBox.style.display = 'inherit';
    if (validateEmail()) {
        validationResults[0].textContent = 'Error: invalid email';
        validationResults[0].style.color = 'red';
    }
    else {
        validationResults[0].textContent = ('Email: ' + emailLogin.value);
        validationResults[0].style.color = 'green';
    }

    if (validatePassword()) {
        validationResults[1].textContent = 'Error: please check passwords requirements';
        validationResults[1].style.color = 'red';
    }
    else {
        validationResults[1].textContent = ('Password: ' + passwordLogin.value);
        validationResults[1].style.color = 'green';
    }
}
