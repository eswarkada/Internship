function fnameValidation(){
    var regex1 = /^[a-zA-Z]*$/;
    if(document.f.fname.value == ""){
        document.getElementById('FnameIn').innerHTML = "please enter details here";
        return false;
    }
    else{
        if (regex1.test(document.f.fname.value)) {
  
            document.getElementById("FnameIn").innerHTML = "success";
            return true;
        } else {
            document.getElementById("FnameIn").innerHTML = "Alphabets Only";
            return false;
        }

    }
}

function changeToUpper(){
    var x = document.getElementById('Fname');//.value.toUpperCase();
    x.value = x.value.toUpperCase();
}

function lnameValidation(){
    var regex2 = /^[a-zA-Z]*$/;
    if(document.f.lname.value == ""){
        document.getElementById('LnameIn').innerHTML = "please enter details here";
        return false;
    }
    else{
        if (regex2.test(document.f.lname.value)) {
  
            document.getElementById("LnameIn").innerHTML = "success";
            return true;
        } else {
            document.getElementById("LnameIn").innerHTML = "Alphabets Only";
            return false;
        }

    }
}


function emailValidation(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(document.f.email.value == ""){
        document.getElementById('EmailIn').innerHTML = "please enter email";
        return false;
    }else{
        if(filter.test(document.f.email.value)){
            document.getElementById('EmailIn').innerHTML = "valid email";
            return true;
        }
        else{
            document.getElementById('EmailIn').innerHTML = "Not a valid email";
            return false;
        }

    }

    
}


function mobileValidation(){
    var mob = /^[6-9]{1}[0-9]{9}$/;
    if(document.f.phone.value == ""){
        document.getElementById('PhoneIn').innerHTML = "Please enter phone number";
        return false;
    }
    if(mob.test(document.f.phone.value)){
        document.getElementById('PhoneIn').innerHTML = "success";
        return true;
    }else{
        document.getElementById('PhoneIn').innerHTML = "Not a valid Number";
        return false;
    }
}

function checkCategory(){
    if(document.getElementById('Experience').checked){
        document.getElementById('div7').style.visibility = 'visible';
        document.getElementById('div8').style.visibility = 'visible';
        document.getElementById('div9').style.visibility = 'visible';
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate()-1);
     //   console.log(fromDate.toISOString().split('T')[0]);
        document.getElementsByName("fdate")[0].setAttribute('max',fromDate.toISOString().split('T')[0]);
        var today = new Date().toISOString().split('T')[0];
        //console.log(today);
        document.getElementsByName("tdate")[0].setAttribute('max',today);
    
    
    }
    else{
        document.getElementById('div7').style.visibility = 'hidden';
        document.getElementById('div8').style.visibility = 'hidden';
        document.getElementById('div9').style.visibility = 'hidden';

        return true;
    }
}

function checkValid(){


    

        const x = document.getElementById("FromDate").value;
    
        
        const y = document.getElementById("ToDate").value;
      
       if(x==""){
        document.getElementById("FdateIn").innerHTML = "From date is empty!";
        document.getElementById("FromDate").style.border = "3px solid red";
       }
       if(y==""){
           document.getElementById("TdateIn").innerHTML = "To date is empty!";
           document.getElementById("ToDate").style.border = "3px solid red";
       }
       if(x!="" && y==""){
        document.getElementById("FdateIn").innerHTML = "";
        document.getElementById("TdateIn").innerHTML = "To date is empty!";
        document.getElementById("FromDate").style.border = "none";
        document.getElementById("ToDate").style.border = "3px solid red";
       }
       if(y!="" && x ==""){
        document.getElementById("TdateIn").innerHTML = "";
        document.getElementById("FdateIn").innerHTML = "From date is empty!";
        document.getElementById("FromDate").style.border = "3px solid red";
        document.getElementById("ToDate").style.border = "none";
    
       }
       if(x!="" && y!=""){
           var fromDate = new Date(x);
           var toDate = new Date(y);
    
           var dd1 = fromDate.getDate();
           var mm1 = fromDate.getMonth()+1;
           var yyyy1 = fromDate.getFullYear();
    
           var dd2 = toDate.getDate();
           var mm2 = toDate.getMonth()+1;
           var yyyy2 = toDate.getFullYear();
    
           var fd = dd1+"/"+mm1+"/"+yyyy1;
           var td = dd2+"/"+mm2+"/"+yyyy2;
    
          // console.log(fd);
         //  console.log(td);
           if(fromDate>=toDate){
               alert("From Date "+fd+ " should be less than To Date "+td);
               document.getElementById("FromDate").value = "";
               document.getElementById("ToDate").value = "";
               document.getElementById("FdateIn").innerHTML = "";
               document.getElementById("TdateIn").innerHTML = "";
             //  document.getElementById("output3").innerHTML = "";
               document.getElementById("FromDate").style.border = "none";
               document.getElementById("ToDate").style.border = "none";
    
               return false;
           }
           else{
            document.getElementById("FdateIn").innerHTML = "";
            document.getElementById("TdateIn").innerHTML = "";
            document.getElementById("FromDate").style.border = "none";
            document.getElementById("ToDate").style.border = "none";
    
    
          //  document.getElementById("output3").innerHTML = fd+" and "+td+" validation is success ";
           }
          
       }
    
}