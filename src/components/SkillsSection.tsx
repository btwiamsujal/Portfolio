const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        "MongoDB",
        "Angular",
        "Node.js",
        "Django",
        "Flask",
        "RESTful APIs",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "VS Code",
        "MySQL Workbench",
        "MongoDB Atlas",
        "PyCharm",
        "Linux",
        "Postman",
      ],
    },
    {
      title: "Cybersecurity",
      skills: ["Network Security", "SQL Injection", "Junior Security Analyst"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-tech-darker p-6 rounded-lg border border-tech-gray animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-tech-blue-light">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag hover:bg-tech-blue/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proficiency Item */}
            <div>
              <div className="flex justify-between mb-1">
                <span>Python Development</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-tech-gray rounded-full">
                <div
                  className="h-full bg-tech-blue-light rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Software Project Development</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-tech-gray rounded-full">
                <div
                  className="h-full bg-tech-blue-light rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Cybersecurity</span>
                <span>35%</span>
              </div>
              <div className="h-2 bg-tech-gray rounded-full">
                <div
                  className="h-full bg-tech-blue-light rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Computer Networking</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-tech-gray rounded-full">
                <div
                  className="h-full bg-tech-blue-light rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
