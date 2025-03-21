"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id='about' className='py-20 px-6 md:px-12 lg:px-24 background '>
      <div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
        <motion.div
          className='md:w-3/4 text-center md:text-left'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className=' relative text-3xl font-bold text-center inline-block pb-2 font-sarala mt-12'>
            <h2 className='relative heading'>
              About me 👩
              <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 blur-sm opacity-40 rounded-md transform translate-y-2'></span>
            </h2>
          </div>
          <p className='mt-4 text-lg text-gray-600  leading-relaxed font-quicksand'>
            Hello again! Thanks for making it this far! Just a heads-up, my
            portfolio is always evolving (just like my code)! I’m constantly
            learning, building, and occasionally breaking things. But hey,
            that’s the beauty of being a developer, right? 😆
          </p>

          <ul className='mt-4 text-m text-gray-700 list-disc pl-6 '>
            <li>
              💻 <strong>Grinding LeetCode problems</strong> just for fun (yes,
              really).
            </li>
            <li>
              🛠️ <strong>Tinkering with tiny side projects</strong> because why
              not?
            </li>
            <li>
              🎮 <strong>Playing video games</strong> and occasionally
              rage-quitting.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className='w-full md:w-1/4 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64overflow-hidden shadow-lg flex items-center justify-center '>
            <Image
              src='/prf.png'
              alt='Chandrika'
              width={400}
              height={400}
              className='object-cover rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
