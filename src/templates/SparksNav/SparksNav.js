import React from "react";
import PropTypes from "prop-types";
import style from "./SparksNav.scss";
import classNames from "../../helpers/classNames";
import { NavButton, Type, Divider } from "../../components";
import { Accordion, AccordionTrigger, AccordionContent } from "../Accordion";
import { viewSparkRoute, viewBoardRoute } from "../../routes";

const SparksNav = ({ sparks = [], className, ...rest }) => (
  <div
    className={classNames(className, style.sparksnav)}
    data-testid="sparksnav"
    {...rest}
  >
    {sparks?.map((spark, index) => (
      <Accordion key={spark?.id || index}>
        <NavButton exact to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}>
          <AccordionTrigger>
            <Type tag="div">{spark?.title}</Type>
          </AccordionTrigger>
        </NavButton>
        <AccordionContent className={style.boards}>
          {spark?.boards?.map((board, key) => (
            <NavButton
              key={board?.id || key}
              to={viewBoardRoute(spark?.belongsTo?.name, spark?.id, board?.id)}
              exact
            >
              <Type tag="div">{board?.name}</Type>
            </NavButton>
          ))}
        </AccordionContent>
      </Accordion>
    ))}
  </div>
);

SparksNav.propTypes = {
  sparks: PropTypes.array,
  className: PropTypes.string
};

export { SparksNav };
