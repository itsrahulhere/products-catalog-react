// import { Container, Row, Col } from 'react-bootstrap';
import CustomerReview from './CustomerReview';
import EmailSubscribe from './EmailSubscribe';

import './Footer.css'
import TrustIconWrappers from './TrustIconWrappers';

function Footer() {
    return (
        <div className="Footer">
            <div class="hozi-line">
                <hr />
            </div>
            <CustomerReview />
            <TrustIconWrappers />
            <EmailSubscribe />
            <div className='follow-us'>
                <br />
                <h5>Follow Us</h5>
                <img src="https://i.pinimg.com/736x/8b/44/3b/8b443b5d06bf443e245cf2b14143d6b8.jpg" alt="logo" />
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="logo" />

            </div>
            <br />
            <div className='footer-bottom mx-5'>
                <hr />
                <a href="/contact" >Contact us</a>
                <hr />
                <a href="/about"> About Uphaar</a>
                <hr />
                <a href="/" target="_blank"> +917532080633<br/>
                <span className='contact'> (10 AM - 8 PM | everyday) </span></a>
                <br/><br/>
            </div>
            {/* <div>
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className='copyright-footer'>
                &copy; 2023 Uphaar
            </div>

        </div>
    );
}

export default Footer;
