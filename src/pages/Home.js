import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import SimpleButton from "../components/StyledHero";
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <React.Fragment>
      
      <Hero>
       <Fade left duration={1000}>
       <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $235"
        >
         <Fade left duration={2000}>
         <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
         </Fade>
        </Banner>
       </Fade>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
