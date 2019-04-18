import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class Header extends Component {
  render() {
    return (
      <div>
        <div>this would be above the navbar. see what it looks like</div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="red">
              Jonathan Sanford
            </Typography>
          </Toolbar>
        </AppBar>
        {/*<div className="navbar navbar-toggleable-md p-3 text-white bg-warning b4b">
         <img src="https://www.logomoose.com/wp-content/optimized/uploads/2009/08/jump.jpg"  style={{height: "40px"}}/>
         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="https://www.logomoose.com/wp-content/optimized/uploads/2009/08/jump.jpg">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="https://www.logomoose.com/wp-content/optimized/uploads/2009/08/jump.jpg">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="https://www.logomoose.com/wp-content/optimized/uploads/2009/08/jump.jpg">Features</a>
              <a className="nav-item nav-link" href="https://www.logomoose.com/wp-content/optimized/uploads/2009/08/jump.jpg">Pricing</a>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Header;
