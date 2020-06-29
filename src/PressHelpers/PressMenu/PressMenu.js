import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../../components";
import { AddComponent } from "./AddComponent";
import { RemoveComponent } from "./RemoveComponent";
import style from "./PressMenu.scss";

const PressMenu = ({
  insertComponent,
  insertEditor,
  removeComponent,
  components
}) => (
  <>
    <Divider />
    <div className={style.items}>
      <AddComponent
        insertComponent={insertComponent}
        insertEditor={insertEditor}
        components={components}
      />
      <RemoveComponent removeComponent={removeComponent} />
    </div>
  </>
);

PressMenu.propTypes = {
  insertEditor: PropTypes.func,
  insertComponent: PropTypes.func,
  components: PropTypes.array,
  removeComponent: PropTypes.func
};

export { PressMenu };
