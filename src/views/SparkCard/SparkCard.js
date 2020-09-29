import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import { Card, Type } from "../../components";
import { parseContent } from "../../helpers";
import { pressComponents } from "../../PressHelpers";
import style from "./SparkCard.scss";

const SparkCard = ({ spark = {} }) => (
  <Card className={style.glow}>
    <Type h4>{spark.title}</Type>
    <Type
      color="grey"
      className={style.time}
      tag="div"
      caption
      setSize="0.7rem"
    >
      {`${spark?.belongsTo?.name} • ${spark?.posts?.length} posts • ${spark?.visibility}`}
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
