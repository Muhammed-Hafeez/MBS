import React from 'react'

function WebDataForm() {
  return (
      <form action="/api/websitedata" method="post" className="InputForm">
        <h1 className='title col-rare'>website data</h1>
        <span>
          <input
            type="text"
            placeholder="timings*"
            required={true}
            name="timings"
          />
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
          placeholder="small description about your company*"
          required={true}
          name="smallDescription*"
        />
        <button
          className="btn"
          type="submit"
        >
          submit
        </button>
      </form>
  );
}

export { WebDataForm }
