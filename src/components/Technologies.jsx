import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
import Container from './Container';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className='technologies'>
      <Container>
        <div className='technologies-container'>
          <div className='technology'>
            <FaHtml5 size='40px' />
            <h5>HTML5</h5>
          </div>
          <div className='technology'>
            <FaCss3Alt size='40px' />
            <h5>CSS3</h5>
          </div>
          <div className='technology'>
            <FaJs size='40px' />
            <h5>JavaScript</h5>
          </div>
          <div className='technology'>
            <SiNodedotjs size='40px' />
            <h5>Node.js</h5>
          </div>
          <div className='technology'>
            <SiExpress size='40px' />
            <h5>Express.js</h5>
          </div>
          <div className='technology'>
            <FaReact size='40px' />
            <h5>React.js</h5>
          </div>
          <div className='technology'>
            <SiMongodb size='40px' />
            <h5>MongoDB</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technologies;
