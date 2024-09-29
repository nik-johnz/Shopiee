const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AeVLgJnlUVW8vwam_SlWISWWSk9K6NEgDRf1enVnXHud2xp0TYNpjRCg2GOUsBk1MTbW9xiGWRXL6FvJ",
  client_secret: "ECSB-ns5pUy-b8UT_X7FgwhOYbV2TzkyKGzS6AnUzS_nybUmodXPVHkk_bZUVGb0sywuH8EqLGpk1gsQ",
});

module.exports = paypal;