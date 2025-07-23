import React from 'react';
import '../styles/Global.css';

const AboutMe: React.FC = () => {
  return (
    <section id="About-Me" className="about-me-section">
      <div className="about-me-container">
        <h2 className="about-me-title">Edward He</h2>
        <p className="about-me-description">
          uOttawa <span className="highlight">Computer Science</span> student<br />
          MASc Candidate in Electrical & Computer Engineering (Applied AI), Winter 2026 start
        </p>
        <ul className="about-me-list">
          <li>
            <span>
              <strong>MASc Admission:</strong> Admitted to MASc ECE (Applied AI), University of Ottawa (Jan 2026).
            </span>
          </li>
          <li>
            <span>
              <strong>Graduate Funding:</strong> Awarded $7,500 Admission Scholarship (3 terms), $18,000 Research Support, $12,000 TAship over 2 years.
            </span>
          </li>
        </ul>
        <div className="about-me-buttons">
          <button>My Experience</button>
          <button>My Projects</button>
          <button>My Programming Arsenal</button>
          <button>My Certificate</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;