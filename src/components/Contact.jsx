import '../styles/contact.css';
import Container from './Container';

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <div className='contact-container'>
          <div className='contact-left'>
            I'm currently open to new opportunities, if you want to say hello
            hit me up via email.
          </div>
          <div className='contact-right'>
            <a href='mailto:shaulgav@gmail.com'>shaulgav@gmail.com</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
