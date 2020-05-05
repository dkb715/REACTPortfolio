import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Image} from "react-native"
import Img from "react-image";
// import resume from '../img/pdf/Dioris-Dev-Resume.pdf';
// import { Footer, FooterLinkList, FooterSection } from "react-mdl";
import avatarImg from "../img/DKB.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Img
              src={avatarImg}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                {" "}
                {/* Intermediate HTML/CSS | Javascript | NodeJS | Express | React | Mongo DB */}
              
              </p>
              <div className="social-links">

                <a
                  href="https://github.com/dkb715"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/donavan-brown-63382910b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="/Users/dkb/Downloads/React_Portfolio-master/src/img/pdf" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
