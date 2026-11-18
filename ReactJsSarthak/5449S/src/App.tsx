import Card from "./components/Card";
import NavBar from "./components/NavBar";
import "./index.css";

export function App() {
  return (
    <>
      <div className="parent">
        <NavBar />
        <div className="feed">
        <Card />
          <Card />
            <Card />
              <Card />
                <Card />
                </div>
      </div>
    </>
  );
}

export default App;
