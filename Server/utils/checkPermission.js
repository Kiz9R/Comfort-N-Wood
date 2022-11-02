const CustomError = require("../errors");

const checkPermission = (requestUser, resourceId) => {
  //   console.log(requestUser);
  //   console.log(resourceId);
  //   console.log(typeof resourceId);

  if (requestUser.role === "admin") {
    return;
  }
  if (requestUser.userId === resourceId.toString()) {
    return;
  }
  throw new CustomError.UnauthenticatedError("Not Authorized this route");
};

module.exports = checkPermission;
