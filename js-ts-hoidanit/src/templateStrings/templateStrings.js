// Template Strings (Template Literals) allow for easier string interpolation and multi-line strings in JavaScript.

/*
Template Strings (Template Literals)
    - Định nghĩa: Template String (còn gọi là Template Literals) là cách khai báo chuỗi bằng dấu backtick
                (`) thay vì nháy đơn ' ' hay nháy kép " ".
    - Ưu điểm:
        - Cho phép chèn biến và biểu thức vào chuỗi dễ dàng bằng cú pháp ${...}
        - Hỗ trợ chuỗi nhiều dòng (multi-line strings) mà không cần ký tự đặc biệt.
*/

console.log("Template Strings:");

const firstName = "Viet";
const lastName = "Tran";
const age = 22;

const introduction = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(introduction);