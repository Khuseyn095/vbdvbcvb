//Постфиксная и префиксная формы// 
 
let a = 1, b = 1; 
 
let c = ++a;  
let d = b++;  
 
console.log(a); // Результат: 2 
console.log(b); // Результат: 2 
console.log(c); // Результат: 2 
console.log(d); // Результат: 1 
 
// Результат присваиванияЧему будут равны переменные a и x после исполнения кода в примере ниже? // 
 
let a = 2; 
let x = 1 + (a *= 2); 
 
console.log(a); // Результат: 4 
console.log(x); // Результат: 5 
 
// Преобразование типов. Какой результат будет у выражений ниже?// 
 
console.log(" " + 1 + 0);        // Результат: "10" 
console.log(" " - 1 + 0);        // Результат: -1 
console.log(true + false);       // Результат: 1 
console.log(6 / "3");            // Результат: 2 
console.log("2" * "3");           // Результат: 6 
console.log(4 + 5 + "px");       // Результат: "9px" 
console.log("$" + 4 + 5);        // Результат: "$45" 
console.log("4" - 4);             // Результат: 0 
console.log("4px" - 2);           // Результат: NaN 
console.log("    -9    " + 5);   // Результат: "    -9    5" 
console.log("    -9    " - 5);   // Результат: -14 
console.log(null + 1);           // Результат: 1 
console.log(undefined + 1);      // Результат: NaN 
console.log("    \t \n " - 2);   // Результат: -2 
 
 
////Работа с переменными


//(1)
let num = 3;
alert(num);


//(2)
let a = 10;
let b = 2;

alert("Сумма: " + (a + b));
alert("Разность: " + (a - b));
alert("Произведение: " + (a * b));
alert("Частное: " + (a / b));


//(3)
let c = 15;
let d = 2;
let result = c + d;
alert(result);


//(4)
let a = 10;
let b = 2;
let c = 5;

alert("Сумма: " + (a + b + c));



//(5)
let a = 17;
let b = 10;

let c = a - b;
let d = 7;
let result = c + d;

alert(result);


//Работа со строками

//1
let str1 = 'Привет, ';
let str2 = 'Мир!';
alert(str1 + str2);


//2
let str1 = 'Привет, ';
let str2 = 'Мир!';
alert(str1 + str2);


//3
let name = 'Хусейн'; 
alert('Привет, ' + name + '!');


//4
let age = 15; 
alert('Мне ' + age + ' лет!');


////Функция prompt

//1
let userName = prompt('Введите ваше имя:');
alert('Ваше имя ' + userName + '!');

//2
let userNumber = prompt('Введите число:');
let square = userNumber * userNumber;
alert('Квадрат числа ' + userNumber + ' равен ' + square);


////Обращение к символам строки

//1
let str = 'abcde';
alert(str[0]); // символ 'a'
alert(str[2]); // символ 'c'
alert(str[4]); // символ 'e'


//2
let num = '12345';
let product = 1;

for (let i = 0; i < num.length; i++) {
  product *= parseInt(num[i]);
}

alert('Произведение цифр числа ' + num + ' равно ' + product);



////Практика

//1
// Количество секунд в часе
let secondsInHour = 60 * 60;
console.log('Секунд в часе: ' + secondsInHour);

// Количество секунд в сутках
let secondsInDay = secondsInHour * 24;
console.log('Секунд в сутках: ' + secondsInDay);

// Количество секунд в месяце (приблизительно)
let secondsInMonth = secondsInDay * 30;
console.log('Секунд в месяце: ' + secondsInMonth);


//2
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

console.log('Текущее время: ' + hour + ':' + minute + ':' + second);


//3
let number = 5;
let square = number ** 2; // Возведение в квадрат
console.log('Квадрат числа ' + number + ' равен ' + square);


////Работа с присваиванием и декрементами

//1
var num = 47;
num += 1;
num -= 18;
num *= 10;
num /= 15;
alert(num);


//2
var num = 10;
num++;
num++;
num++;
alert(num);
