export const baseRoute = "/";
export const homeRoute = "/home";
export const exploreRoute = "/explore";
export const upgradeRoute = "/pro";
export const notificationsRoute = "/notifications";

/**
 * presents the base spark route for interacting with a spark.
 * @param {string} orgName Sparks owning Organization Name
 * @param {string} sparkId id of spark to be displayed / interacted with
 */

// USER ROUTES
export const profileRoute = (orgName = ":orgName") => `/${orgName}`;

// SPARK ROUTES

export const mySparksRoute = "/sparks";

const baseSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  `/${orgName}/spark/${sparkId}`;

export const createSparkRoute = "/create/spark";

export const viewSparkRoute = (orgName = ":orgName", sparkId = ":sparkId") =>
  baseSparkRoute(orgName, sparkId);

// POST ROUTES

export const createPostRoute = "/create/post";

// BOARD ROUTES
export const viewBoardRoute = (
  orgName = ":orgName",
  sparkId = ":sparkId",
  boardId = ":boardId"
) => `${baseSparkRoute(orgName, sparkId)}/idea/${boardId}`;
