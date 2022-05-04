var emailLogin = document.getElementById('input-email')
var passwordLogin = document.getElementById('input-password');
var loginErrors = document.getElementsByClassName('msg-error');
var submitLogin = document.getElementById('input-submit');
var validationResults = document.getElementsByClassName('login-validation-result');
var modalContainer = document.getElementById('login-validation-container');
var modalBox = document.getElementById('login-validation');
var LoginResponse = document.getElementById('login-response');
var closeModal = document.getElementById('close-modal');

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

submitLogin.addEventListener('click', showResultsLogin);
closeModal.addEventListener('click', function(){
    modalContainer.classList.add('hidden');
    modalBox.classList.add('hidden');
})

var emailValidationRes = validationResults[0];
var passValidationRes = validationResults[1];

function showResultsLogin() {
    event.preventDefault();

    modalContainer.classList.remove('hidden');
    modalBox.classList.remove('hidden');

    if (validateEmail()) {
        emailValidationRes.textContent = 'Error: invalid email';
        emailValidationRes.style.color = 'red';
    }
    else {
        emailValidationRes.textContent = ('Email: ' + emailLogin.value);
        emailValidationRes.style.color = 'green';
    }

    if (validatePassword()) {
        passValidationRes.textContent = 'Error: please check passwords requirements';
        passValidationRes.style.color = 'red';
    }
    else {
        passValidationRes.textContent = ('Password: ' + passwordLogin.value);
        passValidationRes.style.color = 'green';
    }
}

// FETCH

submitLogin.addEventListener('click', sendData);

function sendData() {
    var keys = ['email=', 'password='];
    var values = [emailLogin.value, passwordLogin.value];
    var concating = [];

    for (let i = 0; i < keys.length; i++) {
        concating.push([keys[i].concat(values[i])]);
    }
    concatingString = concating.join('&');

    var urlConcat = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
    urlConcat += concatingString;

    if (!validateEmail() & !validatePassword()) {
        fetch(urlConcat)
        .then(function (response) { 
          return response.json();
        })
        .then(function (jsonResponse) { 
            var jsonResponseVar = jsonResponse.msg;
            if (jsonResponse.success == true) {
                LoginResponse.textContent = 'Success! ' + jsonResponseVar;
                closeModal.setAttribute('href', '../views/index.html');
                localStorage.setItem('emailLogin', emailLogin.value);
                localStorage.setItem('passwordLogin', passwordLogin.value);
            }
            else {
                LoginResponse.textContent = 'Error! ' + jsonResponseVar;
            }
        })
    }
}

// LOCALSTORAGE

emailLogin.value = localStorage.getItem('emailLogin');
passwordLogin.value = localStorage.getItem('passwordLogin');