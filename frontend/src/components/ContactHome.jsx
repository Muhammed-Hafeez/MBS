import { useState } from "react";
import { genrateLead } from "../services/analytics";
import { useDispatch } from "react-redux";
import { alertIsCalled } from "../features/counter";
function ContactHome() {
  const dispatch = useDispatch();
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phoneNo, SetPhoneNo] = useState("");
  const [message, SetMessage] = useState("");
  const [btnText, SetBtnText] = useState("submit");
  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    SetBtnText("loading...")
    const leadToSend = {
      firstName,
      lastName,
      email,
      phoneNo: Number(phoneNo),
      message,
    };
    const result = await genrateLead(leadToSend);
    console.log("leadToSend:", leadToSend);
    if (result.success === false) {
      dispatch(
        alertIsCalled({
          called: true,
          type: result.type ? result.type : "warning",
          message: result.message,
        })
      );
      return SetBtnText("try again");
    }
    dispatch(
      alertIsCalled({
        called: true,
        type: "success",
        message: result.message,
      })
    );
    SetBtnText("Thank you")
  };
  return (
    <div className="ContactHome">
      <h1 className="title col-rare">contact us</h1>
      <form  className="ContactForm" onSubmit={HandleOnSubmit}>
        <span>
          <input
            type="text"
            placeholder="First name*"
            required={true}
            name="firstName"
            value={firstName}
            onChange={(e) => SetFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
          />
        </span>
        <input
          type="tel"
          placeholder="phone number*"
          required={true}
          name="phoneNo"
          value={phoneNo}
          onChange={(e) => SetPhoneNo(e.target.value)}
        />
        <input
          type="email"
          placeholder="email*"
          required={true}
          name="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <textarea
          type="text"
          className="message"
          placeholder="message*"
          required={true}
          name="message"
          value={message}
          onChange={(e) => SetMessage(e.target.value)}
        />
        <button className="btn" type="submit">
          {btnText}
        </button>
      </form>
    </div>
  );
}
export default ContactHome;
