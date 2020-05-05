import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid about-grid>
          <Cell col={6}>
            <h1>Donavan Brown</h1>
            <img
              src="https://avatars0.githubusercontent.com/u/57077112?s=400&u=14d5f108e53fab1c4fa91d120effffcb30653464&v=4"
              alt="avatar"
              style={{ height: "300px", position: "relative" }}
            />
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                position: "relative",
              }}
            >
              Hi, my names Donavan and I am a Temple Alumni! I graduated from
              the Fox School of Business with a finance major and an
              entrepreneurial minor. I have good analytical and digital
              marketing skills. I am officially a Full-Stack developer. I
              graduated from UPenn's LPS bootcamp! I am an active trader and
              have a knack for photography and graphic design. I am also apart
              of the lifestyle brand known as BB€...
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
