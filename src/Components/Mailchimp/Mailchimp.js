import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Mailchimp.css";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h3>
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </h3>
      {status === "sending" && (
        <div className="alert alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="alert alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="alert alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status !== "success" ? (
        <div className="field-container">
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Jane"
              isRequired
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              isRequired
            />
          </label>
        </div>
      ) : null}
      {status !== "success" ? (
        <input name="subscribe" type="submit" value="Submit" />
      ) : null}
    </form>
  );
};

const MailchimpFormContainer = (props) => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_ACTION_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
