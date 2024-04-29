import "./App.css";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <>
      <div className="flex flex-wrap mx-auto gap-4">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
}

export default App;
