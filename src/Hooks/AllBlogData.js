import { useState } from "react";
import img1 from "../../public/assets/img/blog/01.png";


const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: " Unlocking the Power of Web, App, Game, and Software Development at Nerdy Tech Solutions",
      commentor: "Yasir Ali",
      date: "25 August 2023",
      tag: `Company Blog`,
      description1:
        `Greetings, tech enthusiasts and visionaries!`,
      description2:
        `At Nerdy Tech Solutions, we're more than just a company – we're a passionate team of developers, designers, and innovators who thrive on turning ideas into digital realities. Today, we're excited to delve into the world of web development, app development, game development, and software development – the pillars that drive our mission of transforming innovation into impactful solutions.`,
      description3:
        `In a digital age, your online presence is your virtual storefront. Our web development wizards are skilled in creating responsive, user-friendly websites that captivate audiences and deliver seamless navigation. From e-commerce platforms that drive sales to captivating portfolio websites that showcase your work, we meticulously craft each site to reflect your unique identity while ensuring optimal functionality across devices.Mobile apps have become an integral part of our daily lives, and our app development team specializes in bringing your app ideas to life. Whether you're aiming to enhance customer engagement, streamline business operations, or provide a unique service, we're here to turn your concepts into interactive, intuitive, and feature-rich applications that resonate with users.Gaming isn't just entertainment; it's an experience. Our game development aficionados are passionate about creating immersive, visually stunning games that captivate players and keep them coming back for more. Whether you're envisioning a casual mobile game or an elaborate multiplayer experience, we have the expertise to make your gaming dreams a reality.Behind every efficient operation lies the power of software. Our software development experts design and engineer tailored solutions that empower businesses to streamline processes, enhance productivity, and adapt to evolving market demands. From custom business software to innovative SaaS applications, we're dedicated to providing solutions that drive your success.Our commitment to technology goes beyond development. We're invested in keeping you updated with the latest trends, insights, and innovations in the tech world. From the intricacies of UI/UX design to the impact of artificial intelligence on software, our blog is your resource for staying informed and inspired.At Nerdy Tech Solutions, we're not just developers – we're your partners in innovation. From concept to deployment, we're with you every step of the way, ensuring that your vision is translated into powerful digital solutions that make a difference.Ready to embark on a journey of innovation with us? Stay tuned for more engaging content and insightful articles. Until then, keep exploring, dreaming, and envisioning – we're here to turn those visions into reality.Stay nerdy,The Nerdy Tech Solutions Team`,
      
    },
    
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
