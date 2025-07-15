import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Creative Design",
      skills: [
        { name: "Motion Graphics", level: 95 },
        { name: "Visual Effects", level: 90 },
        { name: "Graphic Design", level: 90 },
        { name: "Digital Art", level: 85 },
        { name: "Photo Manipulation", level: 88 },
        { name: "Hand Drawing", level: 80 }
      ]
    },
    {
      title: "Media Production",
      skills: [
        { name: "Video Editing", level: 95 },
        { name: "Photography", level: 85 },
        { name: "Brand Design", level: 88 },
        { name: "Content Creation", level: 90 },
        { name: "Visual Storytelling", level: 92 },
        { name: "Campaign Design", level: 85 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Laravel", level: 70 },
        { name: "Node.js", level: 70 },
        { name: "HTML/CSS", level: 85 },
        { name: "UI/UX Design", level: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-300">
              Creative and technical proficiency across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;