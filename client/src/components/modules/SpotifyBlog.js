import React from "react";

import BlogData from "../../public/docs/SpotifyBlog.json";
import AccidentalPlaylistQueueReplacement from "../../public/images/blogs/AccidentalPlaylistQueueReplacement.jpg";
import Nowaytotellthemoodofasong from "../../public/images/blogs/AccidentalPlaylistQueueReplacement.jpg";
import ClickandDragMultiselectSongs from "../../public/images/blogs/ClickandDragMultiselectSongs.jpg";
import RecommendSongsarenotnew from "../../public/images/blogs/RecommendSongsarenotnew.jpg";
import UnsubscribeButtonisdifficulttofind from "../../public/images/blogs/UnsubscribeButtonisdifficulttofind.jpg";
import DislikeButton from "../../public/images/blogs/DislikeButton.jpg";

import "./SpotifyBlog.css";
import "../../utilities.css";

/**
 * Blog Page containing all Blogs
 */
class SpotifyBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { blog: BlogData };
  }

  // TODO: Load these directly in img element. Configure Webpack correctly.
  getImage(imgName) {
    switch (imgName) {
      case "AccidentalPlaylistQueueReplacement":
        return AccidentalPlaylistQueueReplacement;
      case "Nowaytotellthemoodofasong":
        return Nowaytotellthemoodofasong;
      case "ClickandDragMultiselectSongs":
        return ClickandDragMultiselectSongs;
      case "RecommendSongsarenotnew":
        return RecommendSongsarenotnew;
      case "UnsubscribeButtonisdifficulttofind":
        return UnsubscribeButtonisdifficulttofind;
      case "DislikeButton":
        return DislikeButton;
      default:
        return null;
    }
  }

  render() {
    const data = this.state.blog;

    return (
      <article className="SpotifyBlog-container">
        <h2>{data.title}</h2>

        <p className="u-textLeft"></p>
        <p>{data.intro}</p>

        <section>
          <h3 className="u-textLeft">Terminology</h3>
          <p>{data.terminology}</p>
        </section>

        {/* User Complaints */}
        <section>
          <h3 className="u-textLeft">{data.user_complaints.title}</h3>
          {data.user_complaints.content.map((complaint, idx) => (
            <article
              key={`key_${idx}`}
              className="SpotifyBlog-UserComplaint u-textLeft"
            >
              <hr />
              <h4 className="u-gray">{complaint.title}</h4>

              <section>
                <p>
                  <span className="u-highlight">Problem: </span>
                  {complaint.problem}
                </p>
                {complaint.scenario && (
                  <p>
                    <span className="u-highlight">Scenario: </span>{" "}
                    {complaint.scenario}
                  </p>
                )}
                {complaint.img && (
                  <img
                    className="SpotifyBlog-img"
                    src={this.getImage(complaint.img)}
                  />
                )}
                {complaint.concept && (
                  <section className="concept">
                    <h5>Concept</h5>
                    <h6>Name: {complaint.concept.name}</h6>
                    <p>Purpose: {complaint.concept.purpose}</p>
                    <p>State: {complaint.concept.state}</p>
                    <div>
                      Actions:
                      <ul>
                        {complaint.concept.actions.map((action, idx) => (
                          <li key={`key_${idx}`}>{action}</li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Operational Principle:{" "}
                      {complaint.concept.operationalPrinciple}
                    </p>

                    <p>
                      <span className="u-highlight">Concept Problem: </span>
                      {complaint.concept.conceptProblem}
                    </p>
                  </section>
                )}
                <p>
                  <span className="u-highlight">Potential Solution: </span>
                  {complaint.solution}
                </p>
              </section>
            </article>
          ))}
        </section>

        {/* User Confusions */}
        <section>
          <h3 className="u-textLeft">{data.user_confusions.title}</h3>
          {data.user_confusions.content.map((confusion, idx) => (
            <article
              key={`key_${idx}`}
              className="SpotifyBlog-UserComplaint u-textLeft"
            >
              <hr />
              <h4 className="u-gray">{confusion.title}</h4>

              <section>
                <p>
                  <span className="u-highlight">Confusion: </span>
                  {confusion.confusion}
                </p>
                {confusion.scenario && (
                  <p>
                    <span className="u-highlight">Scenario: </span>{" "}
                    {confusion.scenario}
                  </p>
                )}
                {confusion.img && (
                  <img
                    className="SpotifyBlog-img"
                    src={this.getImage(confusion.img)}
                  />
                )}
                {confusion.concept && (
                  <section className="concept">
                    <h5>Concept</h5>
                    <h6>Name: {confusion.concept.name}</h6>
                    <p>Purpose: {confusion.concept.purpose}</p>
                    <p>State: {confusion.concept.state}</p>
                    <div>
                      Actions:
                      <ul>
                        {confusion.concept.actions.map((action, idx) => (
                          <li style={{whiteSpace: "pre-wrap"}} key={`key_${idx}`}>{action}</li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Operational Principle:{" "}
                      {confusion.concept.operationalPrinciple}
                    </p>

                    <p>
                      <span className="u-highlight">Concept Problem: </span>
                      {confusion.concept.conceptProblem}
                    </p>
                  </section>
                )}
                <p>
                  <span className="u-highlight">Potential Solution: </span>
                  {confusion.solution}
                </p>
              </section>
            </article>
          ))}
        </section>
      </article>
    );
  }
}

export default SpotifyBlog;
