import React, { useState, type JSX } from "react";
import Header from "../Header";
import Footer from "../Footer";
import sendEmail from "../utils/sendEmails";
import "./ContactUs.css";
import Logo from "../assets/images/Frinor Logo.jpeg";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs = (): JSX.Element => {
  const [form, setFrom] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    /* This is to get the dynamic object key [name] */
    const { name } = evt.target;

    setFrom((prev) => {
      return { ...prev, [name]: evt.target.value };
    });
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail(form);

      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
      setFrom(() => {
        return {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        };
      });
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <title>FriNor Group Ltd</title>
      <link rel='shortcut icon' type='image/x-icon' href={Logo} />
      <Header />
      <div className='contact-wrapper '>
        {success && (
          <div className='success-banner'>Message sent successfully!</div>
        )}

        <h1>We are excited to hear from you</h1>
        <div className='contact-highlights'>
          <div className='contact-highlight contact-highlight--blue'>
            <h3>Why contact FriNor Group?</h3>
            <ul>
              <li>Compassionate, patient-centered care</li>
              <li>Experienced, friendly healthcare professionals</li>
              <li>Flexible appointments and quick responses</li>
              <li>Clear guidance through every step</li>
            </ul>
          </div>

          <div className='contact-highlight contact-highlight--yellow'>
            <h3>Get in touch with us</h3>
            <p>Reach out for consultations, bookings, or general enquiries.</p>
            <p>We are happy to hear from you!</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='input-div'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              name='name'
              id='name'
              value={form.name}
              placeholder='Enter Your Name'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-div'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              name='email'
              id='email'
              value={form.email}
              required
              placeholder='Enter Your Email'
              onChange={handleChange}
            />
          </div>
          <div className='input-div'>
            <label htmlFor='phone'>Phone : </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Enter Phone Number'
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className='input-div subject'>
            <label htmlFor='subject'>Subject :</label>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
              value={form.subject}
              required
              onChange={handleChange}
            />
          </div>
          <textarea
            name='message'
            id='message'
            placeholder='Enter Your Message'
            value={form.message}
            maxLength={300}
            onChange={handleChange}
          />
          <div className='submit-btn-container'>
            <button type='submit' disabled={isLoading}>
              {isLoading ? "sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
