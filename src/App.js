import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Showcase from './components/showcase/Showcase';
import SocialNavbar from './components/socialNavbar/SocialNavbar';
import Technologies from './components/technologies/Technologies';

const App = () => {
  return (
    <>
      <SocialNavbar />
      <Showcase />
      <h2 className='title'>projects</h2>
      <Projects />
      <h2 className='title hide-on-mobile'>Technologies</h2>
      <Technologies />
      <h2 className='title'>contact</h2>
      <Contact />
    </>
  );
};

export default App;
