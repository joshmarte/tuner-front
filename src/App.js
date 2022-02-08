import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";

// PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/new" element={<New />} />
        <Route exact path="/songs/:id" element={<Show />} />
        <Route path="/songs/:id/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
