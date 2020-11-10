import React from "react";
import PropTypes from "prop-types";
import style from "./Table.scss";
import classNames from "../../helpers/classNames";

const TableRow = ({ children, className, header, ...rest }) => (
  <div
    className={classNames(className, style.tablerow, {
      [style.header]: header
    })}
    data-testid="tablerow"
    {...rest}
  >
    {children}
  </div>
);

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool
};

const TableCell = ({ children, className, push, ...rest }) => (
  <div
    className={classNames(className, style.tablecell, {
      [style.push]: push
    })}
    data-testid="tablerow"
    {...rest}
  >
    {children}
  </div>
);

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  push: PropTypes.bool
};

const Table = ({ children, className, ...rest }) => (
  <div
    className={classNames(className, style.table)}
    data-testid="table"
    {...rest}
  >
    {children}
  </div>
);

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Table, TableRow, TableCell };
