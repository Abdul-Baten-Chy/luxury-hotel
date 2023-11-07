import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
// import Map from "./Map";
import Offer from "./Offer";
import Testomonial from "./Testomonial";
import Wellcome from "./Wellcome";

const Home = () => {
  return (
    <div >
    <Header></Header>
    <Wellcome></Wellcome>
    <Featured></Featured>
    <Offer></Offer>
    <Testomonial></Testomonial>
    {/* <Map></Map> */}
    <Footer></Footer>
        
    </div>
  );
};

export default Home;
