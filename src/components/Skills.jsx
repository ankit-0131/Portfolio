import {
  FiCode, FiGlobe, FiLayers, FiDatabase, FiHeart,
} from 'react-icons/fi';
import {
  FaJava, FaJs, FaPhp, FaPython, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinux,
} from 'react-icons/fa';
import {
  SiCplusplus, SiMysql, SiMongodb,
} from 'react-icons/si';
import { skills } from '../data/data';
import './Skills.css';

/**
 * Skills — Card-based skill categories with icons (no progress bars)
 */

// Map category names to header icons
const categoryIcons = {
  Languages: <FiCode />,
  'Web Technologies': <FiGlobe />,
  'Frameworks & Libraries': <FiLayers />,
  'Tools & Databases': <FiDatabase />,
  'Soft Skills': <FiHeart />,
};

// Map individual skill names to their brand icons
const skillIcons = {
  Java: <FaJava />,
  JavaScript: <FaJs />,
  PHP: <FaPhp />,
  Python: <FaPython />,
  'C++': <SiCplusplus />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  'React.js': <FaReact />,
  'Node.js': <FaNodeJs />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Git: <FaGitAlt />,
  Linux: <FaLinux />,
  'Problem-Solving': <FiCode />,
  'Time Management': <FiHeart />,
  'Team Collaboration': <FiHeart />,
  Adaptability: <FiHeart />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`skill-card animate-on-scroll stagger-${(i % 5) + 1}`}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  {categoryIcons[group.category] || <FiCode />}
                </div>
                <h3 className="skill-card-title">{group.category}</h3>
              </div>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill.name}>
                    {skillIcons[skill.name] && (
                      <span className="skill-tag-icon">{skillIcons[skill.name]}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
