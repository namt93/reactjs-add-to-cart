import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Product } from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
