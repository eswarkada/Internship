let bt1 = document.getElementById("btn1");
let bt2 = document.getElementById("btn2");
let bt3 = document.getElementById("btn3");


function showColor(){

    let ColorArray = ["Red","Orange","Green","Blue","Yellow","Aqua","Pink","Black","Erin","Violet"];

    let c1 = ColorArray[Math.floor(Math.random()*ColorArray.length)];
    let c2 = ColorArray[Math.floor(Math.random()*ColorArray.length)];
    let c3 = ColorArray[Math.floor(Math.random()*ColorArray.length)];
    document.getElementById('btn1').style.backgroundColor = c1;
    document.getElementById('btn2').style.backgroundColor = c2;
    document.getElementById('btn3').style.backgroundColor = c3;


}
function stopColor(){
    document.getElementById('btn1').style.backgroundColor = "";
    document.getElementById('btn2').style.backgroundColor = "";
    document.getElementById('btn3').style.backgroundColor = "";

}