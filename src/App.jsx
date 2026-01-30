import LandingPage from './pages/LandingPage.jsx'
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Bottom from './pages/Bottom.jsx'
import NavBar from './components/ui/NavBar.jsx'
import { UseScrollSpy } from './components/UseScrollSpy';

function App() {

  const sections = ['about', 'projects', 'contact'];
  const activeSection = UseScrollSpy(sections);

  return (
    <>
      <LandingPage />
      <NavBar
        activeSection={activeSection}
      />
      <AboutMe />
      <Projects />
      <Contact />
      <Bottom />
    </>
  );
}

export default App;