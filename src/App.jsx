import Projects from "./pages/components/Projects";
import Contacts from "./pages/components/Contacts";
import { Route, Routes } from "react-router-dom";
import Skills from "./pages/components/Skills";
import Portfolio from "./pages/Main/Portfolio";
import About from "./pages/components/About";
import { Layout } from "./Layout/Layout";
import Main from "./pages/Main/Main";

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
