function verifyNum(){
    let numbers = document.getElementById('pnum').value;

    document.getElementById('pnum').style.border = "3px solid black";
    if(numbers==""){
        document.getElementById('pnum').style.border = "2px solid red";
        alert("Enter Numbers");
    }
    let sep1 = numbers.split(',');
    let len = sep1.length;
    let arr1 = [];
    for(let i = 0;i<len;i++){
        let a = sep1[i].trim();
        arr1[i] = a;
    }
    let validNum = [];
    let invalidNum = [];

    for(let j=0;j<arr1.length;j++){
        //first you check the element length 10, if it's equal then go to inner codition or else invalid number
        if(arr1[j].length == 10){
            //check the element starting index is equal to 9,8,7 and 6
            if(arr1[j].substring(0,1) == '9' || arr1[j].substring(0,1) == '8'|| arr1[j].substring(0,1) == '7'|| arr1[j].substring(0,1) == '6' ){
                validNum.push(arr1[j]);
               // console.log(arr1[j]);
    
            }
        }
        else{    
            // just we push invalid element into array(invalidNum), except null values.
            if(arr1[j]!=''){
                invalidNum.push(arr1[j]);
            }
        }
    }

    document.getElementById('validNum').innerHTML ="Valid Numbers : " + validNum;
    document.getElementById('invalidNum').innerHTML = "Invalid Numbers : " + invalidNum;
//console.log(numbers);
}