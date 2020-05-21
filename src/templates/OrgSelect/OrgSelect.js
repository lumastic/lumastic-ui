import React from "react";
import PropTypes from "prop-types";
import { Select, Option, Avatar, Type } from "../../components";
import { Signature } from "..";
import { useUser } from "../../hooks";
import style from "./OrgSelect.scss";
import classNames from "../../helpers/classNames";

const OrgSelect = ({
  organizations = [],
  defaultValue,
  name,
  small,
  onChange,
  onOpen,
  onClose,
  avatarsOnly = false,
  asFilter = false
}) => {
  const { username, avatarURL } = useUser();
  return (
    <Select
      defaultValue={defaultValue}
      name={name}
      small={small}
      onChange={onChange}
      onOpen={onOpen}
      onClose={onClose}
      className={style.select}
      compact={avatarsOnly}
    >
      {asFilter && (
        <>
          <Option name={username}>
            <Signature>
              <Avatar src={avatarURL} setSize="1.25rem" />
              {!avatarsOnly && <Type>All</Type>}
            </Signature>
          </Option>
          <Option name="collab">
            <Signature>
              <Avatar src={avatarURL} setSize="1.25rem" />
              {!avatarsOnly && <Type>Collaborating</Type>}
            </Signature>
          </Option>
        </>
      )}
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
  organizations: PropTypes.array,
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  avatarsOnly: PropTypes.bool,
  asFilter: PropTypes.bool
};

export { OrgSelect };
