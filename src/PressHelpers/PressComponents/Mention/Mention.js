/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Link } from "../../../components";
import styles from "./Mention.scss";

export const Mention = memo(({ attributes, children, element, state }) => (
  <span contentEditable={false} className={styles.mention} {...attributes}>
    <Link inline to="/home">
      @{state?.name}
    </Link>
    {children}
  </span>
));
