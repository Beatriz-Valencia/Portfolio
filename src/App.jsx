import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
//import Profile from "./pages/Profile";
//import Projects from "./pages/Projects";
//import Contact from "./pages/Contact";
//import ProjectCard from "./components/ProjectCard";
//import { ProjectProvider } from "./context/ProjectContext/ProjectState";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Button from "./components/Button";
//import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ProjectProvider>
          <Header/>*/}
            <Routes>
             {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/home" element={<Home />} />
              {/* <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Button" element={<Button />} />
              <Route path="Input" element={<Input />} />
              <Route path="ProjectCard" element={<ProjectCard />} />*/}
            </Routes>
          {/*<Footer/>*/}
       {/* </ProjectProvider> */}
       </BrowserRouter> 
    </div>
  );
}

export default App;
