import React, { createElement } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/link.scss";
import classNames from "./classNames";

const withLink = (Component, linkProps = {}, button = false) => props => {
  const history = useHistory();
  return (
    <>
      {!button ? (
        <Link
          {...linkProps}
          className={classNames(styles.link, linkProps.className)}
        >
          <Component {...props} />
        </Link>
      ) : (
        createElement(<Component />, {
          onClick: () => history.push(linkProps.to)
        })
      )}
    </>
  );
};

withLink.propTypes = {
  component: PropTypes.node.isRequired,
  linkProps: PropTypes.object.isRequired,
  button: PropTypes.bool
};

export default withLink;
