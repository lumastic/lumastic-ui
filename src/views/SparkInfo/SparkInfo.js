import React from "react";
import PropTypes from "prop-types";
import { Card, Label, Type, List, IconButton, Link } from "../../components";
import { Tag } from "../../templates";
import { Gear } from "../../icons";
import { editSparkRoute } from "../../routes";
import style from "./SparkInfo.scss";
import classNames from "../../helpers/classNames";

const SparkInfo = ({ spark = {}, className, canEdit = false }) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label
          right={
            canEdit && (
              <Link
                button
                to={editSparkRoute(spark?.belongsTo?.name, spark?.id)}
              >
                <IconButton color="grey">
                  <Gear />
                </IconButton>
              </Link>
            )
          }
        >
          Description
        </Label>
        <Type>{spark.description}</Type>
      </div>
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

SparkInfo.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string,
  canEdit: PropTypes.bool
};

export { SparkInfo };
