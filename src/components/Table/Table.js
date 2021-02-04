import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import style from "./Table.scss";
import classNames from "../../helpers/classNames";
import { LoadingSpinner } from "../LoadingSpinner";
import { Type } from "../Type";

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

const Table = ({
  children,
  className,
  loadMore,
  scrollContainerId,
  ...rest
}) => {
  const ref = useRef();
  const [loadingMore, setLoading] = useState(false);
  useEffect(() => {
    const listenTo = document.getElementById(scrollContainerId) || document;
    async function checkScrollBottom(e) {
      if (
        ref?.current?.getBoundingClientRect()?.bottom <=
        window.innerHeight + 50
      ) {
        listenTo.removeEventListener("scroll", checkScrollBottom);
        setLoading(true);
        // console.log("Here");
        if (loadMore) await loadMore(e);
        setLoading(false);
        // console.log("Here 2");
        listenTo.addEventListener("scroll", checkScrollBottom);
      }
    }
    if (loadMore) listenTo.addEventListener("scroll", checkScrollBottom);
    return () => {
      listenTo.removeEventListener("scroll", checkScrollBottom);
    };
  }, [loadMore, ref, setLoading, scrollContainerId]);
  return (
    <div
      className={classNames(className, style.table)}
      data-testid="table"
      ref={ref}
      {...rest}
    >
      {children}
      {loadingMore && (
        <Type align="center">
          <LoadingSpinner />
        </Type>
      )}
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loadMore: PropTypes.func,
  scrollContainerId: PropTypes.string
};

export { Table, TableRow, TableCell };
