const AboutSection = () => {
  return (
    <section id="about" className="bg-tech-darker py-20">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-4 animate-fade-in">
            <p className="text-tech-gray-lighter text-lg">
              I'm an enthusiastic tech explorer driven by curiosity and precision, currently pursuing a B. Tech in Information Technology.
With hands-on experience in Python programming development and a strong interest in Cybersecurity, I thrive on solving
complex challenges with secure, efficient solutions. My academic background has equipped me with solid skills in C, Python
(my core strength), Java, DBMS, OOP, MEA(R)N Stack, .NET, and DSA, along with practical exposure through impact
training and real-world tech environments. I am Oracle Gen AI certified and a Cisco Certified Ethical Hacker, I’m
constantly focused on growing in the fields of Python development and cybersecurity.
              </p>
            <div className="text-tech-gray-lighter text-lg text-left">
              <p className="mb-2"><strong>Profile: </strong>IT Engineer</p>
              <p className="mb-2"><strong>Domain: </strong>Cybersecurity and Networking</p>
              <p className="mb-2"><strong>Education: </strong>Bachelor of Engineering</p>
              <p className="mb-2"><strong>Language: </strong>English, Hindi, Gujarati, Marathi</p>
              <p className="mb-2"><strong>Labs on: </strong>TryHackMe, PortSwigger</p>
              <p className="mb-2"><strong>Other Skills: </strong>Python, Django, AI-driven solutions, Designing the webpage</p>
              <p className="mb-2"><strong>Interest: </strong>Research on Air Crashes, Reading history of Inventions, Traveling</p>
            </div>

          </div>
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="bg-tech-dark p-6 rounded-lg border border-tech-gray">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-tech-blue-light font-medium">B.Tech in Information Technology</p>
              <p className="text-tech-gray-lighter">Final Year Student</p>
              <p className="text-tech-gray-light text-sm">2022 - 2026</p>
            </div>
            <div className="bg-tech-dark p-6 rounded-lg border border-tech-gray">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <ul className="text-tech-gray-lighter space-y-2">
                <li>• Cybersecurity</li>
                <li>• Python Development</li>
                <li>• Technical Documentation</li>
                <li>• Network Security</li>
                <li>• Software Devlopment</li>
                <li>• Aviation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;