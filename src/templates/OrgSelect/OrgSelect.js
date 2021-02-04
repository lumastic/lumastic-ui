import PropTypes from "prop-types";
import React from "react";
import { Signature } from "..";
import { Avatar, Option, Select, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { useUser } from "../../hooks";
import style from "./OrgSelect.scss";

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
      {organizations.map((org = {}, index) => (
        <Option name={org.id} key={org.id || index}>
          <Signature>
            <Avatar src={org.avatarURL} setSize="1.25rem" />
            {!avatarsOnly && <Type>{org?.displayName || org?.name}</Type>}
          </Signature>
        </Option>
      ))}
      {asFilter && (
        <Option name="collab">
          <Signature>
            <Avatar src={avatarURL} setSize="1.25rem" />
            {!avatarsOnly && <Type>Collaborating</Type>}
          </Signature>
        </Option>
      )}
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
