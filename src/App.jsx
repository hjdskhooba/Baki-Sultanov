import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import {Layout} from "./Layout/Layout";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
