function countAll() {
  let str1 = document.getElementById("t1").value;
  let trimSpaces = str1.split(" ").length - 1;
  document.getElementById("trimcount").innerText = trimSpaces;

  var spcRemove = str1.replace(/(^\s*)|(\s*$)/gi, "");
  spcRemove = spcRemove.replace(/[ ]{2,}/gi, " ");
  spcRemove = spcRemove.replace(/\n /, "\n");
  let firstWord = spcRemove.split(" ")[0];
  let lastWord = spcRemove.slice(spcRemove.lastIndexOf(" ") + 1);
  document.getElementById("focc").innerText = firstWord;
  document.getElementById("locc").innerText = lastWord;

  const lowWords = [];
  const myArray1 = str1.split(" ");
  for (let i = 0; i < myArray1.length; i++) {
    if (myArray1[i] != "") {
      if (myArray1[i] === myArray1[i].toLowerCase()) {
        lowWords.push(myArray1[i]);
      }
    }
  }
  const upWords = [];
  const myArray2 = str1.split(" ");
  for (let i = 0; i < myArray2.length; i++) {
    if (myArray2[i] != "") {
      if (myArray2[i] === myArray2[i].toUpperCase()) {
        upWords.push(myArray2[i]);
      }
    }
  }

  if (upWords == null) {
    document.getElementById("upcount").innerText = 0;
  } else {
    document.getElementById("upcount").innerText = Array.from(upWords).length;
  }
  if (lowWords == null) {
    document.getElementById("locount").innerText = 0;
  } else {
    document.getElementById("locount").innerText = Array.from(lowWords).length;
  }

  if (spcRemove == "") {
    document.getElementById("cbcount").innerText = 0;
  } else {
    const totalWords = spcRemove.split(" ");
    const count = totalWords.length;
    const combinedWords = count - (upWords.length + lowWords.length);
    document.getElementById("cbcount").innerText = combinedWords;
  }
}
//   const uppperCaseWords = str1.match(/(\b[A-Z]['A-Z]+|\b[A-Z]\b)/g);
//   console.log(uppperCaseWords);
//   if (uppperCaseWords == null) {
//     document.getElementById("upcount").innerText = 0;
//   } else {
//     document.getElementById("upcount").innerText =
//       Array.from(uppperCaseWords).length;
//   }

//   const lowerCaseWords = str1.match(/(\b[a-z]['a-z]+|\b[a-z]\b)/g);
//   console.log(lowerCaseWords);
//   if (lowerCaseWords == null) {
//     document.getElementById("locount").innerText = 0;
//   } else {
//     document.getElementById("locount").innerText =
//       Array.from(lowerCaseWords).length;
//   }
// }

// \b - start of the word
// [A-Z] - Any character between capital A and Z
// [A-Z]+ - Any character between capital A and Z, but for one of more times and without interruption
// | - OR
// \b - start of the word
// [A-Z] - Any character between capital A and Z
// \b - end of the word
// g - global (run multiple times till string ends, not just for one instance)
// Essentially, the right side of OR handles single uppercase letters which are words in themselves like “I” and “A”. The left side handles the stream.
