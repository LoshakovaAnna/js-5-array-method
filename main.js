
var obj1={name:"Vasia", age:"14"};
var obj2={name:"Kolia", age:"41"};
var obj3={name:"Sasha", age:"25"};
var obj4={name:"Ira", age:"10"};
var arr=[{name:"Vasia", age: 41}, {name:"Kolia", age: 5}, {name:"Sasha", age: 1}, {name:"Ira", age: 10}];

for (var i = 0; i < arr.length; i += 1) {
    document.write(arr[i].age + ",    ");
}

var arr2= arr.sort(function (a,b) {
    return (a.age<b.age)? -1 : 1;
});


console.log(arr2);

document.write( " after sort:    ");
for (var i = 0; i < arr2.length; i += 1) {
    document.write(arr2[i].age + ",    ");
}