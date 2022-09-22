// 1.Display to monitor
console.log("Hello World");
// 2.Di chuyen giua cac thu muc
// ./ - Cung cap
// ../ - R ngoai moi cap
// /ten_folder/ten_file - Di chuyen vao foler
// 3.Tao file index.html -> Tao cau truc co ban file
// index - (!) + tab
// 4.Ket noi file app.js voi index.html thong qua cap the script:src voi src="" la duong dan
// 5.Variable - Bien
// Tu khoa + ten bien = Gia tri khoi tao
// (var/let/const)
// Scope - Pham vi hoat dong cua bien
// Khai bao bien
// let fname = "Peter";
// console.log(fname);

// Gan lai gia tri cho bien do
// fname = "Peter Parker";
// console.log(fname);

// Dấu "=" là phép gán
// 6. Nhận input từ bàn phím
// console.log(prompt("Please input your name?"));

// Exercise
// Nhap hai so a va b
// Tinh tong hai so a va b roi in ra ma hinh
// let a = prompt("Please input a");//String
// let b = prompt("Please input b");//String

// console.log(Math.floor(a)+Math.floor(b));
// console.log(parsenInt(a)+parsenInt(b));
// console.log((+a)+(+b));
// console.log(Number(a)+Number(b));


//let sum = a+b;
//console.log(sum);//console.log(a+b)

// Kieu du ieu - data types
// String - chuỗi
// Number - Số

// Primitive types and Object types
// Primitive types: String, Number
// 1. String
// let fname1 = "Peter Parker";

// let fname2 = 'Steve Roger';

// let fname3 = `Tony Stark`;

// console.log(fname1);
// console.log(fname2);
// console.log(fname3);

// 2. Nối chuỗi - "+"
// let sentence = "Hello \n" + fname1 + " and " + fname2 + ", this is " + fname3;
// console.log(sentence)
// \n xuong dong(new line)

// 3. Template string
// Backtick ``
// let sentence2 = `Hello 
// ${fname1} and ${fname2}, this is ${fname3}`;
// console.log(sentence2);

// 4. Number
let number1 = 20;
let number2 = 30;
// Toan tu toan hoc (+,-,*,/)
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 **number2);
let number3 = 20.55555;
console.log(number3);
