/*
Biến trong JavaScript (var, let, const)
Để khai báo biến (variable), cú pháp chung là <Từ khóa> <tên biến> = <giá trị>;
Ví dụ:
    var name = "Alice";
    let age = 25;
    const country = "Vietnam";

Yêu cầu bắt buộc:
    - Ưu tiên dùng let và const thay vì var.
    - Dùng const khi giá trị không cần thay đổi.

Phân biệt nhanh var/let
    - var: phạm vi hàm (function scope), có thể khai báo lại và hoisting.
    - let: phạm vi khối (block scope), không thể khai báo lại, không hoisting.
*/

console.log("video17");

var name = 'viet';
const name1 = "viet1"
let name2 = `viet2`;

console.log(name);