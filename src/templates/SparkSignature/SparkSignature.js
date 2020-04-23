import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Signature } from "../Signature";
import { Type } from "../../components/Type";
import { Spark } from "../../icons/Spark";

const SparkSignature = ({ spark = {}, small = false }) => (
  <Link to="#">
    <Signature>
      <Type body2={small}>{spark.icon || <Spark />}</Type>
      <Type body2={small}>{spark.title}</Type>
    </Signature>
  </Link>
);

SparkSignature.propTypes = {
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkSignature };
