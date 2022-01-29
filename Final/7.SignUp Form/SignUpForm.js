function onlyAlphabets1(){
    var regex1 = /^[a-zA-Z]*$/;
    if(document.f.fname.value == ""){
        document.getElementById('find').innerHTML = "please enter details here";
        return false;
    }
    else{
        if (regex1.test(document.f.fname.value)) {
  
            document.getElementById("find").innerHTML = "success";
            return true;
        } else {
            document.getElementById("find").innerHTML = "Alphabets Only";
            return false;
        }

    }
  
}

function onlyAlphabets2(){
    var regex2 = /^[a-zA-Z]*$/;
    if(document.f.lname.value==""){
        document.getElementById('lind').innerHTML = "please enter details here";
        return false;
    }
    else{
        if (regex2.test(document.f.lname.value)) {
  
            document.getElementById("lind").innerHTML = "success";
            return true;
        } else {
            document.getElementById("lind").innerHTML = "Alphabets Only";
            return false;
        }

    }
   
}

function emailValidation(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(document.f.email.value)){
        document.getElementById('eind').innerHTML = "valid email";
        return true;
    }
    else{
        document.getElementById('eind').innerHTML = "Not a valid email";
        return false;
    }
}
function mobileValidation(){
    var mob = /^[6-9]{1}[0-9]{9}$/;
    if(mob.test(document.f.mnum.value)){
        document.getElementById('mind').innerHTML = "success";
        return true;
    }else{
        document.getElementById('mind').innerHTML = "Not a valid Number";
        return false;
    }
}

var pswd1;

function checkPswd1(){
    var pswdvalid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pswdvalid.test(document.f.paswd1.value)){
        document.getElementById('pind1').innerHTML = "ok fine";
        pswd1 = document.f.paswd1.value;
        return true;
    }else{
        document.getElementById('pind1').innerHTML = "Must be 8 charecters, 1 uppercase, numeric number, special symbol"
        return false;
    }
}
function checkPswd2(){
    var pswd2 = document.f.paswd2.value;
    if(pswd1 == pswd2){
        document.getElementById('pind2').innerHTML = "Password is matched";
        return true;
    }else{
        document.getElementById('pind2').innerHTML = "Must be match with above password";
        return false;
    }
}

function submitDetails(){

    if(checkPswd1()== true && checkPswd2() == true && mobileValidation()== true && emailValidation() == true && onlyAlphabets1() == true && onlyAlphabets2() == true ){
        document.getElementById('msg').innerHTML = "Form validation success";
        return true;
    }
    else{
        document.getElementById('msg').innerHTML = "Fill the all details in form";
        return false;
    }
}