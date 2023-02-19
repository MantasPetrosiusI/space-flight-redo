import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/details/:id" element={<Details />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
