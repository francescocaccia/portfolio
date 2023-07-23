import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavBar";
// import DescriptionEn from "./components/DescriptionEn";
import HomePageEn from "./components/HomePageEn";
import HomePageFr from "./components/HomePageFr";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<HomePageEn />} />
        <Route path="/fr" element={<HomePageFr />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
