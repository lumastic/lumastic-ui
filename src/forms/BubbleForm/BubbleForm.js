import React from "react";
import PropTypes from "prop-types";
import { useReset } from "../../hooks";
import {
  Avatar,
  Button,
  Chip,
  Form,
  Label,
  TextInput,
  Type
} from "../../components";
import { SearchSelect, Signature } from "../../templates";
import style from "./BubbleForm.scss";
import classNames from "../../helpers/classNames";

const BubbleForm = ({
  onSubmit,
  defaultValues = {},
  buttonLabel = "New Bubble",
  buttonProps = {},
  onSearchOrgs,
  className
}) => {
  const [reset, toggle] = useReset();
  return (
    <Form
      className={classNames(style.search, className)}
      onSubmit={async (data, e, rest) => {
        const { reset: formReset } = rest;
        rest.reset = () => {
          formReset();
          toggle();
        };
        if (onSubmit) {
          await onSubmit(data, e, rest);
        } else {
          alert(JSON.stringify(data));
        }
      }}
      defaultValues={{ collaborators: [], ...defaultValues }}
    >
      <div>
        <Label>Name</Label>
        <TextInput name="name" placeholder="Bubble name..." />
      </div>
      <div>
        <Label>Share With</Label>
        <SearchSelect
          name="collaborators"
          placeholder="Add people or organizations..."
          onSearch={onSearchOrgs}
          renderResult={({ name, avatarURL }) => (
            <Signature>
              <Avatar src={avatarURL} size="small" />
              <Type body2>{name}</Type>
            </Signature>
          )}
          renderSelection={({ name, avatarURL, onRemove }) => (
            <Chip
              symbol={<Avatar src={avatarURL} size="small" />}
              label={name}
              onRemove={onRemove}
            />
          )}
          reset={reset}
        />
      </div>
      <Button size="small" variant="contained" type="submit" {...buttonProps}>
        {buttonLabel}
      </Button>
    </Form>
  );
};

BubbleForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  buttonProps: PropTypes.object,
  buttonLabel: PropTypes.string,
  onSearchOrgs: PropTypes.func,
  className: PropTypes.string
};

export { BubbleForm };
