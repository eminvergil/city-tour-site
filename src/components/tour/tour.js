import React, { Component } from 'react'
import "./tour.scss";
import back from "../../img/4.jpg";


export default class tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img 
            width="200"
            src={back} 
            alt="back-img">
          </img>
          <span className="close-btn">
            <i className="fas fa-window-close"/>
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span className="">
              <i className="fas fa-caret-square-down"/>
            </span>
            <p>
            Climb aboard for a 2-hour twilight cruise of New York Harbor and relax with your favorite cocktail as you enjoy the incredible sunset views of Manhattan and listen to your expert guide's commentary about the sights of interest.
            </p>
          </h5>
        </div>
      </article>

    )
  }
}
