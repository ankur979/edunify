import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShowSchools from "./pages/showSchools";
import AddSchool from "./pages/addSchool";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ShowSchools />} />
        <Route path="/add" element={<AddSchool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
