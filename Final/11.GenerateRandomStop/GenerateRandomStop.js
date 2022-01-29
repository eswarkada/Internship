var interval;
function getNumbers() {
  interval = setInterval(randomGenerate, 1000);
}
function randomGenerate() {
  let min = Math.ceil(document.getElementById("frmNum").value);
  let max = Math.floor(document.getElementById("toNum").value);
  if (min > max) {
    alert("min is greater than max");
    document.getElementById("t1").innerHTML = "";
    document.getElementById("frmNum").value = "";
    document.getElementById("toNum").value = "";
    clearInterval(interval);

    //   document.getElementById('gNum').value = "";
    return false;
  } else {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("t1").innerHTML += random + ",";
  }
}
function stopNum() {
  clearInterval(interval);
}
function clearValues() {
  document.getElementById("t1").innerHTML = "";
  document.getElementById("frmNum").value = "";
  document.getElementById("toNum").value = "";
  clearInterval(interval);
}

/*



var a,b;
function getNumbers(){
    const min = document.getElementById('frmNum').value;
    const max = document.getElementById('toNum').value;
    a = min;
    b = max;
    console.log(a,b);

    //   console.log(fromNum,toNum);
    //   console.log(fromNum);
    //   let gNum = document.getElementById('gNum').value;
     //  console.log(toNum1,gNum,fromNum);
       if(min>=max){
         alert("min is greater than max");
         document.getElementById('t1').value = "";
         document.getElementById('frmNum').value = "";
         document.getElementById('toNum').value = "";
      //   document.getElementById('gNum').value = "";
         return 0;
       }
       
       else{
           setInterval(displayRandom,1000);
        }
   


}
   

function displayRandom(){
    let num1  = Math.floor(Math.random() * (b - a+1) + a);

    document.getElementById('t1').innerHTML += num1+",";
}

function stopNum(){
    clearInterval(displayRandom);
}

*/
