import "./App.css";
import { Routes, Route } from "react-router";
//import the components
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
