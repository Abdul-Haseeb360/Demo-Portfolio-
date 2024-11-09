import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            I'm always open to new opportunities.Feel free
            to reach out! 🙂
          </p>
          <div className="flex flex-col space-y-2">
            <a
              href="mailto:abdulhaseebshaikh1234@gmail.com"
              className="flex items-center text-blue-600 "
            >
              abdulhaseebshaikh1234@gmail.com
            </a>
            <a
              href="https://github.com/Abdul-Haseeb360"
              className="flex items-center text-blue-600 "
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-haseeb-shaikh-491605219/"
              className="flex items-center text-blue-600 "
            >
              LinkdIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
