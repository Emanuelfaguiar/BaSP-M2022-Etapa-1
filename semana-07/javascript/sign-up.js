var nameSignup = document.querySelector('input[name="name"]');
var lastnameSignup = document.querySelector('input[name="lastname"]');
var dniSignup = document.querySelector('input[name="dni"]');
var dateSignup = document.querySelector('input[name="date"]');
var telSignup = document.querySelector('input[name="phone"]');
var addressSignup = document.querySelector('input[name="address"]');
var locationSignup = document.querySelector('input[name="city"]');
var postalCodeSignup = document.querySelector('input[name="postal-code"]');
var emailSignup = document.querySelector('input[name="email"]');
var passwordSignup = document.querySelector('input[name="password"]');
var repeatPasswordSignup = document.querySelector('input[name="repeat-password"]');
var signupErrors = document.getElementsByClassName('msg-error');
var submitSignup = document.querySelector('input[type="submit"]');
var validationSignup = document.getElementsByClassName('signup-validation-result');

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

// signup validation results

validationBoxS = document.getElementById('signup-validation');
submitSignup.addEventListener('click', showResultsSignup);

validationBoxS.style.display = 'none';

function showResultsSignup() {
    event.preventDefault();
    validationBoxS.style.display = 'inherit';
    validationBoxS.scrollIntoView(true);
    if (validateName()) {
        validationSignup[0].textContent = 'Invalid name';
        validationSignup[0].style.color = 'red';
    }
    else {
        validationSignup[0].textContent = ('Name: ' + nameSignup.value);
        validationSignup[0].style.color = 'green';
    }

    if (validateLastname()) {
        validationSignup[1].textContent = 'Invalid last name';
        validationSignup[1].style.color = 'red';
    }
    else {
        validationSignup[1].textContent = ('Last name: ' + lastnameSignup.value);
        validationSignup[1].style.color = 'green';
    }

    if (validateDNI()) {
        validationSignup[2].textContent = 'Invalid DNI';
        validationSignup[2].style.color = 'red';
    }
    else {
        validationSignup[2].textContent = ('DNI: ' + dniSignup.value);
        validationSignup[2].style.color = 'green';
    }

    if (validateDate()) {
        validationSignup[3].textContent = 'Invalid birth date';
        validationSignup[3].style.color = 'red';
    }
    else {
        validationSignup[3].textContent = ('Birth date: ' + dateSignup.value);
        validationSignup[3].style.color = 'green';
    }

    if (validateTel()) {
        validationSignup[4].textContent = 'Invalid email';
        validationSignup[4].style.color = 'red';
    }
    else { 
        validationSignup[4].textContent = ('Email: ' + emailSignup.value);
        validationSignup[4].style.color = 'green';
    }

    if (validateAddress()) { //phone number
        validationSignup[5].textContent = 'Invalid phone number';
        validationSignup[5].style.color = 'red';
    }
    else {
        validationSignup[5].textContent = ('Phone number: ' + telSignup.value);
        validationSignup[5].style.color = 'green';
    }

    if (validateLocation()) { //city
        validationSignup[6].textContent = 'Invalid city';
        validationSignup[6].style.color = 'red';
    }
    else {
        validationSignup[6].textContent = ('City: ' + locationSignup.value);
        validationSignup[6].style.color = 'green';
    }

    if (validatePostalCode()) { //address
        validationSignup[7].textContent = 'Invalid address';
        validationSignup[7].style.color = 'red';
    }
    else {
        validationSignup[7].textContent = ('Address: ' + addressSignup.value);
        validationSignup[7].style.color = 'green'; 
    }

    if (validateEmail()) { //postal code
        validationSignup[8].textContent = 'Invalid postal code';
        validationSignup[8].style.color = 'red';
    }
    else {
        validationSignup[8].textContent = ('Postal code: ' + postalCodeSignup.value);
        validationSignup[8].style.color = 'green';
    }

    if (validatePassword()) {
        validationSignup[9].textContent = 'Invalid password';
        validationSignup[9].style.color = 'red';
    }
    else {
        validationSignup[9].textContent = ('Password: ' + passwordSignup.value);
        validationSignup[9].style.color = 'green';
    }

    if (matchPassword()) {
        validationSignup[10].textContent = 'Passwords dont match';
        validationSignup[10].style.color = 'red';
    }
    else {
        validationSignup[10].textContent = 'Password validation: OK';
        validationSignup[10].style.color = 'green';
    }
}