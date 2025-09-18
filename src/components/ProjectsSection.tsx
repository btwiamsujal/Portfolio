import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
  {
    id: 1,
    title: "Aether AI",
    description: "AetherAI is a smart virtual assistant that automates tasks, answers queries, and enhances productivity using AI-driven natural language processing and modular functionality.",
    technologies: ["Python", "Flask", "NLP libraries", "GUI", "REST API"],
    link: "https://www.linkedin.com/posts/sujal-patel-45b632266_aetherai-aiinnovation-artificialintelligence-activity-7313078601443106816-tj-u",
    github: "https://github.com/btwiamsujal/Aether-AI",
    image: "/images/aetherai.gif",
  },
  {
    id: 2,
    title: "Paperly",
    description: "A collaborative note-sharing web app that allows students to share, edit, and access class notes with ease.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/btwiamsujal/Paperly",
    image: "/images/paperly.png",
  },
  {
    id: 3,
    title: "SkillSphere",
    description: "SkillSphere is a career development platform designed for students and institutions, offering guidance, resources, and opportunities for professional growth.",
    technologies: ["Python", "Streamlit", "Flask", "MongoDB"],
    link: "#",
    github: "https://github.com/btwiamsujal/SkillSphere",
    image: "/images/skillsphere.png",
  },
  {
    id: 4,
    title: "MedAether",
    description: "A healthcare-focused AI assistant that provides medical information, suggestions, and automation for healthcare workflows.",
    technologies: ["Python", "Flask", "Machine Learning", "API Integration"],
    link: "#",
    github: "https://github.com/btwiamsujal/MedAether",
    image: "/images/medaether.png",
  },
  {
    id: 5,
    title: "PennyTrack",
    description: "A comprehensive expense tracking application with budget planning features, expense categories, and visualization tools to help users manage personal finances effectively.",
    technologies: ["Python", "Flask", "MongoDB", "Chart.js", "Bootstrap"],
    link: "https://pennytrack-production.up.railway.app/",
    github: "https://github.com/btwiamsujal/PennyTrack",
    image: "/images/pennytrack.png",
  },
  {
    id: 6,
    title: "AES Based Password Vault",
    description: "A secure password manager built with AES encryption to safely store and retrieve credentials.",
    technologies: ["Python", "AES Encryption", "Flask", "HTML", "CSS"],
    link: "#",
    github: "https://github.com/btwiamsujal/AES_based_pwd_vault",
    image: "/images/aesvault.png",
  },
];



  return (
    <section id="projects" className="py-20 bg-tech-darker">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 relative rounded-t overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-tech-dark/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="space-x-4">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="bg-tech-blue hover:bg-tech-blue-light"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-tech-gray-lighter text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-tech-gray/50 rounded text-tech-gray-lighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-tech-blue-light hover:text-tech-blue group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight
                    size={16}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-tech-gray-lighter mb-4">Interested in seeing more of my work?</p>
          <Button
            asChild
            variant="outline"
            className="border-tech-blue text-tech-blue-light hover:bg-tech-blue/10"
          >
            <a href="https://github.com/btwiamsujal" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
