import PropTypes from "prop-types";
import React from "react";
import { useUser } from "../..";
import { Avatar, Card, IconButton, Type, Link } from "../../components";
import { Gear } from "../../icons";
import { LabeledList, OrgSignature, SparkCrumbs } from "../../templates";
import style from "./UserCard.scss";
import {
  settingsRoute,
  profileRoute,
  mySparksRoute,
  myOrganizationsRoute
} from "../../routes";

const UserCard = ({ sparks = [], organizations = [] }) => {
  const user = useUser();
  return (
    <Card className={style.usercard}>
      <div className={style.header}>
        <div className={style["avatar-container"]}>
          <Link inline to={profileRoute(user?.username)}>
            <Avatar src={user?.avatarURL} setSize="5rem" />
          </Link>
          <Link button to={settingsRoute()}>
            <IconButton className={style.button} color="grey" size="big">
              <Gear />
            </IconButton>
          </Link>
        </div>

        <Link to={profileRoute(user?.username)}>
          <Type h3>{user?.name}</Type>
        </Link>
        <Type color="grey" body2>
          This is where a bio would go
        </Type>
      </div>
      <div className={style.sparks}>
        <LabeledList
          label="Recent Sparks"
          right={
            <Link to={mySparksRoute}>
              <Type overline color="primary">
                SEE MORE
              </Type>
            </Link>
          }
        >
          {sparks.map((spark, index) => (
            <SparkCrumbs
              key={index}
              spark={spark}
              organization={spark.belongsTo}
            />
          ))}
        </LabeledList>
      </div>
      <div className={style.organizations}>
        <LabeledList
          label="My Organizations"
          right={
            <Link to={myOrganizationsRoute(user?.username)}>
              <Type overline color="primary">
                SEE ALL
              </Type>
            </Link>
          }
        >
          {organizations.map((organization, index) => (
            <Link to={profileRoute(organization.name)} inline>
              <OrgSignature key={index} organization={organization} />
            </Link>
          ))}
        </LabeledList>
      </div>
    </Card>
  );
};

UserCard.propTypes = {
  sparks: PropTypes.array,
  organizations: PropTypes.array
};

export { UserCard };
