// Câu hỏi
// Câu 1: Trong Javascript, trong trường hợp nào khi bạn đặt tên biến thì sẽ bị thôngbáoSyntaxError ?
// 1. Tên biến chỉ được khởi tạo một lần duy nhất, nếu lặp lại việc khởi tạo biến đó thì sẽ báo lỗi
// let number1 = 20;
// let number1 = 30;
// 2. Có một danh sách các từ dành riêng, không thể được sử dụng làm tên biến 
// vì chúng được sử dụng bởi chính ngôn ngữ
// let let = 5;
// 3. sử dụng "use strict" sau đó gán giá trị cho biến mà không cần khai báo biến
// "use strict";
// num = 5;
// console.log(num);
// Câu 2: Trong Javascript làm thế nào để kiểm tra kiểu dữ liệu?
// Sử dụng cú pháp typeof(variable) để kiểm tra kiểu dữ liệu của biến
// let number = "20";
// console.log(typeof(number));
// Câu 3: Có bao nhiêu kiểu dữ liệu cơ bản trong Javascript, kể tên?
// Có 8 loại dữ liệu trong Javascript
// 1. String
// 2. Number
// 3. Boolean
// 4. bigInt
// 5. Null
// 6. undefined
// 7. Object
// 8. Symbol
// Bài tập
// Bài 2: Khai báo các biến sau
// Một biến có tên là msg có giá trị (value) là một string có nội dung ‘Rikkei isawesome’, 
// sau đó in nó ra màn hình console
// let msg = "Rikkei isawesome";
// console.log(msg);
// // Một biến có tên là studentCount có giá trị (value) là một số 0. Sau đó in nóramàn hình console
// let studentCount = 0;
// console.log(studentCount);
// // Bai 3: Gán lại giá trị cho các biến đã được khai báo ở phía trên
// // Thay đổi giá trị của msg thành ‘Coding is hard but super cool and fun’, 
// // sau đó lại in nó ra màn hình console
// msg = "Coding is hard but super and fun";
// console.log(msg);
// // Đối với biến studentCount, giả sử số lượng sinh viên đang là 30 →update biến studentCount
// // thành 30 và in nó ra màn hình console
// studentCount = 30;
// console.log(studentCount);
// // Google search cách để biến một chuỗi thành viết hoa toàn bộ (upper case), viết
// // thường toàn bộ (lower case). Biến đổi chuỗi msg thành dạng viết hoa toànbộ→In nó ra màn hình console
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());
// // Google search cách để tăng một biến kiểu số lên n đơn vị →Thực hiện chongười dùng nhập vào số n, 
// // sau đó tăng biến studentCount lên n đơn vị vàinnóra màn hình console
// let n = Number(prompt("Please input number n"));
// studentCount = studentCount + n;
// console.log(studentCount);
// // Bai 4:
// alert("Hello! I am an alert box!!");
// // Bai 5: Viết một đoạn mã hỏi tên người dùng, sau đó chào họ và nói gì đó đáng yêu với họ
// let fname = prompt("Konichiwa! Your name please");
// alert(`Hello ${fname} I love you`);
// Bai 6: Viết một đoạn mã hỏi người dùng firstName và lastName, sau đó chào họ với tênđầyđủ của họ
// let first_name = prompt("Input your first name");
// let last_name = prompt("Input your last name");
// alert(`Hello ${last_name} ${first_name}`);
// Bai 7: Viết một đoạn mã cho người dùng nhập vào 1 cạnh của hình vuông, 
// tính và in radiệntích hình vuông đó (sử dụng câu lệnh alert)
// let side = Number(prompt("Please input edge value of square"));
// let area_square = side*side;
// alert(`The square area is ${area_square}`);

// // Bai 8: Viết một đoạn mã cho người dùng nhập vào bán kính của hình tròn, 
// // tính và in radiệntích của hình tròn đó (sử dụng câu lệnh alert)
// let radius = Number(prompt("Please input radius value of circle"));
// let area_circle = (3.14*radius*radius)
// alert(`The circle area is ${area_circle}`);
// // Bai 9: Viết một đoạn script chuyển đổi từ độ Celsius (0C) sang độ Fahrenheit (0F)
// let Celsius = parseFloat(prompt("Please input tempt value"));
// let Fahrenheit = (Celsius * (9/5)) + 32;
// alert(`${Celsius}(C) = ${Fahrenheit}(F)`);
// Bai 10: Alert lên câu “The quick ___ fox jumps over the ___ dog”. Cho người
// dùng nhập vào các từ cần điền vào dấu gạch chân. Sau đó alert ra câuđầyđủ(Sử dụng template string
alert(`The quick ___ fox jumps over the ___ dog`);
let word1 = prompt("Please input first word");
let word2 = prompt("Please input second word");
alert(`The quick ${word1} fox jumps over the ${word2} dog`);
// Bai 11: a. Một hình chữ nhật có chiều dài và rộng bất kỳ

