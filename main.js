
var arr = [0,2,5,7,3,2,5,5,6,10,1,1,1,1,];
var arr2= new Array();
var flag;

for (var i = 0; i < arr.length; i += 1) {
    document.write(arr[i] + ",    ");
}

for (let i = 0; i < arr.length; i++) {   
    if (!arr2.includes(arr[i]))
        arr2.push(arr[i]);    
}

document.write("<br \/>  = не повторяющиеся элементы =  <br \/>");
for (var i = 0; i < arr2.length; i += 1) {
    document.write(arr2[i] + ",    ");
}