import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import { Layout } from "./Layout/Layout";
import Contacts from "./pages/components/Contacts";
import About from "./pages/components/About";
import Projects from "./pages/components/Projects";
import Skills from "./pages/components/Skills";
import Portfolio from "./pages/Main/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
