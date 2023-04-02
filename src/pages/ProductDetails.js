import { Container, Row, Col } from 'react-bootstrap';
import products from "../local-data/data.json";
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import Navibar from '../components/Navibar';
import Footer from '../components/Footer';

function ProductDetails() {
  const params = useParams();
  const { id } = params;


  return (
    <div className="ProductDetails">
      <Navibar />
      <br /><br /><br /><br /><br />
      <Container>
        <Row>
          <Col xl={7} lg={7} md={7} sm={12} xs={12}>
          <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



            {/* <img src={products.posts[id].image1} alt="sample85" width="100%"/> */}


          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <div className='productPage-texts'>
              <div className='productPage-title'>
                <h4>{products.posts[id].title}</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <Footer/>
    </div>
  );
}

export default ProductDetails;
