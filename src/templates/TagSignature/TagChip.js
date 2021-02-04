import PropTypes from "prop-types";
import React from "react";
import { Chip, Link } from "../..";
import { Hashtag } from "../../icons/Hashtag";
import { tagRoute } from "../../routes";

const TagChip = ({ tag = {}, onRemove, disableLink = false }) => (
  <Link to={!disableLink && tagRoute(tag?.name)} inline>
    <Chip symbol={<Hashtag />} label={tag?.name} onRemove={onRemove} />
  </Link>
);

TagChip.propTypes = {
  tag: PropTypes.object,
  onRemove: PropTypes.func,
  disableLink: PropTypes.bool
};

export { TagChip };
