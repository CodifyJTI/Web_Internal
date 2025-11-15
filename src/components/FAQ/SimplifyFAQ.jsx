import React, { useState } from 'react';
import './SimplifyFAQ.css';

const faqData = [
  {
    question: "What is custom development?",
    answer: "Custom development refers to creating tailored software solutions that meet specific business needs. Unlike off-the-shelf software, these solutions are designed to address unique challenges and workflows. This ensures a better fit and higher efficiency for your organization."
  },
  {
    question: "How long does it take?",
    answer: "The timeline for custom development varies based on project complexity and requirements. Typically, projects can take anywhere from a few weeks to several months. We provide a detailed timeline during the initial consultation."
  },
  {
    question: "What is the cost?",
    answer: "Costs for custom development depend on the scope and scale of the project. We offer competitive pricing tailored to your needs. A detailed quote will be provided after assessing your requirements."
  },
  {
    question: "Can we see examples?",
    answer: "Absolutely! We have a portfolio of anonymized case studies showcasing our previous work. These examples highlight our expertise in delivering effective custom solutions."
  },
  {
    question: "How do we start?",
    answer: "Starting is easy! Simply reach out to us through our contact form. We'll schedule a consultation to discuss your needs and how we can assist."
  }
];

function SimplifyFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="simplify-faq-section">
      <div className="faq-header">
        <h2>FAQs</h2>
        <p>Find answers to your questions about our custom development services below.</p>
      </div>
      
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button className="accordion-toggle" onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              <span className="accordion-icon">
                 {activeIndex === index ? '−' : '+'} 
                 {/* Atau gunakan icon 'x' yang berputar seperti di desain */}
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <h3>Still have questions?</h3>
        <p>We're here to help!</p>
        <button className="contact-pill-button">Contact</button>
      </div>
    </section>
  );
}

export default SimplifyFAQ;