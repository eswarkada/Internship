var names = [];


//var nameInput = document.getElementById('addName');
function addNames(){
    if(document.getElementById('addName').value != ""){
        names.push(document.getElementById('addName').value);
       // names.push(inp1);
        alert("Successfully added "+names[names.length-1]);//+inp1);
        document.getElementById('addName').value = "";}
        else{
            alert("Please enter names");
        }
      //  clearAndShow();
    
}

function displayNames(){
    document.getElementById('addName').value = "";

    var box = document.getElementById('div3');

  //  nameInput.value = "";
    box.innerHTML = "";

    box.innerHTML += "Names : " + names.join(" , ") + "<br/>";


}


function deleteDupNames(){
  let finalArr = names.reduce((result, element)=>{
  let normalize = x => typeof x === 'string' ? x.toLowerCase() : x;

  let normalized = normalize(element);
  if(result.every(otherElement => normalize(otherElement) !== normalized))
    result.push(element);

  return result;
}, []);
alert("Successfully deleted ");
console.log(finalArr);

    document.getElementById('addName').value = "";

    var box = document.getElementById('div3');

  //  nameInput.value = "";
    box.innerHTML = "";

    box.innerHTML += "Names : " + finalArr.join(" , ") + "<br/>";

}