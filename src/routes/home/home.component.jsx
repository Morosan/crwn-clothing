import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import HeroSlider from "../../components/hero-slider/hero-slider.component";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;
