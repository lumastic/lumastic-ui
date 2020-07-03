/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import style from "./Gallery.scss";
import { Type, Button } from "../../../components";

/**
 * Hello this is the gallery
 * @param {{value: [], onChange: () => {}, callbacks: { uploadFile: () => {} }, readOnly: Boolean}} param0
 */
const Gallery = ({ value, onChange, callbacks, readOnly }) => {
  const { uploadFile } = callbacks;
  const input = useRef();
  const handleFileUpload = async e => {
    if (onChange) {
      const files = await uploadFile(e.target.files);
      const images = [];

      if (files)
        files.forEach(file =>
          images.push({ src: file.url, alt: file?.meta?.alt })
        );
      if (onChange) onChange(value.concat(images));
    }
  };

  const onAddClick = () => {
    const clicked = input?.current.click();
  };

  return (
    <div className={style.gallery}>
      <div className={style.grid}>
        <div className={style.top}>
          {value?.slice(0, 2).map(image => (
            <img src={image?.src} alt={image?.alt} />
          ))}
        </div>
        <div className={style.bottom}>
          {value?.slice(2, 4).map(image => (
            <img src={image?.src} alt={image?.alt} />
          ))}
          {value[4] && (
            <div className={style.last}>
              {value.length > 5 && (
                <div className={style.cover}>
                  <div className={style.number}>
                    <Type>+{`${value.length - 5}`}</Type>
                  </div>
                </div>
              )}
              <img src={value[4]?.src} alt={value[4]?.alt} />
            </div>
          )}
        </div>
      </div>
      {!readOnly && (
        <>
          <Button onClick={onAddClick} variant="contained" size="small">
            Upload Image
          </Button>
          <input ref={input} type="file" onChange={handleFileUpload} hidden />
        </>
      )}
    </div>
  );
};

export const gallery = {
  name: "gallery",
  render: Gallery,
  defaultValue: [
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    },
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    },
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    },
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    },
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    },
    {
      src: "https://cdn.lumastic.com/media/v1/pages/demo/Header.png",
      alt: "alt test"
    }
  ],
  recieveCallbacks: true,
  displayName: "Photos"
};
