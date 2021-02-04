import React, { useState } from "react";
import PropTypes from "prop-types";
import { Hashtag } from "../../icons/Hashtag";
import { Card, Type, Link, IconButton, Tooltip } from "../../components";
import { Signature } from "../Signature";
import style from "./Tag.scss";
import classNames from "../../helpers/classNames";
import { tagRoute } from "../../routes";
import { Plus, Times } from "../../icons";

const Tag = ({ tag = {}, className, isFollowing, onFollow, onUnfollow }) => (
  <Card
    className={classNames(className, style.tag)}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${tag?.backgroundImage ||
        "https://cdn.lumastic.com/media/v1/pages/demo/Header.png"})`
    }}
  >
    <div className={style.push}>
      <Link inline to={tagRoute(tag?.name)} className={style.name}>
        <Signature>
          <Hashtag />
          <Type headerFont>
            <b>{tag.name || "woodworking"}</b>
          </Type>
        </Signature>
      </Link>
      <div className={style.button}>
        {isFollowing ? (
          <Tooltip label="Unfollow">
            <IconButton
              size="small"
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
              size="small"
              disabled={!onFollow}
              onClick={() => onFollow(tag?.id)}
            >
              <Plus />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  </Card>
);

Tag.propTypes = {
  tag: PropTypes.object,
  className: PropTypes.string,
  isFollowing: PropTypes.bool,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func
};

export { Tag };
