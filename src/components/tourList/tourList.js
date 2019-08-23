import React, { Component } from 'react'

import "./tourList.scss";
import Tour from "../tour/tour";
import {tourData} from "../../Data/tourData";


export default class tourList extends Component {
  state={
    tours:tourData
  }
  render() {
    const {tours} = this.state;

    return (
      <section className="tourList">
        {tours.map(tour => {
          return(
            <Tour 
              key={tour.id} 
              tour={tour}
            />
          )
        })}
      </section>
    )
  }
}
