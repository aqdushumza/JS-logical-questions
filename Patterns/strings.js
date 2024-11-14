function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    console.log(count);
}

var str1 = "Hello"; 
// findStringLength(str1); 

function copyString(str) {
    var str2 = '';
    for (let i = 0; str[i] !== undefined; i++) {
        str2 += str[i];
    }
    console.log(str2);
}

// copyString("98iuu");

function concatSring(str1 , str2){
    var str3 ='';
    str3 = str1 + str2;
    console.log(str3)
}

// concatSring("aqua" , "man");

function compareString(str1 , str2){
    if(str1.length !== str2.length){
        console.log(" not equal");
    }
    else{
        for(let i = 1 ; i <= str1.length; i++){
            if(str1[i] != str2[i]){
                console.log("not equal")
                break;
            }
        }
        console.log("yes strings are equal")
    }
}

compareString("yuo" , 'yuo');

function toUppercase(str){
    
}
function toUpperCase(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(charCode - 32);
      } else {
        result += str[i];
      }
    }
    
    return result;
  }
  
//   console.log(toUpperCase("helLO"));

  function tolowerCase(str){
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode >= 65 && charcode <= 90) {
            result += String.fromCharCode(charcode + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

// console.log(tolowerCase("HHUMM")); 

function toggle(str){
    let result = '';
    for(let i = 0 ; i < str.length ; i ++){
        let charCode = str.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            result+= String.fromCharCode(charCode + 32)
        }
        else if( charCode >= 97 && charCode <=122){
            result+=String.fromCharCode(charCode - 32);
        }
    }
    return result;
}
console.log(toggle("HumzA"));

function count(str){
    let alph=0 , digits =0 , special=0;
    for(let i = 0 ;  i < str.length ; i++){
        let charCode = str.charCodeAt(i);
         if(charCode >= 65 && charCode <= 90){
            alph++;
        }
        else if( charCode >= 97 && charCode <=122){
            alph++;
        }
        else if(charCode >=48 && charCode <=57){
            digits++;
        }else{
            special++;
        }
    }
    console.log(`alphabets are ${alph} digits are ${digits} and special character are ${special}`);
}
count("45hhH@@@@@")

function countvowel(str){
    let vowel = 0 , consonant = 0;
    for(let i = 0; i < str.length ; i++){
        let charCode = str.charCodeAt(i);
        if (charCode === 97 || charCode === 101 || charCode === 105 || charCode === 111 || charCode === 117){
            vowel++;
        }else{
            consonant++;
        }
    }
    console.log(`vowels are ${vowel} and consonant are ${consonant}`);
}
countvowel('abbaec')

function countWords(str){
  let count = 0;
  let inWord = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n') {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  console.log(count);
}

// countWords("hello my name is humza")

function reverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    console.log(reversedStr);
}
reverse("azmuh");

function checkPalindrome(str){
    let l= 0 , h = str.length -1; let check= true;
    while(l<h){
        if(str[l] === str[h] ){
            l++;h--;
        }else{
            console.log("not a palindrome ");
            check = false
            break;
        }
    }
    if(check !== false){
        console.log("yes it is a palindrome")
    }
}
checkPalindrome('avbbva')

function firstOccurence(str , char){
    let count = 1;
    for(let i = 0 ; i < str.length ; i++){
     
        if(str[i] !== char){
            count++
        }else
            break;
    }
    console.log(`first occurence of ${char} is ${count}`)
}

    
firstOccurence("humazau", 'a');


function lastOccurrence(str, char) {
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== char) {
            count++;
        } else {
            console.log(`Last occurrence of '${char}' is at index ${i+1}`);
            break;
        }
    }
}
lastOccurrence("humazanjnnanu", 'a');

function searchOccurrences(str, ch) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            console.log(`Character '${ch}' found at position ${i}`); 
        }
    }

}


searchOccurrences('humzaghhahgha', 'a');

function countOcurrences(str , ch){
    let count = 0;
    for(let i = 0 ; i < str.length ; i ++){
        if(str[i] === ch){
            count++;
        }
    }
    console.log(`no of occurences of ${ch} is ${count}`);
}
countOcurrences("humzaujhu" , 'u')

function highestfrequency(str) {
    let obj = {};
    
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    
    let maxFreq = 0;
    let maxChar = '';
    for (let char in obj) {
        if (obj[char] > maxFreq) {
            maxFreq = obj[char];
            maxChar = char;
        }
    }
    
    return maxChar;

}

console.log(highestfrequency('hhuuunnnnnmmza'))


function lowestfrequency(str) {
    let obj = {};
    
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    
    let minFreq = obj[str[0]];
    let minChar = '';
    for (let char in obj) {
        if (obj[char] < minFreq ) {
            minFreq = obj[char];
            minChar = char;
        }
    }
    
    return minChar;

}
console.log(lowestfrequency("hhuiiiggoo"));

function countFrequency(str){
    let obj ={};
    for(let i = 0 ; i< str.length ; i++){
        obj[str[i]] =(obj[str[i]] || 0) + 1;
    }
    for(let i in obj){
        console.log(`${i} occured ${obj[i]} times`)
    }
}
// countFrequency("hhuummmmza")

function removefirstOccurence(str , ch){
    for( let i =  0 ; i < str.length ; i++){
        if(str[i] === ch){
            newstring = str.replace(str[i], '')
            break;
        }
    }
    console.log(newstring)
}
// removefirstOccurence("humzah", 'h')

function removelastOccurence(str , ch){
    let check, result='';
    for( let i = str.length - 1  ; i >=0 ; i--){
        if(str[i] === ch){
            check = i;
            break;
        }
    }
    for(let i = 0 ; i < str.length; i++){
        if(i !== check){
        result+=str[i];}
    }
    console.log(result)

}
//removelastOccurence("hhhumzaxcx", 'x')

function removeallOccurences(str , ch){
    for(let i = 0 ; i< str.length ; i++){
        if(str[i] === ch){
            newstring = str.replaceAll(str[i], "")
        }
    }
    console.log(newstring)
}
removeallOccurences('huxmxza','x' )

function removeAllRepeated(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    let newstring = str;

    
    for (let i in obj) {
        if (obj[i] > 1) {
            newstring = newstring.replaceAll(i, ''); 
        }
    }

    console.log(newstring);
}

removeAllRepeated("vvhumxxza");

function replacechar(str, ch1, ch2) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch1) {
            result += ch2;
        } else {
            result += str[i];
        }
    }
    console.log(result)

}
replacechar("humna",'n','z')

function replaceCharLastOccurrence(str, ch1, ch2) {
    let lastIndex = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch1) {
            lastIndex = i;
        }
    }
    

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i === lastIndex) {
            result += ch2;
        } else {
            result += str[i];
        }
    }
    
    console.log(result);
}

replaceCharLastOccurrence("humnzazucc", 'u', 'j');

function replaceallCharacter(str, ch1, ch2) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch1) {
            result += ch2;
        } else {
            result += str[i];
        }
    }
    console.log(result)
}

replaceallCharacter('hhumaza','h','x')

function firstWord(str1, str2) {
    for (let i = 0; i <= str1.length - str2.length; i++) {
      let found = true;
      for (let j = 0; j < str2.length; j++) {
        if (str1[i + j] !== str2[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i+1;
        
      }
    }
    return -1;
  }
  
  console.log(firstWord('my name is humza', 'humza'))

  function lastword(str1, str2) {
    for (let i = str1.length - str2.length; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}


  console.log(lastword('my humza humza name is humza', 'humza'))


  function lastword(str1, str2) {
    const words = str1.split(' ');
    let lastIndex = -1;
    let currentIndex = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === str2) {
            lastIndex = currentIndex;
        }
        currentIndex += words[i].length + 1;
    }

    return lastIndex;
}

console.log(lastword('my humza humza name is humza', 'humza'));


function searchallword(str1, str2){
    let arr = str1.split(" ");
    let index = 1;
    for(let i = 0 ; i <arr.length ; i ++){
        
        if(arr[i] === str2){
            
            console.log(`word occur at index  ${index}`);
        }
        index += arr[i].length + 1;
    }
    
}

searchallword('my humza humza name is humza', 'humza');

function countallword(str1, str2){
    let count = 0;
    let arr = str1.split(' ');
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == str2){
            count++
        }
    }
    console.log(`no of words are ${count}`);
}

countallword('my humza humza name is humza', 'humza');

function removefirstword(str1 , str2){
    newstring = str1.replace(str2, '')
    console.log(newstring)
}

removefirstword('my humz humza name is humza', 'humza');
console.log('      ')

function removefirstwordnotinbuild(str1, str2){
    let arr = str1.split(" ");
    let index = 0; let found = false
    for(let i = 0 ; i <arr.length ; i ++){
        let newstring= ''
        if(arr[i] === str2 && found === false){
            found = true;

        }else{
        newstring+= arr[i] +' '}
        
    }
    console.log(newstring)
    
}

removefirstwordnotinbuild('my humz humza name is humza', 'humza');

function removelastwordnotinbuild(str1, str2) {
    let arr = str1.split(" ");
    let found = false;
    let newString = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        
        if (arr[i] === str2 && found === false) {
            found = true; 
            continue;
        }
        newString = arr[i] + " " + newString;
    }

    console.log(newString);
}

removelastwordnotinbuild('my humz humza name is humza', 'humza')

function removeallwords(str1, str2){
    let arr = str1.split(' ')
    let newstring = ''
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== str2){

            newstring+=arr[i]+' ';
        }
    }
    console.log(newstring)
}
removeallwords('my humz humza name is humza', 'humza')
function removeleadingspace(str) {
    let alpha = false;
    let newstring = ''; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            alpha = true;
        }

        if (alpha === true) {
            newstring += str[i];
        }
    }
    console.log(newstring);
}

removeleadingspace("    humxs");

function removetrailspace(str){
    let alpha = false;
    let newstring = ''; 
    for (let i = str.length -1 ; i >= 0 ; i--) {
        if (str[i] !== " ") {
            alpha = true;
        }

        if (alpha === true) {
            newstring = str[i] + newstring;
        }
    }
    console.log(newstring);

}
removetrailspace("humza    ")
function removeleadingandtrailspace(str){
    let alpha = false;
    let newstring = ''; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            alpha = true;
        }

        if (alpha === true) {
            newstring += str[i];
        }
    }
 removetrailspace(newstring)

}
removeleadingandtrailspace('  humza   ')

function lastquestion(str){
    let newString =''
    for(let i =0 ; i < str.length ; i++){
        if(str[i] !== " "){
            newString+= str[i];
        }
    }
    console.log(newString)
}

lastquestion("  humza is a good boy")