import { drew, keith, atishay } from "./user.db";
import { drewComment, keithComment } from "./comment.db";
import { spark3 } from "./spark.db";

export const postWithComments = {
  content: "This is a post with comments",
  createdBy: keith,
  comments: [drewComment, keithComment],
  spark: spark3,
  reactions: [
    {
      id: 1,
      emoji: {
        annotation: "thumbs up",
        group: 1,
        hexcode: "1F44D",
        order: 280,
        shortcodes: ["thumbsup", "+1", "yes"],
        tags: ["+1", "hand", "thumb", "up"],
        unicode: "👍️"
      },
      reactors: [keith, atishay]
    }
  ]
};

export const postNoComments = {
  content: "This is a post without comments",
  createdBy: drew,
  reactions: [
    {
      id: 2,
      emoji: {
        annotation: "thumbs up",
        group: 1,
        hexcode: "1F44D",
        order: 280,
        shortcodes: ["thumbsup", "+1", "yes"],
        tags: ["+1", "hand", "thumb", "up"],
        unicode: "👍️"
      },
      reactors: [keith, atishay]
    }
  ]
};
