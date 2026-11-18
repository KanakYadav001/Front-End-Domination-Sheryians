
import Card from "./components/Card";
import "./index.css";

export function App() {
  return (
    <div className="app">
      <div  className="feed"> 
       <Card  img="https://cdn.pixabay.com/photo/2013/07/13/12/16/cup-159523_1280.png" name="Kanak" age={21} />
       <Card  img="https://i.pinimg.com/1200x/e7/6c/99/e76c9969ca4ff1b3372ad293c7a2c150.jpg" name="Manthan" age={20} />
       <Card  img="https://i.pinimg.com/736x/e7/40/41/e74041fbef953bde92e9e9f64a895a72.jpg" name="Guru" age={20} />
       <Card  img="https://media.istockphoto.com/id/1386179512/photo/computer-hacker-stealing-data-from-a-laptop.jpg?s=612x612&w=is&k=20&c=8GoNcZqfXJkkIfkoeeHVHDbT7SHajA-ZEQk-vdDlWms=" name="Harshit" age={21} />
       <Card  img="https://i.pinimg.com/736x/b9/30/b8/b930b83d7d0940160b010186fc2ee770.jpg" name="Vaibhav" age={20} />
       <Card img="https://i.pinimg.com/736x/64/78/77/647877742f8d4ad43d68bfd193e1c952.jpg" name="Shubham" age={21} />
       </div>
    </div>
  );
}

export default App;
