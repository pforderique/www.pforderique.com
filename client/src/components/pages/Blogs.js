import React from "react";

import SpotifyBlog from "../modules/SpotifyBlog";
import "../../utilities.css";

/**
 * Blog Page containing all Blogs
 */
class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: null };
  }

  render() {
    return (
      <div className="u-textCenter">
        <SpotifyBlog />
      </div>
    );
  }
}

export default Blogs;
