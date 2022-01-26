import React from "react";
import Loading from "../modules/Loading";

import "../../utilities.css";

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canRedirect: false };
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ canRedirect: true });
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 2000);
    return () => clearTimeout(timer);
  }
  render() {
    if (!this.state.canRedirect) {
      return <Loading />;
    }

    return <div className="u-textCenter">im so sorry {this.state.counter}</div>;
  }
}

export default Secret;
