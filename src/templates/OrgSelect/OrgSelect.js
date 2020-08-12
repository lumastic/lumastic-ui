import React from "react";
import PropTypes from "prop-types";
import { Select, Option, Avatar, Type } from "../../components";
import { Signature } from "..";
import { useUser } from "../../hooks";
import style from "./OrgSelect.scss";
import classNames from "../../helpers/classNames";

const OrgSelect = ({
  className,
  organizations = [],
  defaultValue,
  name,
  small,
  addOption,
  onChange,
  onOpen,
  onClose,
  avatarsOnly = false,
  asFilter = false
}) => {
  const { avatarURL } = useUser();
  return (
    <Select
      defaultValue={defaultValue}
      name={name}
      small={small}
      addOption={addOption}
      onChange={onChange}
      onOpen={onOpen}
      onClose={onClose}
      className={classNames(className, style.select)}
      compact={avatarsOnly}
    >
      {asFilter && (
        <Option name="all">
          <Signature>
            <Avatar src={avatarURL} setSize="1.25rem" />
            {!avatarsOnly && <Type>My Sparks</Type>}
          </Signature>
        </Option>
      )}
      {/* {asFilter && (
        <Option name="collab">
          <Signature>
            <Avatar src={avatarURL} setSize="1.25rem" />
            {!avatarsOnly && <Type>Collaborating</Type>}
          </Signature>
        </Option>
      )} */}
      {organizations.map((org, index) => (
        <Option name={org.id} key={index}>
          <Signature>
            <Avatar src={org.avatarURL} setSize="1.25rem" />
            {!avatarsOnly && <Type>{org.name}</Type>}
          </Signature>
        </Option>
      ))}
    </Select>
  );
};

OrgSelect.propTypes = {
  className: PropTypes.string,
  organizations: PropTypes.array,
  name: PropTypes.string,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  addOption: PropTypes.node,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  avatarsOnly: PropTypes.bool,
  asFilter: PropTypes.bool
};

export { OrgSelect };
