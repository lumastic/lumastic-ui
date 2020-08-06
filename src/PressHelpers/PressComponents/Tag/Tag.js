/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Link } from "../../../components";
import styles from "./Tag.scss";
import { tagRoute } from "../../../routes";

export const Tag = memo(({ attributes, children, element, state }) => (
  <span contentEditable={false} className={styles.tag} {...attributes}>
    <Link inline to={tagRoute(state?.name)}>
      #{state?.name}
    </Link>
    {children}
  </span>
));
