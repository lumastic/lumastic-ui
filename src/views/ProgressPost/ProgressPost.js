import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Type } from "../../components/Type";
import { Comments } from "../../templates/Comments";
import { Reactions } from "../../templates/Reactions";
import { SparkCrumbs } from "../../templates/SparkCrumbs";
import style from "./ProgressPost.scss";

const ProgressPost = ({ spark = {}, post = {}, canComment = false }) => (
  <Card className={style.progresspost}>
    <div className={style.postheader}>
      <SparkCrumbs spark={spark} className={style.crumbs} small />
      <Type color="grey" className={style.time} tag="div" setSize="0.7rem">
        time
      </Type>
    </div>
    <Type tag="div">{post.content}</Type>
    <div className={style.postreactions}>
      <Reactions />
      {(post.comments || canComment) && <Divider />}
    </div>
    {(post.comments || canComment) && (
      <Comments comments={post.comments} canComment={canComment} />
    )}
  </Card>
);

ProgressPost.propTypes = {
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool
};

export { ProgressPost };
