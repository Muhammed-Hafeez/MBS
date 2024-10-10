const express = require("express");
const {
  createAboutCard,
  getAboutCard,
  patchAboutCard,
  deleteAboutCard,
} = require("../handlers/webdata/aboutCard");
const {
  getServiceCard,
  createServiceCard,
  patchServiceCard,
  deleteServiceCard,
} = require("../handlers/webdata/serviceCard");
const {
  getProjectCard,
  patchProjectCard,
  deleteProjectCard,
  createProjectCard,
} = require("../handlers/webdata/projectCard");
const {
  getTeamMember,
  addTeamMember,
  patchTeamMember,
  deleteTeamMember,
} = require("../handlers/webdata/teamData");
const {
  getSwiperImages,
  addSwiperImage,
  patchSwiperImage,
  deleteSwiperImage,
} = require("../handlers/webdata/swiperdata");
const { getHeroData, patchHeroData } = require("../handlers/webdata/heroData");
const {
  heroDataValidation,
  serviceCardDataValidation,
  ProjectCardValidation,
  TeamDataValiadtion,
  swiperDataValidation,
  AboutCardValidation,
  webDataValidation,
} = require("../validation/validation");
const { getWebData, patchWebData } = require("../handlers/webdata/webData");

//authorization middleware
const authorize = require("../middleware/verify");

const cmsRouter = express.Router();

//about card routes
cmsRouter
  .route("/aboutcard")
  .get(getAboutCard)
  .post(authorize, AboutCardValidation, createAboutCard);
cmsRouter
  .route("/aboutcard/:id")
  .patch(authorize, AboutCardValidation, patchAboutCard)
  .delete(authorize, deleteAboutCard);

//service card routes
cmsRouter
  .route("/servicecard")
  .get(getServiceCard)
  .post(authorize, serviceCardDataValidation, createServiceCard);
cmsRouter
  .route("/servicecard/:id")
  .patch(authorize, serviceCardDataValidation, patchServiceCard)
  .delete(authorize, deleteServiceCard);

//project card
cmsRouter
  .route("/projectcard")
  .get(getProjectCard)
  .post(authorize, ProjectCardValidation, createProjectCard);
cmsRouter
  .route("/projectcard/:id")
  .patch(authorize, ProjectCardValidation, patchProjectCard)
  .delete(authorize, deleteProjectCard);
//teamdata
cmsRouter
  .route("/team")
  .get(getTeamMember)
  .post(authorize, TeamDataValiadtion, addTeamMember);
cmsRouter
  .route("/team/:id")
  .patch(authorize, TeamDataValiadtion, patchTeamMember)
  .delete(authorize, deleteTeamMember);
//swiper
cmsRouter
  .route("/swiper")
  .post(authorize, swiperDataValidation, addSwiperImage)
  .get(getSwiperImages);
cmsRouter
  .route("/swiper/:id")
  .patch(authorize, swiperDataValidation, patchSwiperImage)
  .delete(authorize, deleteSwiperImage);

//herodata
cmsRouter
  .route("/herodata")
  .get(getHeroData)
  .patch(authorize, heroDataValidation, patchHeroData);
//webdata

cmsRouter
  .route("/webdata")
  .get(getWebData)
  .patch(authorize, webDataValidation, patchWebData);
module.exports = cmsRouter;
