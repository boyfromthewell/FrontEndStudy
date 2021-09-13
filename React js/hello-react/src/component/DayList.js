import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days=useFetch('http://localhost:3001/days');
  /*const [days,setDays]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/days')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setDays(data);
    });
  },[]);
*/
if(days.length === 0){
  return <span>Loading...</span>;
}
  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>{" "}
          {/*Link to-> App.js에서 선언한 라우터와 day.js로 연결하는 느낌
          버튼 누르면-> Day.js컴포넌트로 이동
          */}
        </li>
      ))}
    </ul>
  );
}
