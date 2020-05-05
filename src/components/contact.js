import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Donavan Brown</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFlfZSYTJ0W1A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=b95TSHr2DTSkbVidiWvqGPFhBOWsIh-VZJEHS7xyDBc"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              If you have any inquiries, dont hesistate to reach out!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Info</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: 'Droid Sans' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                    (732)-947-9396
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "33px", fontFamily: 'Droid Sans' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    donavankbrown@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
