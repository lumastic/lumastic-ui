import React from "react";
import PropTypes from "prop-types";
import style from "./AddMemberForm.scss";
import classNames from "../../helpers/classNames";
import { Button, Form, Avatar, Type, Chip } from "../../components";
import { Signature, SearchSelect } from "../../templates";
import { useReset } from "../../hooks";

const AddMemberForm = ({
  className,
  buttonLabel = "Add Members",
  onSubmit,
  buttonProps = {},
  onSearchOrgs,
  disabled
}) => {
  const [reset, toggle] = useReset();

  return (
    <Form
      className={classNames(className, style.addmemberform)}
      data-testid="addmemberform"
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
    >
      <SearchSelect
        name="membersToAdd"
        placeholder="Invite people..."
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
      <Button type="submit" {...buttonProps} disabled={disabled}>
        {buttonLabel}
      </Button>
    </Form>
  );
};

AddMemberForm.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonProps: PropTypes.object,
  onSearchOrgs: PropTypes.func,
  disabled: PropTypes.bool
};

export { AddMemberForm };
