import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
  return(
  <div>
    <h1 style={ //css 인라인 작성법 (특별한일 없으면 사용 x)
      {
        color:"pink",
        borderRight:'2px solid black',
        marginBottom:'50px',
        opacity:1.5,

      }
    }>Hello soonyong</h1>
    <World/>
    <div className={styles.box}>HELLO</div>
  </div> //jsx는 하나의 태그만 작성가능!!, div같은거로 감싸주기
  );
} //컴포넌트 생성
