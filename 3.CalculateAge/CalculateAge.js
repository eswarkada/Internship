function calculateAge(){
    

    const x = document.getElementById("fromDate").value;
    
    const y = moment().format('YYYY-MM-DD');
    //const y = document.getElementById("toDate").value;
  //  console.log(x,y);

   if(x==""){
    document.getElementById("output1").innerHTML = "Date of Birth is empty!";
    document.getElementById("fromDate").style.border = "3px solid red";
   }
  
 
   if(x!=""){
       var fromDate = new Date(x);
       var toDate = new Date(y);
       
       if(fromDate>=toDate){
           alert(fromDate+ " should be less than "+toDate);
           document.getElementById("fromDate").value = "";
           document.getElementById("output1").innerHTML = "";
           document.getElementById("output2").innerHTML = "";
           document.getElementById("fromDate").style.border = "none";

           return false;
       }
       else{
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        document.getElementById("fromDate").style.border = "none";

        var aa = moment(y);
        var bb = moment(x);
        var hyears = aa.diff(bb,'year');
        bb.add(hyears,'years');

        var hmonths = aa.diff(bb,'months');
        bb.add(hmonths,'months');


        var hdays = aa.diff(bb,'days');
       // console.log(hyears, hmonths,hdays);

        var hhours = aa.diff(bb ,'hours');
        var hmin = aa.diff(bb ,'minutes');
        var hsec = aa.diff(bb ,'seconds');

        document.getElementById("output2").innerHTML = hyears + " Years <br> "+ hmonths + " Months <br> " + hdays + " Days ";
       }
      
   }
}



