import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text to update"/>
      </div>
    </div>
  );
}

export default App;
