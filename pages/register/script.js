document.getElementById('registerForm').addEventListener('submit', function (event){

    event.preventDefault();

    let usernameField = document.getElementById('username')

    let pwField = document.getElementById('password')
    let emailField = document.getElementById('email')
    let confirmPwField = document.getElementById('confirmPassword')
    let dobField = document.getElementById('dob')

    let username = usernameField.value 
    let pw = pwField.value 
    let email = emailField.value 
    let confirmPw = confirmPwField.value
    let dob = dobField.value

    if(username.length <= 3){
        alert('Username must consist more than 3 letter')
        return
    }

    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('Email must be valid')
        return
    }

    if(pw.length < 8){
        alert('Password must contain at least 8 letters')
        return
    }

    if(confirmPw !== pw){
        alert('Confirm Password must be the same as password')
        return
    }

    if(!dob){
        alert('DOB must be filled')
        return
    }

    let dobDate = new Date(dob);
    let currDate = new Date();
   
    let age = currDate.getFullYear() - dobDate.getFullYear();
    
    let monthDiff = currDate.getMonth - dobDate.getMonth

    if(monthDiff < 0 || (monthDiff == 0 && currDate.getDate() < dobDate.getDate)){
        age --;
    }

    if(age < 18){
        alert('Age must be at least 18 years old')
        return
    }

    alert('Register complete!')

    window.location.href = "../home/home.html";

})