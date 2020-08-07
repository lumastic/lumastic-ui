/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from "react";
import { Link, Avatar, Type } from "../../../components";
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

export const MentionSelectItem = ({ item, selected, onClick }) => (
  <div
    className={[styles.item, selected && styles.selected].join(" ")}
    onMouseDown={onClick}
  >
    <Avatar src={item?.avatarURL} className={styles.avatar} />
    <Type>{item?.name}</Type>
  </div>
);
