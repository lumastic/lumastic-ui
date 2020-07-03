/* eslint-disable react/prop-types */
import React from "react";
import { getYtId } from "./helpers/getYtId";
import { TextInput } from "../../../components";
import style from "./YouTube.scss";

const YouTube = ({ value, onChange, readOnly }) => {
  const handleValueChange = e => {
    const link = e?.target?.value;
    if (onChange) onChange({ link });
  };
  return (
    <div>
      <div className={style.fluidMedia}>
        <iframe
          src={`https://www.youtube.com/embed/${getYtId(value?.link || "")}`}
          frameBorder="0"
          width="100%"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YT video"
        />
      </div>

      {!readOnly && (
        <TextInput
          value={value?.link || ""}
          onChange={handleValueChange}
          placeholder="Paste in a YouTube link..."
        />
      )}
    </div>
  );
};

export const yt = {
  name: "yt",
  render: YouTube,
  defaultValue: { link: "" },
  displayName: "YouTube Video"
};
