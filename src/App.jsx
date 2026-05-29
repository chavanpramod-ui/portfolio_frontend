import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Hero />
      <Skills />
      <Education /> 
      <ProjectGallery />
      <Contact />
    </div>
  );
}

export default App;