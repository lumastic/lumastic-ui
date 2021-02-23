import PropTypes from "prop-types";
import React from "react";
import { Type } from "../../components";
import { Spark } from "../../icons";
import { Signature } from "../Signature";

const SparkSignature = ({ spark = {}, small = false }) => (
  <Signature data-testid="sparksignature">
    <Type body2={small}>{spark.icon || <Spark />}</Type>
    <Type body2={small}>{spark.title}</Type>
  </Signature>
);

SparkSignature.propTypes = {
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkSignature };
