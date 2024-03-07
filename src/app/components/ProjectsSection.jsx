"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Discover a world of convenience and style at our online marketplace. Our e-commerce site offers a curated selection of high-quality products, ranging from fashion and electronics to home essentials. Experience seamless shopping with user-friendly navigation, secure transactions, and swift delivery. Elevate your lifestyle with the latest trends and must-have items, all just a click away. Welcome to your go-to destination for effortless, enjoyable online shopping.",
    image: "/images/projects/masters.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Step into a visual journey that captures moments in time. Explore my photography portfolio website, where each image tells a unique story. From breathtaking landscapes to intimate portraits, witness the artistry and passion behind every shot. Immerse yourself in a world of captivating visuals and discover the essence of my photographic narrative. Welcome to a gallery that celebrates the beauty and diversity of life through the lens.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Unleash a world of possibilities at our premier e-commerce destination. Discover a curated collection of premium products ranging from fashion and tech to home essentials. Immerse yourself in a seamless shopping experience with secure transactions, personalized recommendations, and prompt deliveries. Elevate your lifestyle effortlessly with the latest trends and exclusive finds—all in one place. Welcome to your ultimate online shopping destination, where convenience meets style.",
    image: "/images/projects/flipmart.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Online Casino",
    description: "Embrace the thrill of anticipation at our cutting-edge betting website. Dive into the excitement of live sports, esports, and interactive gaming experiences. With a user-friendly interface, secure transactions, and real-time updates, we offer a dynamic platform for enthusiasts. Elevate the stakes, trust your instincts, and indulge in the pulse-pounding world of online betting. Welcome to a place where every moment is a chance to win big and savor the rush of strategic gaming",
    image: "/images/projects/happy_bottar.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Vue Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Embark on your journey to becoming a proficient full-stack developer with our comprehensive roadmap website. Navigate through a structured guide that covers essential front-end and back-end technologies, frameworks, and best practices. Whether you're a beginner or an experienced developer, our roadmap provides a clear path to mastering the full-stack landscape. Unlock the keys to seamless web development and enhance your skills step by step. Welcome to your roadmap to success in the dynamic world of full-stack development.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
