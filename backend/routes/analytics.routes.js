const express = require("express");
const {
  getLeads,
  getUsers,
  createLead,
  deleteLead,
} = require("../handlers/analytics");
const { LeadValidation } = require("../validation/AnaliyticsValidation");
const authorize = require("../middleware/verify");

const AnalyticsRouter = express.Router();

AnalyticsRouter.route("/leads")
  .get(authorize, getLeads)
  .post(LeadValidation, createLead);
AnalyticsRouter.delete("/leads/:id", authorize, deleteLead);
AnalyticsRouter.route("/users").get(authorize, getUsers);

module.exports = AnalyticsRouter;
