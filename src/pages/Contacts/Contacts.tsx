import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const DeveloperProfiles: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const developerProfiles = [
    {
      name: 'Yaroslav Avramidi',
      role: 'Front-end Developer',
      email: 'avramidi.yaroslav@gmail.com',
      linkedin: 'https://ua.linkedin.com',
      image: 'img/developers/Yaroslav.jpg',
      profileLink: 'https://github.com/yaroslav1177',
    },
    {
      name: 'Maksym Hryvko',
      role: 'Front-end Developer',
      email: 'maksym.hryvko@gmail.com',
      linkedin: 'https://ua.linkedin.com',
      image: 'img/developers/Maksym.jpg',
      profileLink: 'https://github.com/mhryvko',
    },
    {
      name: 'Vitalii Lytvynenko',
      role: 'Front-end Developer',
      email: 'vitalii.lytvynenko.dev@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vitalii-lytvynenko-2546ba2a1/',
      image: 'img/developers/Vitalii.jpg',
      profileLink: 'https://github.com/vitalii-lytvynenko',
    },
    {
      name: 'Stanislav Kushnir',
      role: 'Front-end Developer',
      email: 'stan.k.2019@outlook.com',
      linkedin: 'https://ua.linkedin.com',
      image: 'img/developers/Stanislav.jpg',
      profileLink: 'https://github.com/StsKushnir',
    },
    {
      name: 'Dmytro Boboshko',
      role: 'Front-end Developer',
      email: 'boboshko.dev@gmail.com',
      linkedin: 'https://ua.linkedin.com/in/dmytro-boboshko-11216a27',
      image: 'img/developers/Dmytro.jpg',
      profileLink: 'https://github.com/DSB-18',
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-20 ${theme === 'dark' ? 'text-gray-100' : 'bg-white text-gray-900'}`}
    >
      <div className="w-full px-4 md:px-8 lg:px-[152px] mt-[5px] mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-center">
          Meet Our Team
        </h1>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {developerProfiles.slice(0, 3).map((dev, index) => (
              <motion.div
                key={index}
                className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-8 rounded-lg shadow-xl w-full flex flex-col items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
                    <p className="text-md font-medium mb-2 text-red-500">
                      {dev.role}
                    </p>
                    <div className="flex items-center mb-2">
                      <FaEnvelope className="mr-2" />
                      <a href={`mailto:${dev.email}`} className="text-sm">
                        {dev.email}
                      </a>
                    </div>
                    <div className="flex items-center mb-4">
                      <FaLinkedin className="mr-2" />
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <a
                      href={dev.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 py-2 px-4 text-white rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      View GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developerProfiles.slice(3).map((dev, index) => (
              <motion.div
                key={index}
                className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-8 rounded-lg shadow-xl min-w-[300px] flex flex-col items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
                    <p className="text-md font-medium mb-2 text-red-500">
                      {dev.role}
                    </p>
                    <div className="flex items-center mb-2">
                      <FaEnvelope className="mr-2" />
                      <p className="text-sm">{dev.email}</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <FaLinkedin className="mr-2" />
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <a
                      href={dev.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 py-2 px-4 text-white rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      View GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfiles;
