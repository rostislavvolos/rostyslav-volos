import styles from "./ContactStyles.module.css";
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [errorCount, setErrorCount] = useState(0);
  const errorLimit = 3;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value;

    if (!validateEmail(email)) {
      if (errorCount < errorLimit) {
        toast.error('Please enter a valid email address.');
        setErrorCount(prevCount => prevCount + 1);
      }
      return;
    }

    emailjs
      .sendForm('service_a7gtj56', 'template_4x5ge5r', form.current, {
        publicKey: 'Zw4O5HxiZt73PDqFJ',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send form. Please try again.');
        },
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form active="" ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="from_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;
