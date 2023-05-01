import React from "react";

import "../../utilities.css";

/**
 * Blog Page containing all Blogs
 */
class SpotifyBlog extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Retreive this locally or from database.
    const blog = {
      title: "Spotify Case Study: Concept Misconception",
      intro:
        "Spotify boasts almost 500 million daily listeners on its platform. Tailoring to such a wide audience emphasizes the need to have a clear design and a concise focus on what makes the platform unique. After conducting several interviews and scourging online threads discussing its design, here are some of the most repeated frustrations and desires that users have with the application along with some potential fixes for a few of them.",
      terminology: [
        "The current Spotify design includes a queue concept for managing which songs play in which order. However, upon further inspection, notice that there are really 2 queues that make up this structure. The manual queue (Mqueue) stores songs that the user manually adds to the queue, while the playlist-inferred queue (Pqueue) shows the next songs that will play based on the current playlist that is playing - only after all the songs from the Mqueue.",
        "All interview users will be referred to as 'Simon'",
        "This blog performs some critiques on existing “concepts” as well as introduces some new ones. Concepts are understood as the fundamental building blocks of any software application; to learn more about their structure and relationships, check out The Essence of Software by Daniel Jackson.",
      ],
      sections: {
        user_complaints: {
          title: "User Complaints",
          content: [
            {
              title: "Accidental Playlist Queue Replacement",
              problem: "Regarding the play queue, Simon finds it really annoying when he’s listening to an album/playlist and wants to add another song in the middle, and by accident rather than adding to the queue, he plays the song, and the playlist queue is then replaced and his place in the original album/playlist is lost.",
              scenario: "I am currently listening to a really good “focus” playlist while studying, but then decide to take a break. So I queue up a couple of upbeat songs from an upbeat playlist to listen to while I relax on my phone. However, instead of clicking the three dots *** on the side of the song, I accidentally click on the song itself, and now I’ve lost my place on the focus playlist because the playlist queue has been replaced completely by the upbeat playlist… now I have to dig through the study playlist to find my place where I left off 🙁",
              img: "",
              solution: "Solved with Music Wheel Concept - as you scroll, this song will become the “top” song on the music wheel, so clicking it does nothing now. When you hit the big green playlist button, the top song on the wheel will play."
            },
          ],
        },
      },
    };

    this.state = { blog: blog };
  }

  render() {
    return (
      <div className="u-textCenter">
        <h2>{this.state.blog.title}</h2>
      </div>
    );
  }
}

export default SpotifyBlog;
