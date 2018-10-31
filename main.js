var string1 = prompt("ввудите строку для проверки");

var flag = true;

var j = string1.length;
for (let i = 0; i < string1.length; i++) {
    if (string1[i]!==string1[j-1-i]){
        flag = false;
    break;
    }
}
console.log(string1);

if (flag){ 
    alert("Да! Это полиндром");
}
else
    alert("Нет! Это не полиндром");
