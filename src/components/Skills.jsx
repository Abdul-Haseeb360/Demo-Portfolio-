import React from "react";

export default function Skills() {
  return (
    <div>
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="bg-white shadow-md rounded-lg p-6  ">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "TypeScript",
              "Bootstrap",
            ].map((skill, index) => (
              <li
                key={index}
                className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 text-2xl text-center"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
