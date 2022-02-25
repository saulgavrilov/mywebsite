import BackgroundAnimation from './backgroundAnimation/BackgroundAnimation';
import Container from './Container';
import ScrollDown from './scrollDown/ScrollDown';
import '../styles/showcase.css';

const Showcase = () => {
  return (
    <div className='showcase'>
      <Container>
        <div className='showcase-container'>
          <div className='showcase-greeting'>
            <h1>Saul Gavrilov</h1>
            <h3>Full Stack Developer</h3>
            <div className='showcase-greeting-links'>
              <a href='https://www.linkedin.com/in/saul-gavrilov-087565193/'>
                LinkedIn
              </a>
              <a href='#projects'>Projects</a>
              <a href='https://github.com/saulgavrilov'>GitHub</a>
            </div>
          </div>
          <BackgroundAnimation />
          <ScrollDown />
        </div>
      </Container>
    </div>
  );
};

export default Showcase;
