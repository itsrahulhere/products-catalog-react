import products from "../local-data/data.json";
import { Container, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Products() {
    return (
        <div className="Products">
            <br /><br /><br /><br />
            <div className="product-heading">
                <h3>Our Unique Products</h3>
            </div>
            <Container>
            <div class="product-row row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-5">
                
                    {products.posts && products.posts.map(({ title, id, image1, image2, image3, image4 }) => (
                        <Col>
                            <Link to={`products/${id}`} style={{textDecoration:'none'}}>
                            <div className="product-card">
                                <img src={image1} alt="sample85" />
                                <figcaption>
                                    <h3>{title}</h3>
                                    <p>All this modern technology just makes people try to do everything at once.</p>
                                    <hr/>
                                    <div class="price">
                                        <s>₹24.00</s>₹19.00
                                    </div>
                                </figcaption>
                            </div>
                            </Link>
                        </Col>
                    ))}
                </div>
                <br />
            </Container>
        </div>
    );
}

export default Products;
