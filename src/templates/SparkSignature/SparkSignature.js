import PropTypes from "prop-types";
import React from "react";
import { Signature } from "../Signature";
import { Type } from "../../components/Type";
import { Spark } from "../../icons/Spark";

const SparkSignature = ({ spark = {}, small = false }) => (
  <Signature>
    <Type body2={small}>{spark.icon || <Spark />}</Type>
    <Type body2={small}>{spark.title}</Type>
  </Signature>
);

SparkSignature.propTypes = {
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkSignature };
