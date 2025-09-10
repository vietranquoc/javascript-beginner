
console.log("Lab 01 - JavaScript Basics");

const fullName = "Viet Tran Quoc";
const birthYear = 2003;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const myInfo = `Tên: ${fullName}
Tuổi: ${currentYear - birthYear}
Sinh viên: ${isStudent}`;

console.log(myInfo);