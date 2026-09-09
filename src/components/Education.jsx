import React from 'react';

const Education = () => {
  return (
    <section
      className="wrap edu"
      id="education"
    >
      <div className="section-head">
        <h2>
          Education & certifications
        </h2>

        <p></p>
      </div>

      <div className="edu-grid">
        <div className="edu-card">
          <h3>
            Bachelor of Agriculture
          </h3>

          <div className="meta">
            Soil Science and Land Resources Management ·
            Obafemi Awolowo University
          </div>

          <div className="stat-row">
            <div className="stat">
              <div className="num">
                4.22/5
              </div>

              <div className="lbl">
                CGPA
              </div>
            </div>

            <div className="stat">
              <div className="num">
                2nd
              </div>

              <div className="lbl">
                Class Upper Division
              </div>
            </div>

            <div className="stat">
              <div className="num">
                2018–24
              </div>

              <div className="lbl">
                Years attended
              </div>
            </div>
          </div>
        </div>

        <div className="cert-card">
          <ul>
            <li>
              <strong>
                Virtual Assistant Program
              </strong>

              <span>
                ALX, 2023
              </span>
            </li>

            <li>
              <strong>
                HTML Certification
              </strong>

              <span>
                SoloLearn, 2020
              </span>
            </li>

            <li>
              <strong>
                Microsoft Gold Student Ambassador
              </strong>

              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;