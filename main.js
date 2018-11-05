var string = prompt("введите строку для проверки");
var stringPreparedChecking= string.replace(/ /g, '').toLowerCase();

var isPolynom = true;

var j = stringPreparedChecking.length;
for (let i = 0; i < j/2; i++) {
    if (stringPreparedChecking[i]!==stringPreparedChecking[j-1-i]){
        isPolynom = false;
    break;
    }
}

if (isPolynom){ 
    alert("Да! Это полиндром");
}
else
    alert("Нет! Это не полиндром");

