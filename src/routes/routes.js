export const baseRoute = "/";
export const homeRoute = "/home";

// USER ROUTES
export const profileRoute = (orgName = ":orgName") => `/${orgName}`;
/**
 * presents the base spark route for interacting with a spark.
 * @param {string} orgName Sparks owning Organization Name
 * @param {string} sparkId id of spark to be displayed / interacted with
 */

export const mySparksRoute = "/sparks";

export const exploreRoute = "/explore";

export const upgradeRoute = "/pro";

export const notificationsRoute = "/notifications";

const baseSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  `/${orgName}/spark/${sparkId}`;

export const viewSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  baseSparkRoute(orgName, sparkId);

// Idea board route
export const viewBoardRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId",
  boardId = ":boardId"
) => `${baseSparkRoute(orgName, sparkId)}/idea/${boardId}`;
