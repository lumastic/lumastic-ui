import React from "react";
import PropTypes from "prop-types";
import style from "./PageSignature.scss";
import classNames from "../../helpers/classNames";
import { Type } from "../../components/Type";
import { Signature } from "../Signature";

const PageSignature = ({ icon, title }) => (
  <Signature>
    <span className={style.icon}>{icon}</span>
    <Type h4>{title}</Type>
  </Signature>
);

PageSignature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string
};

export { PageSignature };
