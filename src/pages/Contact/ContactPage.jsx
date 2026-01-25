import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import FormField from '../../components/FormField/FormField.jsx';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual validation only (as per constraints)
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const isFormValid = formData.name && formData.email && formData.message;

    if (isFormValid) {
      alert('Form submitted successfully! (No actual submission)');
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you. Please fill out the form below or reach out to us
              using the contact information provided.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you have a question about our services, a project proposal, or just
                want to say hello, we're ready to chat.
              </p>
              <div className="info-item">
                <strong>Email:</strong>
                <span>info@codify.com</span>
              </div>
              <div className="info-item">
                <strong>Phone:</strong>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="info-item">
                <strong>Address:</strong>
                <span>Jl. Contoh No. 123, Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <FormField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  required
                  isTouched={touched.name}
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your@example.com"
                  required
                  isTouched={touched.email}
                />
                <FormField
                  label="Message"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your message here..."
                  required
                  isTouched={touched.message}
                />
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
