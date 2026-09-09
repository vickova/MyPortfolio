import React from 'react';

const Work = () => {
  return (
    <section className="wrap work" id="work">
      <div className="section-head">
        <h2>Selected work</h2>

        <p>
          Three places I've shipped real features to real
          users.
        </p>
      </div>

      <div className="bento">
        <div className="card wide c1">
          <div className="glow"></div>

          <div className="card-inner">
            <span className="card-tag">
              Apr 2026 — Present
            </span>

            <h3>
              MedixDeck Health Solutions
            </h3>

            <p>
              A growing health-tech platform. I build and
              maintain the interfaces the internal team
              relies on every day — dashboards, protected
              routes and role-based access — while keeping
              the codebase consistent as new features ship
              on top of it.
            </p>

            <div className="stack-list">
              <span>React</span>
              <span>TypeScript</span>
              <span>React Query</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>

        <div className="card-row">
          <div className="card c2">
            <div className="glow"></div>

            <div className="card-inner">
              <span className="card-tag">
                2026
              </span>

              <h3>
                Hebron Heights & Gardens
              </h3>

              <p>
                An e-commerce and admin platform with a lot
                of moving parts. I built the admin side —
                searchable tables, image uploads, hierarchical
                categories — and wired it to the backend with
                TanStack Query.
              </p>

              <div className="stack-list">
                <span>Next.js</span>
                <span>Material UI</span>
                <span>TanStack Query</span>
              </div>
            </div>
          </div>

          <div className="card c3">
            <div className="glow"></div>

            <div className="card-inner">
              <span className="card-tag">
                2025
              </span>

              <h3>
                FarmSwift
              </h3>

              <p>
                A marketplace connecting farmers with
                buyers. I rebuilt login and registration
                on React Query, retiring an ageing Redux
                setup, and integrated Stripe so sellers
                get paid in real time, commissions included.
              </p>

              <div className="stack-list">
                <span>React</span>
                <span>Stripe</span>
                <span>Axios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;