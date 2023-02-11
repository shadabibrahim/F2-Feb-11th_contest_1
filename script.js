/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((students) => {
    if (students.marks > 50)
      console.log(students);
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((students) => {
    if (students.marks > 50) {
      console.log(students);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marks < 50) {
      arr.splice(i, i);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let students = [
    { id: 11, name: "Shyam", age: "24", marks: 78 },
    { id: 22, name: "Raj", age: "22", marks: 79 },
    { id: 33, name: "Gopal", age: "23", marks: 91 },
  ];

  console.log(arr.concat(students));
}