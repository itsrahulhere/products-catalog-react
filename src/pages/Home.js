import Footer from "../components/Footer";
import Navibar from "../components/Navibar";
import Products from "../components/Products";

import ProductDetails from "./ProductDetails";

function Home() {
  return (
    <div className="Home">
      <Navibar />
      {/* <Contact/> */}
      Home Page
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
