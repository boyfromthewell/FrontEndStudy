import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link> {/*Link to-> App.js에서 선언한 라우터와 day.js로 연결하는 느낌
          버튼 누르면-> Day.js컴포넌트로 이동
          */}
        </li>
      ))}
    </ul>
  );
}
