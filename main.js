var string = prompt("введите строку для проверки");
var string1 = string.replace(/ /g, '');

var isPolynom = true;

var j = string1.length;
for (let i = 0; i < j/2; i++) {
    if (string1[i]!==string1[j-1-i]){
        isPolynom = false;
    break;
    }
}
console.log(string1);

if (isPolynom){ 
    alert("Да! Это полиндром");
}
else
    alert("Нет! Это не полиндром");

