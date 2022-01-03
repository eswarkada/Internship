function checkDate(){
    

    const x = document.getElementById("fromDate").value;

    
    const y = document.getElementById("toDate").value;
  
   if(x==""){
    document.getElementById("output1").innerHTML = "From date is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
   }
   if(y==""){
       document.getElementById("output2").innerHTML = "To date is empty!";
       document.getElementById("toDate").style.border = "3px solid red";
   }
   if(x!="" && y==""){
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "To date is empty!";
    document.getElementById("fromDate").style.border = "none";
    document.getElementById("toDate").style.border = "3px solid red";
   }
   if(y!="" && x ==""){
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output1").innerHTML = "From date is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
    document.getElementById("toDate").style.border = "none";

   }
   if(x!="" && y!=""){
       var fromDate = new Date(x);
       var toDate = new Date(y);
       
       if(fromDate>=toDate){
           alert(fromDate+ " should be less than "+toDate);
           document.getElementById("fromDate").value = "";
           document.getElementById("toDate").value = "";
           document.getElementById("output1").innerHTML = "";
           document.getElementById("output2").innerHTML = "";
           document.getElementById("output3").innerHTML = "";
           document.getElementById("fromDate").style.border = "none";
           document.getElementById("toDate").style.border = "none";

           return false;
       }
       else{
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        document.getElementById("fromDate").style.border = "none";
        document.getElementById("toDate").style.border = "none";


        document.getElementById("output3").innerHTML = x+" and "+y+" validation is success ";
       }
      
   }
}