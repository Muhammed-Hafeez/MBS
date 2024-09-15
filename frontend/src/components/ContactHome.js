import React from "react";
import PropTypes from "prop-types";
function ContactHome({ message }) {
  return (
    <div className="ContactHome">
      <h1 className="title col-rare">contact us</h1>
      {message ? (
        <div
          className="message"
          style={{ color: "red", margin: "0px 0px 1rem 0px " }}
        >
          message
        </div>
      ) : (
        ""
      )}
      <form action="/api/user" method="post" className="ContactForm">
        <span>
          <input type="text" placeholder="First name*" required={true} />
          <input type="text" placeholder="last name" />
        </span>
        <input type="tel" placeholder="phone number*" required={true} />
        <input type="email" placeholder="email*" required={true} />
        <textarea
          type="text"
          className="message"
          placeholder="message*"
          required={true}
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
