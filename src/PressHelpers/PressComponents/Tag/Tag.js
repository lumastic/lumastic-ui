/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Link, Type } from "../../../components";
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

export const TagSelectItem = ({ item, selected, onClick }) => (
  <div
    className={[styles.item, selected && styles.selected].join(" ")}
    onMouseDown={onClick}
  >
    <Type className={styles.icon}>#</Type>
    <Type>{item?.name}</Type>
  </div>
);
