import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

import Navibar from '../components/Navibar';

function Contact() {
  return (
    <div className="Contact">
      <Navibar />
      <br /> <br /> <br /> <br /> <br />
      <Container className='contact-info'>
        <Row>
          <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          </Col>
          <Col xl={5} lg={5} md={12} sm={12} xs={12}>
            <div className='contact-text'>
              <div className='contact-title'>
                <h3>Get in touch</h3>
              </div>
              <p>
                If you have any questions, want to work together on something amazing,
                or simply want to share your love for gifts, feel free to reach out to us.
                If there's one thing we love apart from making awesome gifts, it is talking!
              </p>
            </div>
            <br />
            <form>
              Name<br />
              <input type="text" size="50" /><br />
              Phone number<br />
              <input type="text" size="50" /><br />
              Email<br />
              <input type="text" size="50" /><br />
              Message<br />
              <textarea name="w3review" rows="4" cols="52">

              </textarea>
              <br />
              <input type="submit" value="Send" />
            </form>
            <br />

          </Col>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
