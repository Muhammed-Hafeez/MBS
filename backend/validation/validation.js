const { check } = require("express-validator");

//hero data validation
exports.heroDataValidation = [
  check("About.title")
    .notEmpty()
    .withMessage("About title is required")
    .isString()
    .withMessage("About title must be a string"),

  check("About.heading")
    .notEmpty()
    .withMessage("About heading is required")
    .isString()
    .withMessage("About heading must be a string"),

  check("About.body")
    .notEmpty()
    .withMessage("About body is required")
    .isString()
    .withMessage("About body must be a string"),

  check("About.image")
    .notEmpty()
    .withMessage("About image URL is required")
    .isURL()
    .withMessage("About image must be a valid URL"),

  check("Services.title")
    .notEmpty()
    .withMessage("Services title is required")
    .isString()
    .withMessage("Services title must be a string"),

  check("Services.heading")
    .notEmpty()
    .withMessage("Services heading is required")
    .isString()
    .withMessage("Services heading must be a string"),

  check("Services.body")
    .notEmpty()
    .withMessage("Services body is required")
    .isString()
    .withMessage("Services body must be a string"),

  check("Services.image")
    .notEmpty()
    .withMessage("Services image URL is required")
    .isString()
    .withMessage("Services image must be a string"),

  check("Projetcs.title")
    .notEmpty()
    .withMessage("Projetcs title is required")
    .isString()
    .withMessage("Projetcs title must be a string"),

  check("Projetcs.heading")
    .notEmpty()
    .withMessage("Projetcs heading is required")
    .isString()
    .withMessage("Projetcs heading must be a string"),

  check("Projetcs.body")
    .notEmpty()
    .withMessage("Projetcs body is required")
    .isString()
    .withMessage("Projetcs body must be a string"),

  check("Projetcs.image")
    .notEmpty()
    .withMessage("Projetcs image URL is required")
    .isString()
    .withMessage("Projetcs image must be a string"),
];

//about card data validation
exports.AboutCardValidation = [
  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),

  check("image")
    .notEmpty()
    .withMessage("Image URL is required")
    .isString()
    .withMessage("Image must be a string"),

  check("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string"),
];

exports.ProjectCardValidation = [
  check("image")
    .notEmpty()
    .withMessage("Image URL is required")
    .isURL()
    .withMessage("Image must be a valid URL"),

  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),

  check("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string"),

  check("details")
    .notEmpty()
    .withMessage("Details are required")
    .isString()
    .withMessage("Details must be a string"),
];

exports.swiperDataValidation = [
  check("image")
    .notEmpty()
    .withMessage("Image is required")
    .isString()
    .withMessage("Image must be a string"),

  check("alt")
    .notEmpty()
    .withMessage("Alt text is required")
    .isString()
    .withMessage("Alt text must be a string"),
];
exports.TeamDataValiadtion = [
  check("src")
    .notEmpty()
    .withMessage("Source (src) is required")
    .isString()
    .withMessage("Source must be a string"),

  check("alt")
    .notEmpty()
    .withMessage("Alt text is required")
    .isString()
    .withMessage("Alt text must be a string"),

  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
];

exports.serviceCardDataValidation = [
  check("heading")
    .notEmpty()
    .withMessage("Heading is required")
    .isString()
    .withMessage("Heading must be a string"),

  check("body")
    .notEmpty()
    .withMessage("Body is required")
    .isString()
    .withMessage("Body must be a string"),

  check("Home").isBoolean().withMessage("Home must be a boolean value"),
];
 

//webdata 
exports.webDataValidation = [
  check("smallDescription")
    .notEmpty()
    .withMessage("Small description is required")
    .isString()
    .withMessage("Small description must be a string"),

  check("addressInWords")
    .notEmpty()
    .withMessage("Address in words is required")
    .isString()
    .withMessage("Address in words must be a string"),

  check("addressForMaps")
    .notEmpty()
    .withMessage("Address for maps is required")
    .isURL()
    .withMessage("Address for maps must be a valid URL"),

  check("addressForLink")
    .notEmpty()
    .withMessage("Address for link is required")
    .isURL()
    .withMessage("Address for link must be a valid URL"),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email"),

  check("phoneNo")
    .notEmpty()
    .withMessage("Phone number is required")
    .isString()
    .withMessage("Phone number must be a string"),

  check("timings")
    .notEmpty()
    .withMessage("Timings are required")
    .isString()
    .withMessage("Timings must be a string"),

  // Validate socialMedia array
  check("socialMedia").isArray().withMessage("Social media must be an array"),
  check("socialMedia.*.description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  check("socialMedia.*.mediaIcon")
    .notEmpty()
    .withMessage("Media icon is required")
    .isString()
    .withMessage("Media icon must be a string"),

  check("socialMedia.*.mediaLink")
    .notEmpty()
    .withMessage("Media link is required")
    .isURL()
    .withMessage("Media link must be a valid URL"),
];
