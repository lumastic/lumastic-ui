import PropTypes from "prop-types";
import React from "react";
import { PressRenderer } from "pressdk";
import { Card, IconButton, Label, Link, List, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { Pencil } from "../../icons";
import { editSparkRoute } from "../../routes";
import { Tag } from "../../templates";
import style from "./SparkInfo.scss";
import { pressComponents } from "../../PressHelpers";
import { parseContent } from "../../helpers";

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
                  <Pencil />
                </IconButton>
              </Link>
            )
          }
        >
          Title
        </Label>
        <Type>{spark.title}</Type>
      </div>
      <div>
        <Label>Description</Label>
        <Type tag="div">
          <PressRenderer
            components={pressComponents}
            value={parseContent(spark?.description)}
          />
        </Type>
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
