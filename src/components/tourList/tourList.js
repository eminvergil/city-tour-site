import React, { Component } from 'react'

import "./tourList.scss";
import Tour from "../tour/tour";

export default class tourList extends Component {
  render() {
    return (
      <section className="tourList">
      <Tour />
      </section>
    )
  }
}
