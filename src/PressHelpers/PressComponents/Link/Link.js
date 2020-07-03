/* eslint-disable react/prop-types */
import React, { useState } from "react";
import style from "./Link.scss";
import { Type, Button, TextInput, LoadingSpinner } from "../../../components";

/**
 * Hello this is the gallery
 * @param {{value: [], onChange: () => {}, callbacks: { uploadFile: () => {} }, readOnly: Boolean}} param0
 */
const Link = ({ value, onChange, callbacks, readOnly }) => {
  const { metascrapi } = callbacks;
  const { url, base, image, title, favicon } = value;
  const [loading, setLoading] = useState(false);

  const onLinkChange = async e => {
    setLoading(true);
    if (metascrapi) {
      const scraped = await metascrapi(e.target.value);
      if (onChange) onChange(scraped);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={style.link}>
        {loading ? (
          <div className={style.loading}>
            <LoadingSpinner />
          </div>
        ) : (
          <a href={url} target="blank">
            <div className={style.container}>
              <div
                className={style.img}
                style={{
                  backgroundImage: `url(${image || `${base}${favicon}`})`
                }}
              />
              <div className={style["text-container"]}>
                <Type caption color="grey">
                  {base}
                </Type>

                <Type>{title}</Type>
              </div>
            </div>
          </a>
        )}
      </div>
      {!readOnly && (
        <TextInput
          defaultValue={url}
          onChange={onLinkChange}
          placeholder="Paste in a link..."
        />
      )}
    </>
  );
};

export const link = {
  name: "link",
  render: Link,
  defaultValue: { url: "", base: "", image: "", title: "", favicon: "" },
  recieveCallbacks: true,
  displayName: "Link"
};
