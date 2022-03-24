const form = document.getElementById('form');
const username = document.getElementById('inputUsername3');
const password = document.getElementById('inputPassword3');
const confirmpassword = document.getElementById('inputPasswordConfirm');
const email = document.getElementById('inputEmail3');

form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("Submit")
    if(username.value == ""){
        console.log('None');
        showerorr_message(username,"กรุณาป้อนชื่อผู้ใช้งาน");
    }
    else{
        console.log("complete");
    }

});

function showerorr_message(input,message){
    const control = input.parentElement;
    control.className = 'message erorr';
    const small = control.querySelector('small');
    small.innerText = message;
    
}




