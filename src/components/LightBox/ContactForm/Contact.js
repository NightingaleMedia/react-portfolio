import React, { useContext, useState } from "react";
import { TheAppContext } from "../../../provider/AppContext";
import * as styles from "./contact.module.css";
import Success from "./Success";
import Submitting from "./Submitting";
import Error from "./Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const initInputs = [
  {
    displayName: "Name",
    id: "name",
    content: "",
    required: true,
    type: "text",
  },
  {
    displayName: "Email",
    id: "email",
    content: "",
    required: true,
    type: "text",
  },
  {
    displayName: "Subject",
    id: "subject",
    content: "",
    required: true,
    type: "text",
  },
  {
    displayName: "Message",
    id: "message",
    content: "",
    required: true,
    type: "textarea",
  },
];
const Contact = () => {
  const { setBoxShowing } = useContext(TheAppContext);
  const [form, setForm] = useState({
    status: "filling",
    inputs: initInputs,
    message: "Contact Me",
    errors: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const inputs = [...form.inputs];
    let input = inputs.find((i) => i.id === name);
    input.content = e.target.value;
    setForm((prev) => ({ ...prev, inputs }));
  };

  const handleSubmit = async () => {
    setForm((prev) => ({
      ...prev,
      status: "submitting",
      message: "Hang On...",
    }));

    const formData = new FormData();

    form.inputs.forEach((i) => {
      if (i.content === "") {
        throw setForm((prev) => ({
          ...prev,
          status: "filling",
          errors: ["Please fill out all fields!"],
        }));
      }
      formData.append(i.id, i.content);
    });

    formData.append("submit", "submit");

    return await fetch("https://www.albertsigman.com/lib/mail.php", {
      method: "POST",
      body: formData,
    })
      .then(async (result) => {
        result = await result.text();
        console.log(result);
        setForm((prev) => ({
          ...prev,
          status: "complete",
          message: "Thanks!",
        }));
      })
      .catch((err) => {
        alert("There was an error: " + err.toString());
        setForm((prev) => ({
          ...prev,
          status: "filling",
          message: "Try Again...",
        }));
      });
  };

  const styleArray = [
    styles.contact,
    "bg--3",
    form.status === "complete" ? styles.complete : null,
    form.status === "submitting" ? styles.submitting : null,
  ];

  const handleClose = () => {
    setBoxShowing({ visible: false, component: null });
  };
  return (
    <div className={styleArray.join(" ")}>
      <h2>{form.message}</h2>
      {form.status === "submitting" && <Submitting />}
      {form.status === "complete" && <Success handleClose={handleClose} />}
      {form.status === "filling" && (
        <>
          {form.errors.length > 0 ? <Error errors={form.errors} /> : ""}
          <div className={styles.inputArea}>
            {form.inputs.map((i, index) => (
              <div key={`${i.id}--${index}`} className={styles.input}>
                <label htmlFor={i.id}>{i.displayName}</label>
                {i.type === "text" ? (
                  <input
                    name={i.id}
                    onChange={handleChange}
                    type={i.type || "text"}
                  />
                ) : (
                  <textarea name={i.id} onChange={handleChange}></textarea>
                )}
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} className={"backend--skill"}>
            {form.errors.length > 0 ? "Try Again..." : "Contact"}
          </button>
        </>
      )}
      <div className={styles.reachMe}>
        <div className={styles.ital}> You can also reach me here: </div>
        <div className={styles.reachIcons}>
          <a
            href={"https://www.linkedin.com/in/albertksigman26/"}
            target="_blank"
            rel="prefetch"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={"https://github.com/nightingalemedia"}
            target="_blank"
            rel="prefetch"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:alsigman@gmail.com" target="_blank" rel="prefetch">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
