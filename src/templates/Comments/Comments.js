import PropTypes from "prop-types";
import React from "react";
import { Comment } from "../Comment";
import { NewComment } from "../NewComment";
import style from "./Comments.scss";

const Comments = ({ comments = [], canComment = false }) => (
  <div className={style.comments} data-testid="comments">
    {canComment && <NewComment />}
    {comments.map((comment, key) => (
      <Comment
        comment={comment}
        createdBy={comment.createdBy}
        key={comment.id || key}
      />
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
  canComment: PropTypes.bool
};

export { Comments };
