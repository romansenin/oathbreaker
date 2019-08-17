import React, { Component } from "react";
import Hero from "../../components/Hero";
import Quote from "../../components/Quote";
import Story from "../../components/Story";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Hero />
        <Quote />
        <Story />
      </div>
    );
  }
}
