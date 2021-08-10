"use strict";

//JS is synchronous
//Execute the code block in order after hoisting
// hoisting : var, function declaration
console.log("1");
setTimeout(function () {
  console.log("2"); //비동기적 실행방법
}, 1000);
console.log("3");

// synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// callback hell example (콜백 지옥 체험)
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "kwon" && password === "soon") ||
        (id === "kwon" && password === "woo")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "kwon") {
        onSuccess({ name: "kwon", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userwithRole) => {
        alert(
          `hello ${userwithRole.name}, you have a ${userwithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

//가독성 x , 좋지않음
