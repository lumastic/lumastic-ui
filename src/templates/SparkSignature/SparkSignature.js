import PropTypes from "prop-types";
import React from "react";
import { Type, Link } from "../../components";
import { Spark } from "../../icons";
import { Signature } from "../Signature";
import { viewSparkRoute } from "../../routes";

const SparkSignature = ({ spark = {}, small = false }) => (
  <Signature>
    <Type body2={small}>{spark.icon || <Spark />}</Type>
    <Link inline to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}>
      <Type body2={small}>{spark.title}</Type>
    </Link>
  </Signature>
);

SparkSignature.propTypes = {
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkSignature };
