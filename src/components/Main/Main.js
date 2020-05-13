import React from "react";
import PropTypes from "prop-types";
import { LoadingSpinner } from "..";
import style from "./Main.scss";
import classNames from "../../helpers/classNames";

const Main = ({ children, className, loading = false }) => (
  <main
    className={classNames(className, style.main, { [style.loading]: loading })}
    data-testid="main"
  >
    {loading ? <LoadingSpinner className={style.spinner} /> : children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool
};

export { Main };
