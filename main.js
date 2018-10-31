
var arr = [0,2,5,7,3,2,5,5,6];
var arr2= new Array();
var flag;

console.log(arr);

console.log("before " );//+ arr2);

console.log(arr2);
for (let i = 0; i < arr.length; i++) {
    flag  = true;
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] == arr2[j])
            flag = false;
        
    }
    if (flag)
        arr2.push(arr[i]);
    
}
console.log("after " );
console.log(arr2);