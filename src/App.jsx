import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import ProjectDetail from "./components/Projects/ProjectDetail";
// import Thanks from "./pages/Thanks";
import { ProjectProvider } from "./context/ProjectContext/ProjectState";
import Header from "./components/Header";
//import Footer from "./components/Footer";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <ProjectProvider>
          <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connect" element={<Connect />} />
          {/* <Route path="/thanks" element={<Thanks/>} /> */}
          <Route path="/Button" element={<Button />} />
          <Route path="Input" element={<Input />} />
        </Routes>
        {/*<Footer/>*/}
         </ProjectProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
