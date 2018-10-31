
var obj1={name:"Vasia", age:"14"};
var obj2={name:"Kolia", age:"41"};
var obj3={name:"Sasha", age:"25"};
var obj4={name:"Ira", age:"10"};
var arr=[{name:"Vasia", age: 41}, {name:"Kolia", age: 5}, {name:"Sasha", age: 1}, {name:"Ira", age: 10}];

console.log(arr);

function sort (arr) {
    tmp = [];
    for (var i = 0; i < arr.length; i += 1) {
        tmp.push(arr[i]);
    }
    console.log('tmp', tmp);
    tmp.sort(function (a,b) {
        return (a.age<b.age)? -1 : 1;
    });
    console.log('tmp', tmp);
    return tmp;
}

/*for (var j = 0; j < arr.length -1; j += 1) {
 for (var i =0; i < arr.length - 1; i += 1) {

    if (arr[i].age > arr[i + 1].age) {
        var temp = Object.assign({}, arr[i]);
        arr[i] = Object.assign({}, arr[i + 1]);
        arr[i + 1] = Object.assign({}, temp);   
    }
}
}*/
/*
arr.sort(function (a,b) {
    return (a.age<b.age)? -1 : 1;
});
*/

console.log(sort(arr));