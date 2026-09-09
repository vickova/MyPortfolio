import React from 'react';

const Hero = () => {
  return (
    <section className="wrap hero" id="home">
      <div>
        <div className="kicker">
          <span className="dot"></span>
          Frontend Developer, based in Lagos
        </div>

        <h1>
          <span className="line">
            I build interfaces
          </span>

          <span className="line">
            people actually{' '}
            <span className="grad">
              enjoy using.
            </span>
          </span>
        </h1>

        <p className="sub">
          React, Next.js and TypeScript are my daily tools —
          for dashboards, storefronts and the messy internal
          tools that have to survive real users and real data,
          not just a demo.
        </p>

        <div className="cta-row">
          <a href="#work" className="btn-primary">
            See my work
          </a>

          <a
            href="mailto:olumideronke@gmail.com"
            className="btn-ghost"
          >
            Email me
          </a>
        </div>
      </div>

      <div className="orbit-wrap">
        <div className="ring ring-3">
          <span className="chip">Next.js</span>
        </div>

        <div className="ring ring-2">
          <span className="chip">TypeScript</span>
        </div>

        <div className="ring ring-1">
          <span className="chip">React Query</span>
        </div>

        <div className="orbit-core">
          <img src="../images/vicky-rm-bg.png" alt="vicky" />
        </div>
      </div>
    </section>
  );
};

export default Hero;