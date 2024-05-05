import { Suspense, lazy } from "react";
import { Box } from "@mui/joy";

const Home = lazy(() => import("../../components/Pages/Home"));
const Header = lazy(() => import("../../components/Pages/Header"));
const Benifit = lazy(() => import("../../components/Pages/Benifit"));
const About = lazy(() => import("../../components/Pages/About"));
const Market = lazy(() => import("../../components/Pages/Market"));
const Tokenomics = lazy(() => import("../../components/Pages/Tokenomics"));
const Footer = lazy(() => import("../../components/Pages/Footer"));

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <Header />
        <Home />
        <About />
        <Benifit />
        <Market />
        <Tokenomics />
        <Footer />
      </Box>
    </Suspense>
  );
};

export default Main;
