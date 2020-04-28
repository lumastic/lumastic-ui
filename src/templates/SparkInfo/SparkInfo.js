import React from "react";
import PropTypes from "prop-types";
import style from "./SparkInfo.scss";
import classNames from "../../helpers/classNames";
import { Card } from "../../components/Card";
import { Label } from "../../components/Label";
import { Type } from "../../components/Type";
import { List } from "../../components/List";
import { Tag } from "../Tag";

const SparkInfo = ({ spark = {}, className }) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label>Description</Label>
        <Type>{spark.description}</Type>
      </div>
      <div>
        <Label>Tags</Label>
        <div className={style.tags}>
          {spark.tags.map((tag, index) => (
            <Tag tag={tag} key={tag.id || index} />
          ))}
        </div>
      </div>
    </List>
  </Card>
);

SparkInfo.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string
};

export { SparkInfo };
