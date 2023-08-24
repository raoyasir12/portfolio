import React from "react";

const educationContent = [
  {
    mission: "Mission",
    company_name: "Nerdy Tech Solution",
    details: `Our mission at Nerdy Tech Solutions is to leverage our expertise in web development, app development, game development, and software development to create immersive, functional, and user-centric experiences. We are committed to fostering innovation, embracing challenges, and delivering tailor-made solutions that transcend conventional boundaries. Through transparent communication, relentless dedication, and a passion for excellence, we aim to empower our clients to achieve their goals, while nurturing a culture that values creativity, growth, and the relentless pursuit of knowledge.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.mission}
            <span className="place open-sans-font">{val.company_name}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
