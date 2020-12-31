import PropTypes from "prop-types";
import React from "react";
import { Chip, Link } from "../..";
import { Hashtag } from "../../icons/Hashtag";
import { tagRoute } from "../../routes";

const TagChip = ({ tag = {} }) => (
  <Link to={tagRoute(tag?.name)} inline>
    <Chip symbol={<Hashtag />} label={tag?.name} />
  </Link>
);

TagChip.propTypes = {
  tag: PropTypes.object
};

export { TagChip };
