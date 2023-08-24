import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100092286613290&mibextid=ZbWKwL",
  },
  { iconName: "fa fa-whatsapp", link: "https://wa.me/+923336563845" },
  {
    iconName: "fa fa-linkedin",
    link: "http://www.linkedin.com/in/nerdy-tech-solutions-6a003328a",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
