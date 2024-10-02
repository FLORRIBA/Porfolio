import './Skills.css';
import { useState, useMemo } from 'react';
import { SKILLS } from '../../utils/data';
import { SkillCard } from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
    // Usa useMemo para memorizar el contenido de habilidades
    const skillsList = useMemo(() => SKILLS, []);

    const [selectedSkill, setSelectedSkill] = useState(skillsList[0]);

    const handleSelectSkill = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <section id="skills" className="skills-container">
            <h1 className="section-title">Technical Skills</h1>

            <div className="skills-content">
                <div className="skills">
                    {skillsList.map((skill) => (
                        <SkillCard
                            key={skill.title}
                            iconUrl={skill.icon}
                            title={skill.title}
                            isActive={selectedSkill.title === skill.title}
                            onClick={() => handleSelectSkill(skill)}
                            aria-selected={selectedSkill.title === skill.title}
                            role="button"
                            tabIndex={0}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
