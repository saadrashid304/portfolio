import styles from "./ContactForm.module.css";
import useValidation from "../../hooks/use-validation";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    value: name,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetValue: resetName,
  } = useValidation((value) => value.trim() !== "", "");

  const {
    value: email,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useValidation(
    (value) =>
      value.trim() !== "" &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(
        value
      ),
    ""
  );

  const {
    value: message,
    isValid: messageIsValid,
    isInvalid: messageIsInvalid,
    changeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    resetValue: resetMessage,
  } = useValidation((value) => value.trim() !== "", "");

  const formIsValid =
    nameIsValid && emailIsValid && messageIsValid ? true : false;

  const nameClasses = nameIsInvalid
    ? `${styles.inputContainer} ${styles.invalid}`
    : `${styles.inputContainer}`;
  const emailClasses = emailIsInvalid
    ? `${styles.inputContainer}  ${styles.invalid}`
    : `${styles.inputContainer}`;
  const messageClasses = messageIsInvalid
    ? `${styles.inputContainer}  ${styles.invalid}`
    : `${styles.inputContainer}`;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      toast.error("Please fill the form first and then try again.");
      return;
    }

    const object = {
      clientName: name,
      clientEmail: email,
      clientMessage: message,
    };

    const res = await fetch(
      "https://myportfolioclients-default-rtdb.asia-southeast1.firebasedatabase.app/clients.json",
      {
        method: "POST",
        body: JSON.stringify(object),
      }
    );
    if (res.status === 200) {
      toast.success(
        "Your response was submitted successfully. Saad will get to you as soon as possible. Thankyou."
      );
    } else {
      toast.error("Something went wrong. Please try later.");
    }
    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <div className={styles.contact_main_container}>
      <div className={styles.contact_left_container}>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <p>
          <span className={styles.heading}>Contact:</span> +92 313 5163383
        </p>
        <p>
          <span className={styles.heading}>Email:</span> saadrashid304@gmail.com
        </p>
      </div>
      <div className={styles.contact_right_container}>
        <form
          className={styles.contact_form_container}
          onSubmit={submitHandler}
        >
          <div className={nameClasses}>
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameIsInvalid && (
              <p className={styles.error_text}>Name must not be empty.</p>
            )}
          </div>
          <div className={emailClasses}>
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailIsInvalid && (
              <p className={styles.error_text}>
                Email must not be empty or invalid.
              </p>
            )}
          </div>
          <div className={messageClasses}>
            <textarea
              placeholder="MESSAGE"
              value={message}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            {messageIsInvalid && (
              <p className={styles.error_text}>Message must not be empty.</p>
            )}
          </div>
          <div>
            <button type="submit">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
