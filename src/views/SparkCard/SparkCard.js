import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import { TagChip } from "../..";
import { Card, Type, Link } from "../../components";
import { parseContent } from "../../helpers";
import { pressComponents } from "../../PressHelpers";
import { profileRoute, viewSparkRoute } from "../../routes";
import style from "./SparkCard.scss";

const SparkCard = ({ spark = {} }) => (
  <Card>
    {spark?.headerURL && (
      <div
        className={style.header}
        style={{
          backgroundImage: `url("${spark?.headerURL}")`
        }}
      />
    )}

    <Link to={viewSparkRoute(spark?.belongsTo?.name, spark.id)}>
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
      {` • ${spark?.visibility}`}
    </Type>

    <Type tag="div" gutterBottom>
      {spark?.description && (
        <PressRenderer
          components={pressComponents}
          value={parseContent(spark?.description)}
        />
      )}
    </Type>

    <div>
      {spark?.tags?.slice(0, 4).map((tag, key) => (
        <TagChip tag={tag} key={key} />
      ))}
    </div>
  </Card>
);

SparkCard.propTypes = {
  spark: PropTypes.object
};

export { SparkCard };
