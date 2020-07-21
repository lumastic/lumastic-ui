import React from "react";
import PropTypes from "prop-types";
import style from "./SparksNav.scss";
import classNames from "../../helpers/classNames";
import { NavButton, Type } from "../../components";
import { Accordion, AccordionTrigger, AccordionContent } from "../Accordion";

const SparksNav = ({ sparks = [], className, ...rest }) => (
  <div
    className={classNames(className, style.sparksnav)}
    data-testid="sparksnav"
    {...rest}
  >
    {sparks?.map((spark, index) => (
      <Accordion key={spark?.id || index}>
        <NavButton>
          <AccordionTrigger>
            <Type tag="div">{spark?.title}</Type>
          </AccordionTrigger>
        </NavButton>
        <AccordionContent className={style.boards}>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
          <NavButton>
            <Type tag="div">Test</Type>
          </NavButton>
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
