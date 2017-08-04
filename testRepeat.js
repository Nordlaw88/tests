var arr = [1, 2, 3, 8, 9, 1, 3, 6, 6, 1, 2, 6];

//works but not efficient
function doesRepeat(list){
    var i=0;
    list.sort();
    var j=1;

    //for(i=0;i<list.length-1;i++){
      while(list[i]) { 
        if(list[i]===list[i+1]){
            console.log(list[i] + " repeats");          
        }
        i++;
    }


}
//repeatNum(arr);
//repeated in the same array
function repeatNum(list){
    list.sort();
    for(var i = 0, j = 1; j < list.length; j++, i++){
        if( list[i] === list[j]){
            console.log(list[i] + "repeated");
            while(j < list.length && list[i] === list[j]) j++;
            i = j - 1;
        }
    }
}

//findDifference in arrays

var a1 = [3, 6, 8, 12, 4];
var a2 = [6, 8, 12, 4];

function diffArray(arr1, arr2) {
  var newArr = [];
  var myArr = arr1.concat(arr2);
  
    newArr = myArr.filter(function(item){
      return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0;
    });
   console.log(newArr);
}

//diffArray(a1, a2);  

//fibSequence(1);

function fibSequence (howFar){
    j=0;
    var k=1;
    seq=[j,k];
   
    if(howFar===1){
        seq.pop();
        //console.log(seq);
    }
    else if(howFar===2){
        //console.log(seq);
    }

   for(var i=2;i<howFar;i++){
        seq.push(m=j+k);
        j=k;
        k=m;
        }
    
    console.log(seq);
}


function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
    console.log(n + " is not prime") 
    return false; 
    }
    else
      divisor++;
  }
  console.log(n + " is prime")
  return true;

}

//isPrime(35);

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
//myObject.func();

function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
        return 2;
    }
}
//test();
/*
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};
 
console.log(obj.prop.getFullname());
 
var test = obj.prop.getFullname;
 
console.log(test());*/


function greatestCommonDivisor(a, b){
   if(b == 0)
     return a;
   else 
     return console.log(greatestCommonDivisor(b, a%b));
}

//greatestCommonDivisor(45,170 );
     

 
 function mergeSortedArray(a, b){
     for(i=0; i<b.length; i++){
         a.push(b[i]);
     }
    
     a.sort();
     console.log(a);
 }
     //mergeSortedArray([2,5,6,9,12], [1,2,3,29]);



 function swapNumb(a, b){
  console.log('before swap: ','a: ' + a + ' b: '+ b);
  b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: a: ' + a + ' b: ' + b);  
}

//swapNumb(34, 22);

function reverseString(str){
    console.log(str);
    newStr="";
    for(i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    console.log(newStr);
}

//reverseWords('This is a string');

function reverseWords(str){
  return console.log(str.split(' ').reverse());
}
   

function firstNonRepeatChar(str){
  var len = str.length,
      char, 
      charCount = {};
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       return console.log(j);
  }
}  

//firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
//"f"


function verifyPalindrome(word){
    var newWord="";
    word = word.toLowerCase();

    for(i=word.length-1;i>=0;i--){
        newWord+=word.charAt(i);
    }
    //console.log(newWord);

    if(newWord===word){   
        console.log(word+ " is a palindrome");
    }
    else{
        console.log("False");
    }
}

//verifyPalindrome("birdbath");
 //verifyPalindrome("racecar");
 
 
function rand5(){
   return 1 + Math.random() * 4;
}

function rand7(){
  return 5 + ((rand5() / 5) * 2);
}

//console.log(rand5());
//console.log(rand7());

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(5,7));