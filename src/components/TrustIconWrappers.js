import { Container, Row, Col } from 'react-bootstrap';

function TrustIconWrappers() {
    return (
        <div className="TrustIconWrappers">
            <Container>
                <Row className="trust-row">

                    <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                        <div className="trust-card">
                            <img src="https://cdn.shopify.com/s/files/1/0593/5346/4994/files/happy-customers-icon.png?v=1635321008" alt="sample85" />
                            <div>
                                <h6>5,000 HAPPY<br/> CUSTOMERS</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                        <div className="trust-card">
                            <img src="https://cdn.shopify.com/s/files/1/0593/5346/4994/files/delivery-to-pincodes-icon.png?v=1635321006" alt="sample85" />
                            <div>
                                <h6>DELIVERY IN OVER <br/>500 PIN CODES</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                        <div className="trust-card">
                            <img src="https://cdn.shopify.com/s/files/1/0593/5346/4994/files/guaranteed-delivery-icon.png?v=1635321008" alt="sample85" />
                            <div>
                                <h6>GUARANTEED <br/> TIMELY DELIVERY</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                        <div className="trust-card">
                            <img src="https://cdn.shopify.com/s/files/1/0593/5346/4994/files/made-in-India.png?v=1635321006" alt="sample85" />
                            <div>
                                <h6>MADE <br/> IN INDIA</h6>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default TrustIconWrappers;
