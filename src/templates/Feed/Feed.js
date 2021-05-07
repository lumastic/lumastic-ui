/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { LoadingSpinner, Timeline } from "../../components";
import classNames from "../../helpers/classNames";
import style from "./Feed.scss";

const Feed = ({
  children,
  className,
  loadMore = async () => {
    await new Promise(r => setTimeout(r, 3000));
    // console.log("Loaded");
  },
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
        await loadMore(e);
        setLoading(false);
        // console.log("Here 2");
        listenTo.addEventListener("scroll", checkScrollBottom);
      }
    }
    listenTo.addEventListener("scroll", checkScrollBottom);
    return () => {
      listenTo.removeEventListener("scroll", checkScrollBottom);
    };
  }, [loadMore, ref, setLoading, scrollContainerId]);
  return (
    <>
      <div
        className={classNames(className, style.feed)}
        data-testid="feed"
        ref={ref}
        {...rest}
      >
        {/* if there are feed items, display them */}
        {children[0].length > 0 && (
          <>
            <Timeline className={style.timeline} />
            <div className={style["feed-items"]}>{children}</div>
          </>
        )}
      </div>
      {loadingMore && (
        <div className={style.loading}>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

Feed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loadMore: PropTypes.func,
  scrollContainerId: PropTypes.string
};

export { Feed };
