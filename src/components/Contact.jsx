import React from 'react';

const Contact = () => {
  return (
    <section className="wrap contact">
      <div className="contact-panel">
        <div className="contact-inner">
          <h2>
            Let's build something
            worth using.
          </h2>

          <p>
            Open to frontend roles and freelance work —
            dashboards, storefronts, or anything that needs
            a developer who cares about the details.
          </p>

          <div className="contact-cta">
            <a
              href="mailto:olumideronke@gmail.com"
              className="btn-dark"
            >
              olumideronke@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/victoria-olumide-90439b163"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-dark"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;