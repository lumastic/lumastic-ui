import PropTypes from "prop-types";
import React, { useState } from "react";
import { BoardContext } from "./BoardContext";

const BoardProvider = ({ children, ...rest }) => {
  const [updateCanvas, setUpdateCanvas] = useState();
  const [activeCard, setActiveCard] = useState();
  return (
    <BoardContext.Provider
      value={{
        ...rest,
        updateCanvas,
        setUpdateCanvas,
        activeCard,
        setActiveCard
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

BoardProvider.propTypes = {
  children: PropTypes.node
};

export { BoardProvider };
