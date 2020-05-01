import React from "react";
import PropTypes from "prop-types";
import { Hashtag } from "../../icons/Hashtag";
import { Chip } from "../../components/Chip";
import style from "./Tag.scss";
import classNames from "../../helpers/classNames";

const Tag = ({ tag = {}, className }) => (
  <Chip
    className={classNames(className, style.tag)}
    label={tag.name || "Tag Name"}
    symbol={<Hashtag />}
  />
);

Tag.propTypes = {
  tag: PropTypes.object,
  className: PropTypes.string
};

export { Tag };
