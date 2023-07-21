import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavBar";

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
