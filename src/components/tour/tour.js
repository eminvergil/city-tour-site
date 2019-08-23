import React, { Component } from 'react'
import "./tour.scss";
// import back from "../../../public/img/4.jpg"


export default class tour extends Component {
  state = {
    showInfo: false
  }
  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    });
  };


  render() {
    const { id,city, img,name,info} = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img 
            width="200"
            src={img} 
            alt={"back-img-" + city}>
          </img>
          <span onClick={
            () => {
              removeTour(id);
            }
          } className="close-btn">
            <i className="fas fa-window-close"/>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"/>
            </span>
            {this.state.showInfo && <p>{info}</p>}
          </h5>
        </div>
      </article>

    )
  }
}
