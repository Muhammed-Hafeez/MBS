import PropTypes from "prop-types";
function AboutCardHome({ title, children, data }) {  
  return (
    <div className="about_sections">
      <div className="image">
        <img src={data.image} alt="worker" />
      </div>
      <div className="text_section">
        {title ? <h1 className="title col-rare">{title}</h1> : ""}
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="aboutCardChildren">{children ? children : ""}</div>
      </div>
    </div>
  );
}
AboutCardHome.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export { AboutCardHome };
