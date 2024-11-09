import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  return (
    <div>
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {[
            {
              title: "ToDo App 📃",
              description:
                "A dynamic and user-friendly Todo List application! 🚀",
              link: "https://listschedule.netlify.app/",
            },

            {
              title: "Weather App ☁",
              description:
                "The app delivers real-time weather information, in any area across the world. 🌎",
              link: "https://atmosphericapp.netlify.app/",
            },

            {
              title: "Budget Calculator 🧮",
              description:
                "This budget calculator will manage your income and Costs and graphically display it. 📈",
              link: "https://budget-calculator-pvut64y26-abdul-haseeb-shaikhs-projects.vercel.app/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:translate-y-3"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline flex items-center"
              >
                View Project <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
