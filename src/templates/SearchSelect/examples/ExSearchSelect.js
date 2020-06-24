import React from "react";
import { SearchSelect } from "..";

export const ExSearchSelect = () => {
  const array = [
    { text: "this" },
    { text: "is" },
    { text: "an" },
    { text: "array" }
  ];
  const searchFunc = value =>
    array.filter(result => result?.text?.includes(value));

  const renderResults = ({ text }) => <div>{text}</div>;

  return <SearchSelect onSearch={searchFunc} renderResults={renderResults} />;
};
