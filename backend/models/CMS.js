const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for social media links
const socialMediaSchema = new Schema({
  mediaIcon: { type: String, required: true },
  mediaLink: { type: String, required: true },
  description: { type: String, default: "" },
});

// Define the schema for team data
const teamDataSchema = new Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  name: { type: String, required: true },
  id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Using ObjectId
});

// Define the schema for swiper data
const swiperDataSchema = new Schema({
  image: { type: String, required: true },
  alt: { type: String, required: true },
  id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Using ObjectId
});

// Define the schema for service card data
const serviceCardDataSchema = new Schema({
  heading: { type: String, required: true },
  body: { type: String, required: true },
  Home: { type: Boolean, default: false },
  icon: { type: String },
  id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Using ObjectId
});

// Define the schema for project data
const projectDataSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Using ObjectId
});

// Define the schema for hero section
const heroSchema = new Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
});

// Define the schema for about card data
const aboutCardDataSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() }, // Using ObjectId
});

// Define the main schema
const webDataSchema = new Schema(
  {
    webdata: {
      smallDescription: { type: String, required: true },
      addressInWords: { type: String, required: true },
      addressForMaps: { type: String, required: true },
      addressForLink: { type: String, required: true },
      email: { type: String, required: true },
      phoneNo: { type: String, required: true },
      timings: { type: String, required: true },
      socialMedia: [socialMediaSchema], // Embedding social media schema
    },
    teamdata: [teamDataSchema], // Embedding team data schema
    swiperdata: {
      type: [swiperDataSchema],
      validate: {
        validator: function (v) {
          return v.length >= 3;
        },
        message: (props) =>
          `swiperdata must have at least 3 objects, found ${props.value.length}`,
      },
    },
    servicecarddata: [serviceCardDataSchema], // Embedding service card data schema
    projectsdata:[projectDataSchema], 
    herodata: {
      About: heroSchema,
      services: heroSchema,
      projects: heroSchema,
    },
    aboutcarddata: [aboutCardDataSchema], // Embedding about card data schema
  },
  { collection: "cms" }
);

module.exports = mongoose.model("cms", webDataSchema);
