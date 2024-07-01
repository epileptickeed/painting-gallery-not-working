import { Route, Routes } from "react-router-dom";
import stylesDark from "./App.module.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className={stylesDark.main_wrapper}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
