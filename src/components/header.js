import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "movies" };
  }

  render() {
    return (
      <div className="m-0 deep-orange darken-2 row">
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile">
              <li onClick={() => this.props.onSelectType("movies")}>
                <a>Movies</a>
              </li>
              <li onClick={() => this.props.onSelectType("shows")}>
                <a>Shows</a>
              </li>
            </ul>
            {/* <form className="right">
                        <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                        </div>
                    </form> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
