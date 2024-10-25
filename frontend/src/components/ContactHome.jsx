import PropTypes from "prop-types";
function ContactHome() {
  return (
    <div className="ContactHome">
      <h1 className="title col-rare">contact us</h1>
      <form action="/api/user" method="post" className="ContactForm">
        <span>
          <input
            type="text"
            placeholder="First name*"
            required={true}
            name="firstName"
          />
          <input type="text" placeholder="last name" name="lastName" />
        </span>
        <input
          type="tel"
          placeholder="phone number*"
          required={true}
          name="phoneNo"
        />
        <input type="email" placeholder="email*" required={true} name="email" />
        <textarea
          type="text"
          className="message"
          placeholder="message*"
          required={true}
          name="message"
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
ContactHome.propTypes = {
  message: PropTypes.any,
};
export default ContactHome;
