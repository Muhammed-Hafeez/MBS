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

const cmsRouter = express.Router();

//about card routes
cmsRouter
  .route("/aboutcard")
  .get(getAboutCard)
  .post(AboutCardValidation, createAboutCard);
cmsRouter
  .route("/aboutcard/:id")
  .patch(AboutCardValidation, patchAboutCard)
  .delete(deleteAboutCard);

//service card routes
cmsRouter
  .route("/servicecard")
  .get(getServiceCard)
  .post(serviceCardDataValidation, createServiceCard);
cmsRouter
  .route("/servicecard/:id")
  .patch(serviceCardDataValidation, patchServiceCard)
  .delete(deleteServiceCard);

//project card
cmsRouter
  .route("/projectcard")
  .get(getProjectCard)
  .post(ProjectCardValidation, createProjectCard);
cmsRouter
  .route("/projectcard/:id")
  .patch(ProjectCardValidation, patchProjectCard)
  .delete(deleteProjectCard);
//teamdata
cmsRouter
  .route("/team")
  .get(getTeamMember)
  .post(TeamDataValiadtion, addTeamMember);
cmsRouter
  .route("/team/:id")
  .patch(TeamDataValiadtion, patchTeamMember)
  .delete(deleteTeamMember);
//swiper
cmsRouter
  .route("/swiper")
  .post(swiperDataValidation, addSwiperImage)
  .get(getSwiperImages);
cmsRouter
  .route("/swiper/:id")
  .patch(swiperDataValidation, patchSwiperImage)
  .delete(deleteSwiperImage);

//herodata
cmsRouter
  .route("/herodata")
  .get(getHeroData)
  .patch(heroDataValidation, patchHeroData);
//webdata

cmsRouter
  .route("/webdata")
  .get(getWebData)
  .patch(webDataValidation, patchWebData);
module.exports = cmsRouter;
