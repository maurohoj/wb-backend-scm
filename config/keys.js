if (process.env.NODE_ENV === "production" || 
    process.env.NODE_ENV === "staging") {
  module.exports = require("./keys-env");
} else {
  module.exports = require("../../backend-scm/config/keys-dev");
}
