import "./App.css";
import Navigation from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
    </>
  );
}

export default App;
