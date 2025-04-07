import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
    
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>    
    </>
  );
}

export default App;
