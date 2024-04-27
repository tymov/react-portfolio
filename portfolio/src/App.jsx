import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";

function App() {
  return (
    <div className="overflow-x-hidden text-gray-800 dark:text-white antialiased slec selection:bg-vulcan-900 selection:text-vulcan-300">
      <div className="fixed top-0 -z-10 h-full min-h-screen w-full">
        <div className="relative h-full w-full bg-gray-50 dark:bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(52,109,252,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(9,73,238,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        {/* divider  */}
        <Experience />
        <Skills />
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
