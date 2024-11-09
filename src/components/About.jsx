import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="/Images/Capture.PNG"
            alt="John Doe"
            className="w-52 h-52 rounded-full mx-auto mb-4 border-solid border-4"
          />
          <p className="text-lg text-center">
          Hi, I'm Abdul Haseeb Shaikh, a dedicated Front-end developer with a strong foundation in creating responsive, visually appealing, and user-friendly websites. With six months of hands-on experience, I specialize in JavaScript, TypeScript, and advanced CSS techniques,
          </p>
        </div>
      </section>
    </div>
  );
}
