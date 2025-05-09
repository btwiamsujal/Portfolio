const ExperienceSection = () => {
  const education = [
    {
      degree: "Bachlore of Engineering in Information Technology",
      institution: "Parul University",
      period: "2022 - 2026",
      grade: "First Class Distinction (CGPA: 7.92)",
      description: "Focused on cybersecurity, software development, and information systems.",
    },
    {
      degree: "Higher Secondary School",
      institution: "GyanManjari Vidhyapith",
      period: "2020 - 2022",
      grade: "First Class (79.33%)",
      description: "Completed 12th grade with Physics, Chemistry, and Mathematics.",
    },
  ];

  const practicingFields = [
    {
      title: "TryHackMe",
      description:
        "TryHackMe is a leading cybersecurity training platform offering interactive labs and real-world attack simulations. Build hands-on skills in networking, encryption, ethical hacking, and tools like Nmap and Metasploit.",
      period: "2024/25 - Present",
    },
    {
      title: "Python Development",
      description:
        "Python Developer skilled in automation, data analysis, and scalable system design to optimize performance. Built automation scripts, data pipelines, and real-time algorithms that improved efficiency and accuracy.",
      period: "2023 - 2025",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Practicing Fields</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div
            className="space-y-6 animate-fade-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-3xl font-bold mb-5 text-tech-blue-light">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-tech-darker p-6 rounded-lg border border-tech-gray"
              >
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-tech-blue"></div>
                  <h4 className="text-2xl font-semibold">{edu.degree}</h4>
                  <p className="text-tech-gray-lighter text-l">
                    {edu.institution}
                  </p>
                  <p className="text-tech-gray-light text-l">{edu.period}</p>
                  <p className="text-tech-gray-light text-l">{edu.grade}</p>

                  <p className="text-tech-gray-lighter mt-2 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Practicing Fields */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-5 text-tech-blue-light">
              Practicing Fields
            </h3>
            {practicingFields.map((field, index) => (
              <div
                key={index}
                className="bg-tech-darker p-6 rounded-lg border border-tech-gray relative"
              >
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-tech-blue-light border-4 border-tech-dark"></div>
                <h4 className="text-lg font-semibold">{field.title}</h4>
                <p className="text-tech-gray-light text-sm mb-3">
                  {field.period}
                </p>
                <p className="text-tech-gray-lighter">{field.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
