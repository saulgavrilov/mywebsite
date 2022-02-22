import Contact from './components/Contact';
import Projects from './components/Projects';
import Showcase from './components/Showcase';
import SocialNavbar from './components/SocialNavbar';
import Technologies from './components/Technologies';

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
