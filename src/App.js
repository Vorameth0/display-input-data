import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterSubmit from "./components/RegisterSubmit";

function App() {
  return (
    <BrowserRouter basename="/display-input-data">
      <Routes>
        <Route path="/" element={<RegisterSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
