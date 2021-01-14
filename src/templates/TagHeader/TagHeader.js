import React from "react";
import PropTypes from "prop-types";
import { Card, IconButton, Link, Tooltip, Type } from "../../components";
import { Signature } from "..";
import { Hashtag, Plus, Times } from "../../icons";
import { tagRoute } from "../../routes";
import style from "./TagHeader.scss";
import classNames from "../../helpers/classNames";

const TagHeader = ({
  className,
  tag = {},
  following,
  onFollow,
  onUnfollow
}) => (
  <Card
    className={classNames(className, style.tagheader)}
    data-testid="tagheader"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${tag?.backgroundImage ||
        "https://cdn.lumastic.com/media/v1/pages/demo/Header.png"})`
    }}
  >
    <div className={style.push}>
      <Link inline to={tagRoute(tag?.name)} className={style.name}>
        <Signature>
          <Type h3 color="white">
            <Hashtag />
          </Type>
          <Type h3 headerFont color="white">
            <b>{tag.name || "woodworking"}</b>
          </Type>
        </Signature>
      </Link>
      <div className={style.button}>
        {following ? (
          <Tooltip label="Unfollow">
            <IconButton
              color="light"
              onClick={() => onUnfollow(tag?.id)}
              disabled={!onUnfollow}
            >
              <Times />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip label="Follow">
            <IconButton
              variant="contained"
              onClick={() => onFollow(tag?.id)}
              disabled={!onFollow}
            >
              <Plus />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
    <Type body2 color="white" headerFont>
      {tag?.followers?.length || 0} Followers
    </Type>
    <Type body2 color="white" headerFont>
      {tag?.sparks?.length || 0} Sparks
    </Type>
  </Card>
);

TagHeader.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.object,
  following: PropTypes.bool,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func
};

export { TagHeader };
