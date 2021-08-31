import World from "./World";
import styles from "./Hello.module.css";

import { useState } from "react"; //동일한 컴포넌트여도 state는 독립적으로 관리 (기억!!)
import UserName from "./UserName";

export default function Hello(props) {
  console.log(props);
  const [name, setName] = useState("kwon");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  function changeName() {
    setName(name === "kwon" ? "yong" : "kwon");
    setAge(age + 1);
  }
  function showName() {
    console.log("kwon"); // 이벤트 처리 1. : 안에다가 함수 만들어 주기
  }

  function showGender(gender) {
    console.log(gender);
  }
  function showText(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1
        style={
          //css 인라인 작성법 (특별한일 없으면 사용 x)
          {
            color: "pink",
            borderRight: "2px solid black",
            marginBottom: "50px",
            opacity: 1.5,
          }
        }
      >
        Hello soonyong
      </h1>
      <World />
      <div className={styles.box}>HELLO</div>

      <button onClick={showName}>show name </button>
      <button
        onClick={() => {
          console.log(25); //이벤트처리 2. : 태그 안에다 함수 정의
        }}
      >
        show age
      </button>
      <button
        onClick={() => {
          showGender("male");
        }}
      >
        show gender
      </button>

      <input type="text" onChange={showText} />

      <h3>state</h3>
      <h4 id="name">
        {name}({age}) : {msg}
      </h4>
      <UserName name={name}/>
      <button onClick={changeName}>change</button>
    </div> //jsx는 하나의 태그만 작성가능!!, div같은거로 감싸주기
  );
} //컴포넌트 생성
