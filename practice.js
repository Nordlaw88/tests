for (var d = 0; d < 3; d++) {
   setTimeout(function() {
      console.log(d);
   }, 100);
} //output 3,3,3



for (var d = 0; d < 3; d++) {
   (function(d) {
      setTimeout(function() {
         console.log(d);
      }, 100);
   })(d);
} //output 0,1,2


var employee = {
  name: {
    first: "John",
    last: "Doe"
  },
  age: 30,}

function printName() {
    console.log(employee.name.first + " " + employee.name.last);
  }printName();

function deleteInfo(key) {   
    delete employee.name[key];
    console.log(employee.name);
   }
deleteInfo("last");

