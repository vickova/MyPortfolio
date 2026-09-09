import React from 'react';

const About = () => {
  return (
    <section className="wrap about">
      <h2>
        Not the usual path into frontend.
      </h2>

      <div className="about-body">
        <p>
          I spent six years studying{' '}
          <strong>
            soil science and land resources management
          </strong>{' '}
          before I ever wrote a line of React. It's not the
          background you'd expect for a developer — but it's
          where I learned to be patient with systems that
          don't reveal their problems right away, and to
          trust process over shortcuts.
        </p>

        <p>
          I taught myself the MERN stack in 2022, and haven't
          stopped shipping since — from admin dashboards for
          a health-tech startup to a payments flow for a
          farmer-to-buyer marketplace. I care about the parts
          of frontend work that don't show up in a screenshot:
          clean state management, interfaces that hold up
          under real data, and code a teammate can actually
          pick up.
        </p>

        <div className="root-card">
          <div className="mark">
            BSc
          </div>

          <div className="txt">
            <strong>
              Bachelor of Agriculture, Soil Science &
              Land Resources Management
            </strong>

            <span>
              Obafemi Awolowo University · 2018–2024 ·
              Second Class Upper, CGPA 4.22/5.00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;