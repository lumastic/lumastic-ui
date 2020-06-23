import PropTypes from "prop-types";
import React from "react";
import { Canvas, Viewport } from "../../components";
import { DragDropProvider } from "../../hooks";

const Board = ({ children, mode = "free" }) => (
  <DragDropProvider>
    <Viewport>
      <Canvas>{children}</Canvas>
    </Viewport>
  </DragDropProvider>
);

Board.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.bool
};

export { Board };
