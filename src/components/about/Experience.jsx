import React from "react";

const experienceContent = [
  {
    vision: "Vision",
    compnayName: "Nerdy Tech Solutions",
    details: `At Nerdy Tech Solutions, our vision is to be a trailblazing force in shaping the digital landscape, transforming ideas into impactful technological solutions that empower businesses and individuals. We strive to be recognized as the go-to partner for innovation, combining creativity, expertise, and collaboration to drive positive change in the ever-evolving world of technology.`,
  },
  
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.vision}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
