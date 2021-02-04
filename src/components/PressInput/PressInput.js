import { Press, PressProvider, defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import classNames from "../../helpers/classNames";
import { useInputContext } from "../../helpers/useInputContext";
import {
  pressComponents,
  PressMenu,
  Mention,
  Tag,
  MentionSelectItem,
  TagSelectItem
} from "../../PressHelpers";
import { Type } from "../Type";
import style from "./PressInput.scss";
import { useUser } from "../../hooks";

const PressInput = ({
  defaultValue,
  placeholder,
  name = "pressinput",
  reset,
  readOnly,
  big,
  className
}) => {
  const { register, setValue, errors } = useInputContext();
  const { callbacks } = useUser();
  // console.log(defaultValue);
  useEffect(() => {
    if (register) register({ name });
  }, [register, name]);

  useEffect(() => {
    if (setValue)
      setValue(name, JSON.stringify(defaultValue || defaultPressValue()));
  }, []);

  const onChange = value => {
    if (setValue) setValue(name, JSON.stringify(value));
  };
  // console.log(defaultVa5lue);
  return (
    <>
      {errors && errors[name] && (
        <Type caption color="red">
          {errors[name]?.message}
        </Type>
      )}
      <div
        className={classNames(className, style.pressinput)}
        data-testid="pressinput"
      >
        <PressProvider initialValue={defaultValue} reset={reset}>
          <Type tag="div" setSize={big && "1.125rem"}>
            <Press
              placeholder={placeholder || "Start writing..."}
              onChange={onChange}
              renderMenu={PressMenu}
              readOnly={readOnly}
              components={pressComponents}
              callbacks={callbacks}
              renderMention={Mention}
              renderMentionItem={MentionSelectItem}
              renderTag={Tag}
              renderTagItem={TagSelectItem}
            />
          </Type>
        </PressProvider>
      </div>
    </>
  );
};

PressInput.propTypes = {
  defaultValue: PropTypes.array,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  reset: PropTypes.bool,
  big: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string
};

export { PressInput };
