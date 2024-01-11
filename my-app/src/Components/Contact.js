
import { CiHeadphones } from "react-icons/ci";

import Title from './Title';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form data submitted:', e.target);
    // You may want to use state to manage form data instead of logging it to the console
  };

  return (
    <section id="contact" className="contact section-bg">
      <Container>
        <div>
    
          <Title titles="Contact" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
             
        </div>
        
           
        <Row>
          <Col lg={4}>
            <h1 style={{color: '#d43076' }}>LONELY</h1>
            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
            <Col lg={4} className='Sociallink mr-5'>
              <FaInstagram color="#d43076" className='ml-5' />
              <FaTwitter color="#d43076" className='ml-5' />
              <FaFacebook color="#d43076" className='ml-5' />
              <FaLinkedin color="#d43076" className='ml-5' />
            </Col>
          </Col>
          <Col lg={3} md={4}>
            <div className="info">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt" ></i>
                <CiLocationOn style={{color: '#d43076',width: '40px',fontSize: '27px'  }}/> <p >A108 Adam Street<br />New York, NY 535022</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-envelope"></i>
                <CiMail style={{color: '#d43076',width: '40px',fontSize: '27px'  }} /> <p>info@example.com</p>
              </div>
              <div className="d-flex align-items-center mt-4">
              <CiHeadphones style={{color: '#d43076',width: '40px',fontSize: '27px'  }}/><i className="bi bi-phone"></i>
                 <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </Col>
          <Col lg={5} md={8}>
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center" ><button type="submit" style={{ background: '#d43076', borderRadius: '40px'  , color:'white',height: '40px',width:'150px', border: 'none', outline: 'none', boxShadow: 'none' }}>Send Message</button></div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
