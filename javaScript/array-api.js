// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  const result = fruits.join(); //join() -> 배열 요소 하나의 스트링으로 바꿔줌, 구분자도 사용가능
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";

  const result = fruits.split(","); //꼭 구분자 전달 해줘야함
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const result = array.slice(2, 5); //slice() -> 배열 특정 부분 리턴
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score); // map() -> 배열안의 요소 원하는 함수를 이용해 다른 방식으로 데이터 만들기
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); //some() -> 배열 요소 조건 하나라도 만족하는가? , every() -> 모든 배열 요소가 조건을 만족하는가?
  console.log(result); //true
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result/students.length);
  //reduce() -> 배열 요소 돌면서 뭔가 누적할때 쓰기 , reduceRight() -> 배열 뒤 부터
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result=students.map(student=>student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result=students.map((student)=>student.score).sort((a,b)=>a-b).join();
  console.log(result);
}
