import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'ReactJS',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    title: 'State & data',
    skills: [
      'TanStack Query',
      'REST APIs',
      'Axios',
      'Fetch API',
    ],
  },
  {
    title: 'Backend & tools',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    title: 'Beyond code',
    skills: [
      'Agile',
      'Task tracking',
      'Stakeholder comms',
      'Public speaking',
    ],
  },
];

const Skills = () => {
  return (
    <section className="wrap skills" id="skills">
      <div className="section-head">
        <h2>What I work with</h2>

        <p>
          The tools I reach for most.
        </p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div
            className="skill-card"
            key={group.title}
          >
            <h4>{group.title}</h4>

            <div className="pill-row">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;