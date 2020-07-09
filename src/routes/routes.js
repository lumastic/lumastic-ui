export const baseRoute = "/";
export const homeRoute = "/home";

export const upgradeRoute = "/pro";
export const notificationsRoute = "/notifications";

/**
 * presents the base spark route for interacting with a spark.
 * @param {string} orgName Sparks owning Organization Name
 * @param {string} sparkId id of spark to be displayed / interacted with
 */

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

// POST ROUTES

export const createPostRoute = {
  pathname: "/create/post",
  state: { modal: true }
};

export const editPostRoute = (postId = ":postId") => ({
  pathname: `/post/${postId}/edit`,
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

// SEARCH ROUTE
export const searchRoute = (searchString = ":searchString") =>
  `/explore/${searchString}`;
