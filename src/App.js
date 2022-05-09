import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
