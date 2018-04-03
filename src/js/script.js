document.addEventListener("DOMContentLoaded", function() {


    var firstName = document.getElementById('first-name'),
        phoneNumber = document.getElementById('phone-number'),
        emailAddress = document.getElementById('email-address');


    document.querySelector('form#contact_form').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();

        console.log('First Name: ' + firstName.value);    
        console.log('Phone Number: ' + phoneNumber.value);    
        console.log('Email Address: ' + emailAddress.value);    
    });


    document.getElementById('mobileMenu').addEventListener('click', function () {
        if(this.classList.contains('open')) {
            this.classList.remove('open');
            document.getElementById('menu').classList.remove('open');
        } else {
            this.classList.add('open');
            document.getElementById('menu').classList.add('open');
        }
        
    });
      
});