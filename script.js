const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText=message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';

}
function checkEmail(input) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(input.value)){
        success(input)
    }else{
        error(input, 'Please enter a valid email address')
    }
  }

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} is required`);
        }else{
            success(input)
        }
    })
  
    
}




function checkLength(input,min,max){
    if( input.value.length < min){
        error(input, `${input.id} It must be at least ${min} characters long.`)
    }else if(input.value.length > max){
        error(input, `${input.id} It  must be no more than ${max} characters long.`)

    }
    else{
        success(input);
    }
}


function checkPasswords(input1,input2){
    if( input1.value !== input2.value){
        error(input2, 'Passwords do not match')
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
        error(input,'Phone number must be 10 characters long.');
    
}



form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone,10);
 
});