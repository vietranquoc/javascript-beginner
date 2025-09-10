// video18: Data types in JavaScript
/*
Kiểu dữ liệu nguyên thủy (Primitive Data Types)
    - Định nghĩa: Kiểu dữ liệu nguyên thủy (primitive) là những kiểu dữ liệu cơ bản, không có
                phương thức hay thuộc tính, và được lưu trực tiếp giá trị trong vùng nhớ của biến

    - Các kiểu dữ liệu nguyên thủy phổ biến:
        - Number: số (integer, float)
        - String: chuỗi (text)
        - Boolean: đúng/sai (true/false)
        - Undefined: chưa được gán giá trị
        - Null: giá trị rỗng
*/


console.log("Primitive data types:");

// number 
const myAge = 22;
const myScore = 8.5;

console.log("My age is: " + myAge);
console.log(`My score is: ${myScore}`);

// string
const name = "viet";
const name1 = 'viet1';
const name2 = `viet2`;

console.log(name);

// boolean: true/false
const isSuccess = true;
const isFail = false;

console.log(isSuccess);

// undefined
let age;
console.log(age);

// null
let isNull = null;
console.log(isNull);


/*
Kiểu dữ liệu tham chiếu (Object Data Types)
    - Định nghĩa: Dữ liệu không được lưu trực tiếp trong biến, mà biến chỉ chứa một địa chỉ
                    tham chiếu trong bộ nhớ.

    - Các kiểu dữ liệu tham chiếu phổ biến:
        - Object: đối tượng
        - Array: mảng
        - Function: hàm
        - Date: ngày tháng
        - v.v...
*/

console.log("Object data types:");

// object: key - value: thuong dung de luu tru 1 bien so co nhieu thong tin
const myInfo = {
    name: "viet",
    age: 22,
    address: "Hanoi",
    isSuccess: true
};

console.log(myInfo);

// array: luu tru nhieu gia tri trong 1 bien    
const myScores = [8, 9, 10, 7, 6];
console.log(myScores);

// function
function myFunction() {
    console.log("Hello function");
}
myFunction();

