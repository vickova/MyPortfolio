import React from 'react';

const experiences = [
  {
    year: '2025',
    role: 'Frontend Developer',
    organization:
      'Institute of Marriage Administrators and Counselors of Nigeria',
    description:
      "Built and launched the institute's website on WordPress, with authentication, email notifications and SEO.",
  },
  {
    year: '2025',
    role: 'Project Manager',
    organization: 'The Express Labs / Subbit',
    description:
      'Led documentation and platform upgrades for Subbit and SMTP Express, and coordinated its Tony Elumelu Foundation grant application.',
  },
  {
    year: 'Nov–Dec 2024',
    role: 'Frontend Developer',
    organization: 'KB Technologies',
    description:
      'Shipped the Giftshop & Digital Courses platform in React and Material UI.',
  },
  {
    year: '2024',
    role: 'API Tester',
    organization: 'Krossing Technologies',
    description:
      'Tested and debugged APIs alongside the development team.',
  },
  {
    year: '2024 — Present',
    role: 'Project Manager',
    organization: 'COAVE',
    description:
      'Leading a program that teaches technology in secondary schools across Nigeria.',
  },
  {
    year: '2022–2023',
    role: 'Virtual Assistant',
    organization: 'Nanios Media',
    description:
      'Ran email and admin operations, and audited social presence for engagement.',
  },
  {
    year: '2022 — Present',
    role: 'Self-taught',
    organization: 'Independent',
    description:
      'Building MERN-stack side projects and Python data visualizations, continuously.',
  },
];

const Experience = () => {
  return (
    <section
      className="wrap timeline-section"
      id="experience"
    >
      <div className="section-head">
        <h2>Also on the resume</h2>

        <p>
          The rest of the path, roughly in order.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="t-item" key={index}>
            <div className="t-head">
              <span className="t-year">
                {experience.year}
              </span>

              <span className="t-role">
                {experience.role}
              </span>

              <span className="t-org">
                · {experience.organization}
              </span>
            </div>

            <p className="t-desc">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;