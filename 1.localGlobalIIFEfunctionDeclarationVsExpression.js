//1.local variable in a function
function addUser(){
    var name = 'asif';
    console.log(name);
}

addUser();


//2.Global variable
var name1 = 'Global sakib';
function addName() {
    console.log(name1);
}
addName();
console.log(name1);

//3. IIFE

(function secondName() {
    console.log('iife');
})();

//4. Function expression:
var toDo = function(task) { };