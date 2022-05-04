var nameSignup = document.getElementById('input-name');
var lastnameSignup = document.getElementById('input-lastname');
var dniSignup = document.getElementById('input-dni');
var dateSignup = document.getElementById('input-date');
var telSignup = document.getElementById('input-phone');
var addressSignup = document.getElementById('input-address');
var locationSignup = document.getElementById('input-city');
var postalCodeSignup = document.getElementById('input-postal-code');
var emailSignup = document.getElementById('input-email');
var passwordSignup = document.getElementById('input-password');
var repeatPasswordSignup = document.getElementById('input-repeat-password');
var signupErrors = document.getElementsByClassName('msg-error');
var submitSignup = document.getElementById('input-submit');
var validationSignup = document.getElementsByClassName('signup-validation-result');
var modalBox = document.getElementById('signup-validation');
var modalContainer = document.getElementById('signup-validation-container');
var signupResponse = document.getElementById('signup-response');
var closeModal = document.getElementById('close-modal');

// NAME

nameSignup.addEventListener('blur', validateName);

function validateName() {
    if (nameSignup.value.length < 3) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = '* Name must contain at least 3 caracters';
        nameSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameSignup.style.border = '2px solid green';
    }

    if (containNumber(nameSignup)) {
        signupErrors[0].style.display = 'inherit';
        signupErrors[0].textContent = "* Name can't contain numbers";
        nameSignup.style.border = '2px solid red';
        return true
    }
    else {
        nameSignup.style.border = '2px solid green';
    }
}

nameSignup.addEventListener('focus', function(){
    signupErrors[0].style.display = 'none';
})


// LAST NAME

lastnameSignup.addEventListener('blur', validateLastname);

function validateLastname() {
    if (lastnameSignup.value.length < 3) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = '* Last name must contain at least 3 caracters';
        lastnameSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameSignup.style.border = '2px solid green';
    }

    if (containNumber(lastnameSignup)) {
        signupErrors[1].style.display = 'inherit';
        signupErrors[1].textContent = "* Last name can't contain numbers";
        lastnameSignup.style.border = '2px solid red';
        return true
    }
    else {
        lastnameSignup.style.border = '2px solid green';
    }
}

lastnameSignup.addEventListener('focus', function(){
    signupErrors[1].style.display = 'none';
})


// DNI

dniSignup.addEventListener('blur', validateDNI)

function validateDNI() {
    if (dniSignup.value.length != 8) {
        signupErrors[2].style.display = 'inherit';
        signupErrors[2].textContent = '* DNI must contain 8 numbers';
        dniSignup.style.border = '2px solid red';
        return true      
    }
    else {
        dniSignup.style.border = '2px solid green';
    }
}

dniSignup.addEventListener('focus', function(){
    signupErrors[2].style.display = 'none';
})

// DATE OF BIRTH

dateSignup.addEventListener('blur', validateDate);

function validateAge(birthDate) {
    var today = new Date();
    var birthday = new Date(birthDate);
    var age = today.getFullYear() - birthday.getFullYear();
    var month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age
}

function validateDate() {
    if (validateAge(dateSignup.value) < 18) {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* You need to be 18 or older to register';
        dateSignup.style.border = '2px solid red';
        return true
    }
    else {
        dateSignup.style.border = '2px solid green';
    }

    if (dateSignup.value == '') {
        signupErrors[3].style.display = 'inherit';
        signupErrors[3].textContent = '* This field is required';
        dateSignup.style.border = '2px solid red';
        return true
    }
}

console.log(dateSignup.value)
dateSignup.addEventListener('focus', function(){
    signupErrors[3].style.display = 'none';
})

// PHONE NUMBER

telSignup.addEventListener('blur', validateTel);

function validateTel() {
    if (telSignup.value.length !== 10) {
        signupErrors[5].style.display = 'inherit';
        signupErrors[5].textContent = '* Phone number must have 10 numbers';
        telSignup.style.border = '2px solid red';
        return true
    }
    else {
        telSignup.style.border = '2px solid green';
    }
}

telSignup.addEventListener('focus', function(){
    signupErrors[5].style.display = 'none';
})

// ADDRESS

addressSignup.addEventListener('blur', validateAddress);


function validateAddress() {
    if (addressSignup.value.length < 5) {
        signupErrors[7].style.display = 'inherit';
        signupErrors[7].textContent = '* Address must contain at least 5 caracters';
        addressSignup.style.border = '2px solid red';
        return true
    }
    else if(!validation2(addressSignup)) {
        signupErrors[7].style.display = 'inherit';
        signupErrors[7].textContent = '* Address must contain letters, numbers and a space';
        addressSignup.style.border = '2px solid red';
        return true
    }
    else {
        addressSignup.style.border = '2px solid green';
    }
}

addressSignup.addEventListener('focus', function(){
    signupErrors[7].style.display = 'none';
})

// CITY

locationSignup.addEventListener('blur', validateLocation);

function validateLocation() {
    if (locationSignup.value.length < 4) {
        signupErrors[6].style.display = 'inherit';
        signupErrors[6].textContent = '* City must contain at least 3 caracters';
        locationSignup.style.border = '2px solid red';
        return true
    }
    else {
        locationSignup.style.border = '2px solid green';
    }
}

locationSignup.addEventListener('focus', function(){
    signupErrors[6].style.display = 'none';
})

// POSTAL CODE

postalCodeSignup.addEventListener('blur', validatePostalCode);

function validatePostalCode() {
    if (postalCodeSignup.value.length < 4 || postalCodeSignup.value.length > 5) {
        signupErrors[8].style.display = 'inherit';
        signupErrors[8].textContent = '* Postal code must contain between 4 and 5 numbers';
        postalCodeSignup.style.border = '2px solid red';
        return true
    }
    else {
        postalCodeSignup.style.border = '2px solid green';
    }
}

postalCodeSignup.addEventListener('focus', function(){
    signupErrors[8].style.display = 'none';
})

// EMAIL

emailSignup.addEventListener('blur', validateEmail);

var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

function validateEmail() {
    if (!emailRegex.test(emailSignup.value)) {
        signupErrors[4].style.display = 'inherit';
        signupErrors[4].textContent = '* Invalid email';
        emailSignup.style.border = '2px solid red';
        return true
    }
    else {
        emailSignup.style.border = '2px solid green';
    }
}

emailSignup.addEventListener('focus', function(){
    signupErrors[4].style.display = 'none';
})

// PASSWORD

passwordSignup.addEventListener('blur', validatePassword);

function validatePassword() {
    if (passwordSignup.value.length == 0) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* This field is required';
        passwordSignup.style.border = '2px solid red';
        return true
    }
    else if (!validation1(passwordSignup)) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* Password must contain letters and numbers';
        passwordSignup.style.border = '2px solid red';
        return true
    }
    else if (passwordSignup.value.length < 8) {
        signupErrors[9].style.display = 'inherit';
        signupErrors[9].textContent = '* Password must contain at least 8 caracters';
        passwordSignup.style.border = '2px solid red';
        return true
    }
    else {
        passwordSignup.style.border = '2px solid green';
    }
}

passwordSignup.addEventListener('focus', function(){
    signupErrors[9].style.display = 'none';
})

//  REPEAT PASSWORD

repeatPasswordSignup.addEventListener('blur', matchPassword);

function matchPassword() {
    if (repeatPasswordSignup.value.length == 0) {
        signupErrors[10].style.display = 'inherit';
        signupErrors[10].textContent = '* Repeat Password field is required';
        repeatPasswordSignup.style.border = '2px solid red';
        return true
    }
    else if (repeatPasswordSignup.value != passwordSignup.value) {
        signupErrors[10].style.display = 'inherit';
        signupErrors[10].textContent = "* Passwords don't match";
        repeatPasswordSignup.style.border = '2px solid red';
        return true
    }
    else {
        repeatPasswordSignup.style.border = '2px solid green';
    }
}

repeatPasswordSignup.addEventListener('focus', function(){
    signupErrors[10].style.display = 'none';
})

// FUNCTIONS

function containNumber(validationString) {
	var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    
    for (var i = 0 ; i < validationString.value.length ; i++){
		if(numbers.includes(validationString.value[i])){
			return true
		}
	}
    return false
}

function validation2(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    var blankSpace = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++;
        }
        else if(' '.includes(strings.value[i])) {
            blankSpace++;
        }
        else {
            stri++;
        }

    if (num > 0 && stri > 0 && blankSpace > 0) {
        return true
    }}
    return false
}

function validation1(strings) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var num = 0;
    var stri = 0;
    for (var i = 0; i < strings.value.length; i++) {
        if (numbers.includes(strings.value[i])) {
            num++;
        }
        else {
            stri++;
        }
    if (num > 0 && stri > 0) {
        return true
    }}
    return false
}

function convertDate(date) {
    var year = date.substr(0, 4);
    var month = date.substr(5, 2);
    var day = date.substr(8, 2);
    var dateConv = month + '/' + day + '/' + year;
    return dateConv
}

function convertDatetoNormal(date) {
    var year = date.substr(0, 4);
    var month = date.substr(5, 2);
    var day = date.substr(8, 2);
    var dateConv =  day + '/' + month + '/' + year;
    return dateConv
}

function saveLocalStorage(data) {
    if(localStorage.getItem('id') == null) {
    localStorage.setItem("id", data.id);
    localStorage.setItem('name', data.name);
    localStorage.setItem('lastname', data.lastName);
    localStorage.setItem('dni', data.dni);
    localStorage.setItem('birth date', data.dob);
    localStorage.setItem('phone', data.phone);
    localStorage.setItem('address', data.address);
    localStorage.setItem('location', data.city);
    localStorage.setItem('postalcode', data.zip);
    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    }
}

var nameValidationRes = validationSignup[0];
var lastnameValidationRes = validationSignup[1];
var dniValidationRes = validationSignup[2];
var birthValidationRes = validationSignup[3];
var emailValidationResSignup = validationSignup[4];
var telValidationRes = validationSignup[5];
var locValidationRes = validationSignup[6];
var addressValidationRes = validationSignup[7];
var postValidationRes = validationSignup[8];
var passValidationResSignup = validationSignup[9];
var passRepeatValidationRes = validationSignup[10];

// signup validation results

closeModal.addEventListener('click', function(){
    modalContainer.classList.add('hidden');
    modalBox.classList.add('hidden');
})

submitSignup.addEventListener('click', showResultsSignup);

function showResultsSignup() {
    event.preventDefault();

    modalContainer.classList.remove('hidden');
    modalBox.classList.remove('hidden');

    if (validateName()) {
        nameValidationRes.textContent = 'Invalid name';
        nameValidationRes.style.color = 'red';
    }
    else {
        nameValidationRes.textContent = ('Name: ' + nameSignup.value);
        nameValidationRes.style.color = 'green';
    }

    if (validateLastname()) {
        lastnameValidationRes.textContent = 'Invalid last name';
        lastnameValidationRes.style.color = 'red';
    }
    else {
        lastnameValidationRes.textContent = ('Last name: ' + lastnameSignup.value);
        lastnameValidationRes.style.color = 'green';
    }

    if (validateDNI()) {
        dniValidationRes.textContent = 'Invalid DNI';
        dniValidationRes.style.color = 'red';
    }
    else {
        dniValidationRes.textContent = ('DNI: ' + dniSignup.value);
        dniValidationRes.style.color = 'green';
    }

    if (validateDate()) {
        birthValidationRes.textContent = 'Invalid birth date';
        birthValidationRes.style.color = 'red';
    }
    else {
        birthValidationRes.textContent = ('Birth date: ' + dateSignup.value);
        birthValidationRes.style.color = 'green';
    }

    if (validateTel()) {
        emailValidationResSignup.textContent = 'Invalid email';
        emailValidationResSignup.style.color = 'red';
    }
    else { 
        emailValidationResSignup.textContent = ('Email: ' + emailSignup.value);
        emailValidationResSignup.style.color = 'green';
    }

    if (validateAddress()) { //phone number
        telValidationRestextContent = 'Invalid phone number';
        telValidationResstyle.color = 'red';
    }
    else {
        telValidationRes.textContent = ('Phone number: ' + telSignup.value);
        telValidationRes.style.color = 'green';
    }

    if (validateLocation()) { //city
        locValidationRes.textContent = 'Invalid city';
        locValidationRes.style.color = 'red';
    }
    else {
        locValidationRes.textContent = ('City: ' + locationSignup.value);
        locValidationRes.style.color = 'green';
    }

    if (validatePostalCode()) { //address
        addressValidationRes.textContent = 'Invalid address';
        addressValidationRes.style.color = 'red';
    }
    else {
        addressValidationRes.textContent = ('Address: ' + addressSignup.value);
        addressValidationRes.style.color = 'green'; 
    }

    if (validateEmail()) { //postal code
        postValidationRes.textContent = 'Invalid postal code';
        postValidationRes.style.color = 'red';
    }
    else {
        postValidationRes.textContent = ('Postal code: ' + postalCodeSignup.value);
        postValidationRes.style.color = 'green';
    }

    if (validatePassword()) {
        passValidationResSignup.textContent = 'Invalid password';
        passValidationResSignup.style.color = 'red';
    }
    else {
        passValidationResSignup.textContent = ('Password: ' + passwordSignup.value);
        passValidationResSignup.style.color = 'green';
    }

    if (matchPassword()) {
        passRepeatValidationRes.textContent = 'Passwords dont match';
        passRepeatValidationRes.style.color = 'red';
    }
    else {
        passRepeatValidationRes.textContent = 'Password validation: OK';
        passRepeatValidationRes.style.color = 'green';
    }
}

// fetch

submitSignup.addEventListener('click', sendData);

function sendData() {
    dateConverted = convertDate(dateSignup.value);
    addressNoSpace = addressSignup.value.replace(' ', '%20');

    var keys = ['name=', 'lastName=', 'dni=', 'dob=', 'email=', 'phone=', 'city=', 'address=', 'zip=', 'password='];
    var values = [nameSignup.value, lastnameSignup.value, dniSignup.value, dateConverted, emailSignup.value,
        telSignup.value, locationSignup.value, addressNoSpace, postalCodeSignup.value, passwordSignup.value];
    var concating = [];

    for (let i = 0; i < keys.length; i++) {
        concating.push([keys[i].concat(values[i]).trim()]);
    }

    concatingString = concating.join('&');

    var urlConcat = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
    urlConcat += concatingString;

    if (!validateName() & !validateLastname() & !validateDNI() & !validateDate() & !validateEmail() &  !validateTel() 
    & !validateLocation() & !validateAddress() &  !validatePostalCode() & !validatePassword() & !matchPassword()) {
        fetch(urlConcat)
        .then(function (response) { 
          return response.json()
        })
        .then(function (jsonResponse) { 
            if (jsonResponse.success == true) {
                signupResponse.textContent = 'Success! ' + jsonResponse.msg;
                closeModal.setAttribute('href', '../views/index.html');
                var data = jsonResponse.data;
                saveLocalStorage(data);
            }
            else {
                console.log(jsonResponse);
                signupResponse.textContent = 'Error! ' + jsonResponse.errors[0].msg;
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}

// LOCALSTORAGE

if (localStorage.getItem('id') != null) {
    nameSignup.value = localStorage.getItem('name');
    lastnameSignup.value = localStorage.getItem('lastname');
    dniSignup.value = localStorage.getItem('dni');
    dateSignup.value = localStorage.getItem('birthdate');
    emailSignup.value = localStorage.getItem('email');
    telSignup.value = localStorage.getItem('phone');
    locationSignup.value = localStorage.getItem('city');
    addressSignup.value = localStorage.getItem('address');
    postalCodeSignup.value = localStorage.getItem('postalcode');
    passwordSignup.value = localStorage.getItem('password');
}