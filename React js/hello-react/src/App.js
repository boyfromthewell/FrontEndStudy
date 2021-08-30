import './App.css';

function App() {
  const name="soon";
  const naver={
    name:"네이버",
    url:"https://naver.com",
  }
  return (
    <div className="App">
     <h1 style={{
        color: "red",
        backgroundColor:"beige",
     }}
     >
       hello react, {name}.
       <p>{10+2}</p>
     </h1>
     <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
