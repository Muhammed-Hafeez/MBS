const express = require("express");
const { getLeads, getUsers, createLead, deleteLead } = require("../handlers/analytics");
const { LeadValidation } = require("../validation/AnaliyticsValidation");

const AnalyticsRouter = express.Router();

AnalyticsRouter.route("/leads").get(getLeads).post(LeadValidation, createLead);
AnalyticsRouter.delete("/leads/:id", deleteLead);
AnalyticsRouter.route("/users").get(getUsers);

module.exports = AnalyticsRouter;
