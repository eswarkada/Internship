function checkDifference(){
    

    const x = document.getElementById("fromDate").value;
    
    const y = document.getElementById("toDate").value;
    console.log(x,y);

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
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output2").innerHTML = "To date is empty!";
    document.getElementById("fromDate").style.border = "none";
    document.getElementById("toDate").style.border = "3px solid red";
   }
   if(y!="" && x ==""){
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output1").innerHTML = "From date is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
    document.getElementById("toDate").style.border = "none";

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
       if(fromDate>=toDate){
           alert("from date "+ fd + " should be less than to date "+td);
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
        document.getElementById("output3").innerHTML = "";
        document.getElementById("fromDate").style.border = "none";
        document.getElementById("toDate").style.border = "none";

        var aa = moment(y);
        var bb = moment(x);
        var hyears = aa.diff(bb,'year');
        bb.add(hyears,'years');

        var hmonths = aa.diff(bb,'months');
        bb.add(hmonths,'months');


        var hdays = aa.diff(bb,'days');
       // console.log(hyears, hmonths,hdays);

       // var hhours = aa.diff(bb ,'hours');
       // var hmin = aa.diff(bb ,'minutes');
       // var hsec = aa.diff(bb ,'seconds');
       
       var diff = Math.abs(fromDate-toDate);
       var hhours = diff/36e5;

       var hmin = Math.round(diff/60000);
       var hsec = Math.abs(diff/1000);
      // var hhours = Math.floor(diff/3000)%24;
       //diff -= hhours * 3600;
      // var hmin = Math.floor(diff/60)%60;
      // diff -= hmin * 60;

        document.getElementById("output3").innerHTML = hyears + " Years <br> "+ hmonths + " Months <br> " + hdays + " Days <br> Total Hours : "+hhours+"<br> Total Minutes : "+hmin+"<br> Total Seconds : "+hsec;
       }
      
   }
}



