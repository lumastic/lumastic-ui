import { drew } from "./user.db";
import { drewComment, keithComment } from "./comment.db";

export const postWithComments = {
  content: "This is a post with comments",
  createdBy: drew,
  comments: [drewComment, keithComment]
};

export const postNoComments = {
  content: "This is a post without comments",
  createdBy: drew
};
