/* eslint-disable react/prop-types */
import React from "react";
import { TextEditor }

const YouTube = ({ value, onChange }) => {
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

      <TextInput value={value?.link || ""} onChange={handleValueChange} />
    </div>
  );
};

export const ytConfig = {
  name: "yt",
  render: YouTube,
  defaultValue: { link: "" },
  displayName: "YouTube Video"
};