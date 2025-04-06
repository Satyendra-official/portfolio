const skills = [
    "HTML", "CSS", "JavaScript", "Tailwind",
    "React", "Node.js", "Express", "MongoDB",
    "C", "C++", "Python", "Java"
  ];
  
  function Skills() {
    return (
      <section id="skills" className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">💻 Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg text-center font-medium text-gray-700 hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;
  