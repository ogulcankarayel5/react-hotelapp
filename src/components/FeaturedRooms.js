import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import Fade from 'react-reveal/Fade';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms, loading } = this.context;
    console.log(featuredRooms);
    featuredRooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
       <Fade left>
       <Title title="featured rooms" />
        <div className="featured-rooms-center">
            {loading ? <Loading/> : featuredRooms}
        </div>
        
       </Fade>
      </section>
    );
  }
}
