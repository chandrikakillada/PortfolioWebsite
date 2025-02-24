"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const text = "Hii! I'm Chandrika 👋";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCursorVisible(false);
          setIsTyping(false);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-full background'>
      <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left py-32 px-6 md:px-12 lg:px-24'>
        <div className='md:w-1/2'>
          <motion.h1
            className='dark:text-red-400 relative inline-block leading-snug'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className='relative text-4xl font-bold heading text-center md:text-left font-sarala'>
              {displayText}
              {cursorVisible && (
                <span className={`blinking-cursor ${isTyping ? "typing" : ""}`}>
                  |
                </span>
              )}
              <span className='absolute left-0 bottom-0 w-full h-4 bg-red-200 opacity-50 blur-sm transform translate-y-2 rounded-none'></span>
            </h2>
          </motion.h1>

          <style jsx>{`
            .blinking-cursor {
              display: inline-block;
              margin-left: 5px;
            }

            /* Blinking effect only while typing */
            .typing {
              animation: blink 1s infinite;
            }

            @keyframes blink {
              50% {
                opacity: 0;
              }
            }
          `}</style>

          <motion.p
            className='mt-4 text-lg md:text-xl text-gray-700 font-quicksand'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A <span className='text-red-500'>Full-Stack Developer </span>
            passionate about crafting modern, scalable web applications. Turning
            complex problems into elegant, user-friendly solutions. ✨
          </motion.p>
        </div>

        <motion.div
          className='mt-10 md:mt-0 md:w-1/3 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg flex items-center justify-center'>
            <Image
              src='/profilepic-modified.png'
              alt='Profile'
              width={300}
              height={300}
              className='rounded-full object-cover'
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className='mt-10 flex justify-center pb-10'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 text-gray-800 dark:text-red-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
