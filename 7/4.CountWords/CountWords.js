function CountAll(){
    let words = document.getElementById('textArea1').value;
    let count = 0;
    let split = words.split(' ');
    console.log(split);
    for(let i = 0;i<split.length;i++){
        if(split[i] != ""){
            count +=1;
        }
    }
    document.getElementById('totalWords').innerHTML = count;
}