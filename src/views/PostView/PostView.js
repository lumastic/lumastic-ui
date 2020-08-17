import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import { homeRoute } from "../../routes";
import { Dialog } from "../../components";
import { ProgressPost } from "../ProgressPost";
import style from "./PostView.scss";

const PostView = ({
  isShowing,
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect,
  newCommentHandler,
  deleteHandler
}) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={isShowing} hide={hide}>
      <ProgressPost
        className={style.post}
        spark={spark}
        post={post}
        canComment={canComment}
        reactionClick={reactionClick}
        reactionSelect={reactionSelect}
        newCommentHandler={newCommentHandler}
        deleteHandler={deleteHandler}
      />
    </Dialog>
  );
};

PostView.propTypes = {
  isShowing: PropTypes.node,
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool,
  reactionClick: PropTypes.func,
  reactionSelect: PropTypes.func,
  newCommentHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};

export { PostView };
