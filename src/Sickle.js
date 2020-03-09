import React, { Component } from "react";
import "./Sickle.css";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";

class Sickle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let sty = { float: "right" };
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={"class1"}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={"class2"}>
              Directi
            </Typography>
            <Button color="inherit">Login</Button>
            <MeetingRoomTwoToneIcon className={sty} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Sickle;
