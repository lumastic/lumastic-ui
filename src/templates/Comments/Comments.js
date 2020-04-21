import PropTypes from "prop-types";
import React from "react";
import { Comment } from "../Comment";
import { NewComment } from "../NewComment";
import style from "./Comments.scss";

const Comments = ({ comments = [], canComment = false, createComment }) => (
  <div className={style.comments} data-testid="comments">
    {canComment && <NewComment createComment={createComment} />}
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
  canComment: PropTypes.bool,
  createComment: PropTypes.func
};

export { Comments };
