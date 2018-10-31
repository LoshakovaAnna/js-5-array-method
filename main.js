
var arr = [0,2,5,7,3,2,5,5,6];
var arr2= new Array();
var flag;

for (var i = 0; i < arr.length; i += 1) {
    document.write(arr[i] + ",    ");
}

for (let i = 0; i < arr.length; i++) {
    flag  = true;
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] == arr2[j])
            flag = false;
        
    }
    if (flag)
        arr2.push(arr[i]);
    
}
document.write("<br \/>  = не повторяющиеся элементы =  <br \/>");
for (var i = 0; i < arr2.length; i += 1) {
    document.write(arr2[i] + ",    ");
}