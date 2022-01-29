function checkDate(){
    

    const x = document.getElementById("fromDate").value;

    
    const y = document.getElementById("toDate").value;
  
   if(x==""){
    document.getElementById("output1").innerHTML = "From date is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
    document.getElementById("output3").innerHTML = '';
   }
   if(y==""){
       document.getElementById("output2").innerHTML = "To date is empty!";
       document.getElementById("toDate").style.border = "3px solid red";
       document.getElementById("output3").innerHTML = '';
   }
   if(x!="" && y==""){
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "To date is empty!";
    document.getElementById("fromDate").style.border = "none";
    document.getElementById("toDate").style.border = "3px solid red";
    document.getElementById("output3").innerHTML = '';
   }
   if(y!="" && x ==""){
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output1").innerHTML = "From date is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
    document.getElementById("toDate").style.border = "none";
    document.getElementById("output3").innerHTML = '';

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


        document.getElementById("output3").innerHTML = fd+" and "+td+" validation is success ";
       }
      
   }
}