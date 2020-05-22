import React from "react";
import PropTypes from "prop-types";
import { Card, Type, Label, List, Link } from "../../components";
import { SparkCrumbs, Tag } from "../../templates";
import { viewSparkRoute } from "../../routes";
import style from "./SparkCard.scss";
import classNames from "../../helpers/classNames";

const SparkCard = ({ spark = {} }) => (
  <Card>
    <List>
      <SparkCrumbs spark={spark} organization={spark?.belongsTo} />
      <Type>{spark.description}</Type>
      <div>
        <Label>Tags</Label>
        <div className={style.tags}>
          {spark.tags?.map((tag, index) => (
            <Tag tag={tag} key={tag.id || index} />
          ))}
        </div>
      </div>
    </List>
  </Card>
);

SparkCard.propTypes = {
  spark: PropTypes.object
};

export { SparkCard };
