import React from 'react';

const technologies = [
  'ReactJS',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Material UI',
  'TanStack Query',
  'REST APIs',
  'Node.js',
  'MongoDB',
];

const Marquee = () => {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {[...technologies, ...technologies].map(
          (technology, index) => (
            <span key={`${technology}-${index}`}>
              {technology}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Marquee;