const express = require("express");
const { body } = require("express-validator");
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

const cmsRouter = express.Router();

//about card routes
cmsRouter.route("/aboutcard").get(getAboutCard).post(createAboutCard);
cmsRouter.route("/aboutcard/:id").patch(patchAboutCard).delete(deleteAboutCard);

//service card routes
cmsRouter
  .route("/servicecard")
  .get(getServiceCard)
  .post(
    [
      body("heading").notEmpty().isLength({ min: 3, max: 80 }),
      body("body").notEmpty().isLength({ min: 3 }),
    ],
    createServiceCard
  );
cmsRouter
  .route("/servicecard/:id")
  .patch(patchServiceCard)
  .delete(deleteServiceCard);

//project card
cmsRouter
  .route("/projectcard")
  .get(getProjectCard)
  .post(
    [
      body("image").notEmpty(),
      body("title").notEmpty().isLength({ min: 3 }),
      body("description").notEmpty().isLength({ min: 8 }),
      body("details").notEmpty().isLength({ min: 20 }),
    ],
    createProjectCard
  );
cmsRouter
  .route("/projectcard/:id")
  .patch(
    [
      body("image").notEmpty(),
      body("title").notEmpty().isLength({ min: 3 }),
      body("description").notEmpty().isLength({ min: 8 }),
      body("details").notEmpty().isLength({ min: 20 }),
    ],
    patchProjectCard
  )
  .delete(deleteProjectCard);
//teamdata
cmsRouter
  .route("/team")
  .get(getTeamMember)
  .post(
    [
      body("src").notEmpty().isString(),
      body("name").notEmpty().isString(),
      body("alt").isString().isLength({ min: 5 }),
    ],
    addTeamMember
  );
cmsRouter
  .route("/team/:id")
  .patch(
    [
      body("src").notEmpty().isString(),
      body("name").notEmpty().isString(),
      body("alt").isString().isLength({ min: 5 }),
    ],
    patchTeamMember
  )
  .delete(deleteTeamMember);
//swiper
cmsRouter
  .route("/swiper")
  .post(
    [
      body("image").notEmpty().isString(),
      body("alt").isString().isLength({ min: 5 }),
    ],
    addSwiperImage
  )
  .get(getSwiperImages);
cmsRouter
  .route("/swiper/:id")
  .patch(
    [
      body("image").notEmpty().isString(),
      body("alt").isString().isLength({ min: 5 }),
    ],
    patchSwiperImage
  )
  .delete(deleteSwiperImage);
module.exports = cmsRouter;
