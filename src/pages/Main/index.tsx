import Home from "../../components/Pages/Home";
import Header from "../../components/Pages/Header";
import Benifit from "../../components/Pages/Benifit";
import About from "../../components/Pages/About";
import Market from "../../components/Pages/Market";
import Tokenomics from "../../components/Pages/Tokenomics";
import Footer from "../../components/Pages/Footer";
import { Box } from "@mui/joy";

const Main = () => {
  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Benifit />
      <Market />
      <Tokenomics />
      <Footer />
    </Box>
  );
};

export default Main;
