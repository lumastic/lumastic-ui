import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import { Card, Label, List, Type } from "../../components";
import { parseContent } from "../../helpers";
import { pressComponents } from "../../PressHelpers";
import { SparkCrumbs, Tag } from "../../templates";
import style from "./SparkCard.scss";

const SparkCard = ({ spark = {} }) => (
  <Card>
    <List>
      <SparkCrumbs
        spark={spark}
        organization={spark?.belongsTo}
        user={
          spark?.belongsTo?.isUserOrganization && spark?.belongsTo?.createdBy
        }
      />
      <Type tag="div">
        <PressRenderer
          components={pressComponents}
          value={parseContent(spark?.description)}
        />
      </Type>
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
