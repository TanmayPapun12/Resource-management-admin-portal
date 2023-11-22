import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AddResource from "./pages/add-resource";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddResource />} />
      </Routes>
    </>
  );
}

export default App;
