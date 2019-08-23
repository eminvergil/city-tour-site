import React, { Component } from 'react'
import "./tour.scss";
// import back from "../../../public/img/4.jpg"


export default class tour extends Component {
  render() {
    const { city, img,name,info} = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img 
            width="200"
            src={img} 
            alt={"back-img-" + img}>
          </img>
          <span className="close-btn">
            <i className="fas fa-window-close"/>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span className="">
              <i className="fas fa-caret-square-down"/>
            </span>
            <p>
            {info}
            </p>
          </h5>
        </div>
      </article>

    )
  }
}
