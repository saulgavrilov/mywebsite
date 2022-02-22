import './Projects.css';
import Container from './Container';
import CalendarProjectImage from '../assets/calendar-project.png';
import RGBToHEXImage from '../assets/rgb-to-hex-project.png';
import NoImage from '../assets/no-image.png';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <Container>
        <div className='projects-container'>
          <div className='project'>
            <div className='project-image'>
              <img src={CalendarProjectImage} alt='Calendar Project' />
            </div>
            <h3 className='project-title'>Calendar App</h3>
            <div className='project-desc'>
              <p>Built with Vanilla JS.</p>
              <p>This project support dark mode.</p>
              <p>
                You can use the arrows to navigate between the months (Left,
                Right)
              </p>
            </div>
            <div className='project-options'>
              <a
                href='https://github.com/saulgavrilov/calendar'
                rel='noreferrer'
                target='_blank'
              >
                Source Code
              </a>
            </div>
          </div>

          <div className='project'>
            <div className='project-image'>
              <img src={RGBToHEXImage} alt='RGB To HEX' />
            </div>
            <h3 className='project-title'>RGB to HEX Color</h3>
            <div className='project-desc'>
              <p>
                Convert RGB color codes to HEX HTML format for use in web design
                and CSS.
              </p>
            </div>
            <div className='project-options'>
              <a
                href='https://github.com/saulgavrilov/rgb-to-hex-color'
                rel='noreferrer'
                target='_blank'
              >
                Source Code
              </a>
            </div>
          </div>

          <div className='project'>
            <div className='project-image'>
              <img src={NoImage} alt='DevCamper API' />
            </div>
            <h3 className='project-title'>DevCamper API</h3>
            <div className='project-desc'>
              <p>This project does not have description</p>
            </div>
            <div className='project-options'>
              <a
                href='https://github.com/saulgavrilov/devcamper-api'
                rel='noreferrer'
                target='_blank'
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
