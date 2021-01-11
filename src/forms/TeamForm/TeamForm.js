import React from "react";
import PropTypes, { number } from "prop-types";
import style from "./TeamForm.scss";
import classNames from "../../helpers/classNames";
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

const TeamForm = ({
  onSubmit,
  defaultValues = {},
  buttonLabel = "Add Team",
  buttonProps = {},
  onSearchOrgs,
  onChangeTeam,
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
          await onSubmit(
            { team: data?.team[0], licenses: parseInt(data?.licenses) },
            e,
            rest
          );
        } else {
          alert(JSON.stringify(data));
        }
      }}
      defaultValues={{
        team: [],
        ...defaultValues
      }}
    >
      <div>
        <Label>Team:</Label>
        <SearchSelect
          name="team"
          placeholder="Search organizations..."
          onSearch={onSearchOrgs}
          onChange={onChangeTeam}
          maxSelected={1}
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
      <div>
        <Label>Licenses</Label>
        <TextInput name="licenses" placeholder="How many licenses?" />
      </div>
      <Button size="small" variant="contained" type="submit" {...buttonProps}>
        {buttonLabel}
      </Button>
    </Form>
  );
};

TeamForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  buttonProps: PropTypes.object,
  buttonLabel: PropTypes.string,
  onSearchOrgs: PropTypes.func,
  className: PropTypes.string,
  onChangeTeam: PropTypes.func
};

export { TeamForm };
