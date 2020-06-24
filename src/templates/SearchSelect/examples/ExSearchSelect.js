import React from "react";
import { SearchSelect } from "..";
import { Chip } from "../../../components";

export const ExSearchSelect = () => {
  const array = [
    { text: "this", id: 1 },
    { text: "is", id: 2 },
    { text: "an", id: 3 },
    { text: "array", id: 4 }
  ];
  const searchFunc = value =>
    array.filter(result => result?.text?.includes(value));

  const renderResult = ({ text }) => <div>{text}</div>;

  const renderSelection = ({ text, onRemove }) => (
    <Chip label={text} onRemove={onRemove} />
  );

  return (
    <SearchSelect
      onSearch={searchFunc}
      renderResult={renderResult}
      renderSelection={renderSelection}
    />
  );
};
