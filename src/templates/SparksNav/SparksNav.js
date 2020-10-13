import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  IconButton,
  Label,
  Link,
  MenuItem,
  NavButton,
  Tooltip,
  Type
} from "../../components";
import classNames from "../../helpers/classNames";
import { Plus } from "../../icons";
import { createBoardRoute, viewBoardRoute, viewSparkRoute } from "../../routes";
import { Accordion, AccordionContent, AccordionTrigger } from "../Accordion";
import { MoreMenu } from "../MoreMenu";
import style from "./SparksNav.scss";

const SparksNavButton = ({ spark = {} }) => {
  const [menuShowing, setShowing] = useState(false);

  return (
    <Accordion>
      <NavButton
        exact
        to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}
        className={style.navbtn}
      >
        <AccordionTrigger>
          <div className={style.container}>
            <Type tag="div" className={style.title}>
              {spark?.title}
            </Type>
            <div
              className={classNames(
                { [style.showing]: menuShowing },
                style.btns
              )}
            >
              <div className={style.btn}>
                <MoreMenu
                  onOpen={() => {
                    setShowing(true);
                  }}
                  onClose={() => setShowing(false)}
                  position="right"
                >
                  <MenuItem>
                    <Type body2>Edit</Type>
                  </MenuItem>
                  <MenuItem>
                    <Type body2 color="red">
                      Delete
                    </Type>
                  </MenuItem>
                </MoreMenu>
              </div>
            </div>
          </div>
        </AccordionTrigger>
      </NavButton>
      <AccordionContent className={style.boards}>
        <Label className={style["space-label"]}>Spaces</Label>
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
  );
};

const SparksNav = ({ sparks = [], className, ...rest }) => (
  <div
    className={classNames(className, style.sparksnav)}
    data-testid="sparksnav"
    {...rest}
  >
    {sparks?.map((spark, index) => (
      <SparksNavButton spark={spark} key={spark?.id || index} />
    ))}
  </div>
);

SparksNavButton.propTypes = {
  spark: PropTypes.object
};

SparksNav.propTypes = {
  sparks: PropTypes.array,
  className: PropTypes.string
};

export { SparksNav };
