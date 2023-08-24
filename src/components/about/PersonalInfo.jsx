import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Yasir", hasColor: "" },
  { meta: "last name", metaInfo: "Ali", hasColor: "" },
  { meta: "Age", metaInfo: "23 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistani", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Lahore, PB,PK", hasColor: "" },
  { meta: "phone", metaInfo: "+923336563845", hasColor: "" },
  { meta: "Email", metaInfo: "raoyasirali888@gmail.com", hasColor: "" },
  { meta: "WhatsAPP ", metaInfo: "+923336563845", hasColor: "" },
  { meta: "langages", metaInfo: "English & Urdu", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
