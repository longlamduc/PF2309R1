// truy van HTML element
let titleElem = document.getElementById("title");

console.log(titleElem);

// truy van noi dung (inner HTML) cua element
console.log(titleElem.innerHTML);

titleElem.innerHTML = "Average Mark Calculation";
titleElem.style.color = "red";

// thêm element mới vào student-list

// tạo thẻ li mới
let newItemElem = document.createElement("li");

// setup nội dung cho element mới
newItemElem.innerHTML = "3. Evan - 9 - 8 - 8.5";

// thêm phần tử mới vào thẻ ul
let studentListElem = document.getElementById("student-list");
studentListElem.appendChild(newItemElem);

// xóa form element ra khỏi trang web
let studentFormElem = document.getElementById("student-form");
studentFormElem.remove();