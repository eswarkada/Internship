function getNumbers(){

 //   console.log(fromNum,toNum);
    let min = parseInt(document.getElementById('frmNum').value);
 //   console.log(fromNum);
    let max = parseInt(document.getElementById('toNum').value);
    let gNum = document.getElementById('gNum').value;
  //  console.log(toNum1,gNum,fromNum);
    if(min>max || gNum <=0){
      alert("min is greater than max");
      document.getElementById('t1').value = "";
      document.getElementById('frmNum').value = "";
      document.getElementById('toNum').value = "";
      document.getElementById('gNum').value = "";
      return 0;
    }
    
    else{
    let RanNum = [];
    for(let i = 0;i<gNum;i++){
      //  let num1 = Math.random() * (toNum1 - fromNum + 1) + fromNum;

        RanNum.push(Math.floor(Math.random() * (max - min+1)) + min);
    //console.log(Math.floor(num1));
       // RanNum.push(Math.floor(num1));
    }
    document.getElementById('t1').innerHTML = "";
  //  console.log(RanNum);
    for(let j =0;j<RanNum.length;j++){
    document.getElementById('t1').innerHTML += RanNum[j]+", ";
  }
}
}
