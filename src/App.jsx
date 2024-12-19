import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Ships from "./pages/Ships";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starship/:name" element={<Ships />} />
      </Routes>
    </>
  );
}

export default App;
