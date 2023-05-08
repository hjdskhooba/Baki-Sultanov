import React from "react";
import "../../scss/Components/contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-section">
      <div className="body">
        <div id="wrapper">
          <div className="box-area">
            <div id="box-front" className="box">
              <a
                href="mailto:sultanboga4@gmail.com"
                className="button glow-button"
                target="_blank"
              >
                <i className="fa fa-google"></i>
              </a>
            </div>
            <div id="box-right" className="box">
              <a
                href="https://www.linkedin.com/in/%D0%B1%D0%B0%D0%B9%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D0%B0%D0%B1%D0%B4%D1%8B%D1%85%D0%B0%D1%88%D0%B8%D0%BC-%D1%83%D1%83%D0%BB%D1%83-549467257/"
                className="button glow-button"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <div id="box-back" className="box">
              <a
                href="https://github.com/hjdskhooba"
                className="button glow-button"
                target="_blank"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
            <div id="box-left" className="box">
              <a
                href="tel:+996 772720772"
                className="button glow-button"
                target="_blank"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
            <div id="box-bottom" className="box"></div>
          </div>
        </div>
      </div>
      <section>
        <h1>Send me a messege</h1>
        <form method="post" action="mailto:sultanboga4@gmail.com">
          <div className="name-email">
            <div>
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                name="user_name"
                id="nom"
                maxLength="50"
                required
                placeholder="Example"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="example@gmail.com"
                type="email"
                name="user_email"
                id="email"
                maxLength="50"
                required
              />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Send me a messege"
            rows="10"
            maxLength="1000"
            required
          ></textarea>
          <input
            type="submit"
            value="HIRE ME"
            className="cta"
            aria-label="idk"
          />
        </form>
      </section>
    </div>
  );
};

export default Contacts;
