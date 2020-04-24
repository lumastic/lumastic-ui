import React, { Children } from "react";
import PropTypes from "prop-types";
import style from "./AvatarGroup.scss";
import classNames from "../../helpers/classNames";
import { Type } from "../Type";

const AvatarGroup = ({ children, className, more }) => (
  <div
    className={classNames(className, style.avatargroup)}
    data-testid="avatargroup"
  >
    {Children.map(children, child => (
      <div className={style.avatar}>{child}</div>
    ))}
    {more ? (
      <div className={style.more}>
        <Type setSize="0.6rem" color="grey">
          <b>{`+${more > 99 ? 99 : more}`}</b>
        </Type>
      </div>
    ) : null}
  </div>
);

AvatarGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  more: PropTypes.number
};

export { AvatarGroup };
