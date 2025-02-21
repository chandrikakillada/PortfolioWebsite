"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingNavbar from "./FloatingNavbar";

const floatingIcons = [
  { icon: <FaCode className='text-blue-300 text-2xl' /> },
  { icon: <FaRocket className='text-blue-400 text-2xl' /> },
  { icon: <FaLaptopCode className='text-blue-400 text-2xl' /> },
  { icon: <FaDatabase className='text-blue-500 text-2xl' /> },
  { icon: <FaServer className='text-blue-400 text-2xl' /> },
  { icon: <FaCloud className='text-blue-300 text-2xl' /> },
];

const experiences = [
  {
    title: "Full Stack Engineer Intern",
    company: "Suncrest Services Inc",
    date: "Oct 2023 - Apr 2024",
    description: [
      "Revamped a legacy .NET B2B platform by rebuilding the UI with React and Tailwind CSS.",
      "Optimized API performance using FastAPI.",
      "Enhanced UX through Figma prototypes.",
      "Increased component reusability using Material UI.",
    ],
    techStack: ["React", "Tailwind CSS", "FastAPI", "Material UI", ".NET"],
    icon: <FaBriefcase className='text-red-500' />,
  },
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    date: "Mar 2021 - Jul 2022",
    description: [
      "Developed and maintained full-stack features for a Banking platform.",
      "Implemented API integrations and optimized database queries.",
      "Launched bereavement support pages, increasing user engagement.",
      "Reduced page load times using lazy loading.",
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
    icon: <FaBriefcase className='text-red-500' />,
  },
  {
    title: "Post Graduate Certificate in IT",
    company: "Humber College",
    date: "Sep 2022 - Apr 2024",
    description: ["Dean’s Honour List Awardee"],
    link: "https://www.linkedin.com/posts/chandrikakillada_deanslist-humbercollege-appliedsciences-activity-7164469223375777792-6zWi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfUx6kB5PP0vfkIi4V0h6H8Mx_Nx435SGk",
    techStack: ["Software Engineering", "Cloud Computing"],
    icon: <FaGraduationCap className='text-red-500' />,
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "JNTUH",
    date: "Apr 2016 - Sep 2020",
    description: [],
    techStack: ["C", "C++", "Data Structures", "Algorithms"],
    icon: <FaGraduationCap className='text-red-500' />,
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='bg-white text-red-400 relative overflow-hidden mt-20'
    >
      <FloatingNavbar />

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
          }}
          animate={{
            x: [
              Math.random() * 700 - 350,
              Math.random() * 700 - 350,
              Math.random() * 700 - 350,
            ],
            y: [
              Math.random() * 500 - 250,
              Math.random() * 500 - 250,
              Math.random() * 500 - 250,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className='absolute'
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className='flex justify-center relative text-4xl font-bold text-red-400 text-center inline-block pb-2 mt-10'>
        <h2>
          My Journey
          <span className='absolute left-1/2 bottom-[-4px] w-[14%] h-[8px] bg-red-300 opacity-150 blur-md rounded-lg transform -translate-x-1/2'></span>
        </h2>
      </div>

      <div className='py-16 px-6 relative max-w-3xl mx-auto'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='mb-10 relative flex items-start'
          >
            {/* Date Section */}
            <div className='w-1/4 mt-1 text-right pr-4 text-gray-600'>
              {exp.date}
            </div>

            {/* Timeline Line */}
            <div className='relative flex flex-col items-center'>
              <div className='p-2 rounded-full'>{exp.icon}</div>
            </div>

            {/* Job/Education Details */}
            <div className='w-3/4 bg-pink-50 p-4 rounded-lg shadow-lg ml-4'>
              <h3 className='text-xl font-bold mt-1 text-red-800'>
                {exp.title}
              </h3>
              <h4 className='text-lg text-red-400 font-semibold'>
                {exp.company}
              </h4>
              <ul className='list-disc list-inside text-black mt-2'>
                {exp.description.map((desc, i) => (
                  <li key={i} className='ml-3'>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 underline hover:text-blue-700'
                      >
                        {desc}
                      </a>
                    ) : (
                      desc
                    )}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className='flex flex-wrap gap-2 mt-4'>
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-red-300 text-red-900 px-2 py-1 text-sm font-semibold rounded-lg'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
