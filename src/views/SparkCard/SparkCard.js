import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import { Card, Type, Link } from "../../components";
import { parseContent } from "../../helpers";
import { pressComponents } from "../../PressHelpers";
import { profileRoute, viewSparkRoute } from "../../routes";
import style from "./SparkCard.scss";

const SparkCard = ({ spark = {} }) => (
  <Card className={style.glow}>
    <Link to={viewSparkRoute(spark?.belongsTo?.name, spark.id)} inline>
      <Type h4>{spark.title}</Type>
    </Link>
    <Type
      color="grey"
      className={style.time}
      tag="div"
      caption
      setSize="0.7rem"
    >
      <Link to={profileRoute(spark?.belongsTo?.name)} inline>
        {spark?.belongsTo?.name}
      </Link>
      {` • ${spark?.progressBoards[0]?.progressUpdates?.length} updates • ${spark?.visibility}`}
    </Type>
    <Type tag="div">
      <PressRenderer
        components={pressComponents}
        value={parseContent(spark?.description)}
      />
    </Type>
  </Card>
);

SparkCard.propTypes = {
  spark: PropTypes.object
};

export { SparkCard };
