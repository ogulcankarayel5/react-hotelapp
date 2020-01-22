import React, { Component } from 'react'
import {RoomContext} from '../context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {sortedRooms} = this.context;
        console.log(sortedRooms);
       
        return (
            <div>
                
                hello from feautured rooms 
            </div>
        )
    }
}
