import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including custom software development, data strategy, technical execution, seamless integration, and intelligent automation to simplify your business processes."
    },
    {
      question: "How does your process work?",
      answer: "Our process begins with a deep dive into your business needs, followed by data strategy, development, integration, and continuous support to ensure sustainable growth."
    },
    {
      question: "Can you provide case studies?",
      answer: "Yes, we have a portfolio of successful projects and case studies from various industries. Please contact us, and we would be happy to share them with you."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries, including finance, healthcare, retail, and technology. Our tailored solutions are designed to meet the specific needs of Indonesian businesses."
    },
    {
      question: "How can I contact you?",
      answer: "You can contact us by filling out the form on our contact page, and our team will get back to you as soon as possible."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-subtitle">
          Find quick answers to common questions about our services.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
