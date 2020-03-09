import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DehazeTwoToneIcon from "@material-ui/icons/DehazeTwoTone";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";

import logo from "./img/directi_logo.png";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  withoutShadow: {}
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAccount = () => {};
  const handleLogout = () => {};
  const handleUpload = () => {};

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} style={{ height: 30 }} alt={"Directi"} />
          </Typography>
          {
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <DehazeTwoToneIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Team</MenuItem>
                <MenuItem onClick={handleClose}>Recruiter filter</MenuItem>
              </Menu>
            </div>
          }
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUpload}
              color="inherit"
            >
              <Tooltip title="Upload">
                <PublishTwoToneIcon />
              </Tooltip>
            </IconButton>
          </div>
          <div>
            <IconButton
              aria-label="Ek nuber"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleAccount}
              color="inherit"
            >
              <Tooltip title="User Mangement">
                <PeopleAltTwoToneIcon />
              </Tooltip>
            </IconButton>
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit"
            >
              <Tooltip title="Log Out">
                <ExitToAppTwoToneIcon />
              </Tooltip>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Live" : "Archived"}
        />
      </FormGroup>
    </div>
  );
}
