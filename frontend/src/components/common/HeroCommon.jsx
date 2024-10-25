import PropTypes from "prop-types";
function HeroCommon({ data }) {
  return (
    <div
      className="HeroCommon"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="hero-info">
        <h1 className="title col-rare">{data.title}</h1>
        <h2 className="heading">{data.heading}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
HeroCommon.propTypes = { data: PropTypes.object.isRequired };
export default HeroCommon;
