import React from "react";
import PropTypes from "prop-types";
import style from "./Feed.scss";
import classNames from "../../helpers/classNames";
import { Timeline } from "../../components/Timeline";

const Feed = ({ children, className, ...rest }) => (
  <div
    className={classNames(className, style.feed)}
    data-testid="feed"
    {...rest}
  >
    <div className={style.timeline}>
      <Timeline />
    </div>
    <div className={style.items}>{children}</div>
  </div>
);

Feed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Feed };
