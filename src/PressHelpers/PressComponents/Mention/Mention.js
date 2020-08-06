/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Link } from "../../../components";
import styles from "./Mention.scss";
import { profileRoute } from "../../../routes";

export const Mention = memo(({ attributes, children, element, state }) => (
  <span contentEditable={false} className={styles.mention} {...attributes}>
    <Link inline to={profileRoute(state?.username)}>
      @{state?.name}
    </Link>
    {children}
  </span>
));
