import PropTypes from "prop-types";
import React from "react";
import { Type } from "../../components/Type";
import { Hashtag } from "../../icons/Hashtag";
import { Signature } from "../Signature";

const TagSignature = ({ tag = {}, small }) => (
  <Signature>
    <Type body2={small}>{tag.icon || <Hashtag />}</Type>
    <Type body2={small}>{tag.name}</Type>
  </Signature>
);

TagSignature.propTypes = {
  tag: PropTypes.object,
  small: PropTypes.bool
};

export { TagSignature };
