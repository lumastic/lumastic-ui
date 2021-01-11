export const baseRoute = "/";
export const homeRoute = "/home";

export const logoutRoute = "/logout";

export const upgradeRoute = "/pro";
export const helpRoute = "/help";
export const notificationsRoute = "/notifications";

/**
 * presents the base spark route for interacting with a spark.
 * @param {string} orgName Sparks owning Organization Name
 * @param {string} sparkId id of spark to be displayed / interacted with
 */

export const createRoute = {
  pathname: "/create",
  state: { modal: true }
};

// USER ROUTES
export const profileRoute = (orgName = ":orgName") => `/${orgName}`;

export const settingsRoute = ({
  account,
  security,
  emails,
  notifications,
  sparks,
  organizations,
  developer
} = {}) =>
  (account && "/settings/account") ||
  (security && "/settings/security") ||
  (emails && "/settings/emails") ||
  (notifications && "/settings/notifications") ||
  (sparks && "/settings/sparks") ||
  (organizations && "/settings/organizations") ||
  (developer && "/settings/apps") ||
  "/settings/profile";

// ORGANIZATION ROUTES
export const myOrganizationsRoute = (orgName = ":orgName") =>
  `/${orgName}/orgs`;

export const createOrganizationRoute = {
  pathname: "/create/organization",
  state: { modal: true }
};

export const createTeam = (orgId = ":orgId") => ({
  pathname: `/create/team/${orgId}`,
  state: { modal: true }
});

export const editTeam = (orgId = ":orgId", billingOrgId = ":billingOrgId") => ({
  pathname: `/edit/team/${orgId}/${billingOrgId}`,
  state: { modal: true }
});

export const orgSettingsRoute = (
  orgName = ":orgName",
  { members, security, sparks, billing, developer } = {}
) =>
  (security && `/${orgName}/settings/security`) ||
  (sparks && `/${orgName}/settings/sparks`) ||
  (members && `/${orgName}/settings/members`) ||
  (billing && `/${orgName}/settings/billing`) ||
  (developer && `/${orgName}/settings/apps`) ||
  `/${orgName}/settings/profile`;

// SPARK ROUTES

export const mySparksRoute = "/sparks";

const baseSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  `/${orgName}/spark/${sparkId}`;

export const createSparkRoute = {
  pathname: "/create/spark",
  state: { modal: true }
};

export const viewSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  baseSparkRoute(orgName, sparkId);

export const editSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}/edit`,
  state: { modal: true }
});

export const archiveSparkRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId"
) => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}`,
  search: `?archive=true`
});

// POST ROUTES

export const createPostRoute = {
  pathname: "/create/post",
  state: { modal: true }
};

// PROGRESS BOARD ROUTES
export const createProgressBoard = (
  orgName = ":orgName",
  sparkId = ":sparkId"
) => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}/create/bubble`,
  state: { modal: true }
});

export const viewPostRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId",
  postId = ":postId"
) => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}/post/${postId}`,
  state: { modal: true }
});

export const editPostRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId",
  postId = ":postId"
) => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}/post/${postId}/edit`,
  state: { modal: true }
});

// BOARD ROUTES
export const createBoardRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId"
) => ({
  pathname: `${baseSparkRoute(orgName, sparkId)}/create/board`,
  state: { modal: true }
});

export const viewBoardRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId",
  boardId = ":boardId"
) => `${baseSparkRoute(orgName, sparkId)}/board/${boardId}`;

// EXPLORE ROUTE
export const exploreRoute = "/explore";

export const tagRoute = (tagName = ":tagName") => `/topic/${tagName}`;

// SEARCH ROUTE
export const findRoute = {
  pathname: "/find",
  state: { modal: true }
};

export const searchRoute = (searchString = "") =>
  `/explore?search=${searchString}`;
