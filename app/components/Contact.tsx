"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, error: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: true });
      return;
    }

    try {
      await emailjs.send(
        "service_bl0rvio",
        "template_0zhanl5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "64b2-KnLKskmMlVNU"
      );

      setStatus({ success: true, error: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ success: false, error: true });
    }
  };

  return (
    <section id='contact' className='py-20 background '>
      <div className='max-w-5xl mx-auto pr-6 font-sarala'>
        <div className=' relative text-3xl font-bold text-center inline-block pb-2 font-sarala mt-12'>
          <h2 className='relative heading'>
            Let &apos;s Connect! 💌
            <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 blur-sm opacity-40 rounded-md transform translate-y-2'></span>
          </h2>
        </div>

        <div className='mt-10 flex flex-col md:flex-row items-center justify-between font-quicksand'>
          <motion.div
            className='md:w-1/2 text-center md:text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className='text-lg text-gray-600  \'>
              Let’s Make Something Awesome Together! Whether it’s coding,
              brainstorming the next big idea, or just chatting about tech over
              coffee ☕ I’d love to connect! Feel free to reach out, and let’s
              turn ideas into reality. ✨
            </p>

            <div className='mt-6 flex justify-center md:justify-start space-x-6 text-red-400'>
              <a
                href='https://linkedin.com/in/chandrikakillada'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin
                  size={30}
                  className='hover:text-pink-600 transition'
                />
              </a>

              <a
                href='https://github.com/chandrikakillada'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub
                  size={30}
                  className='hover:text-pink-600 transition'
                />
              </a>
              <a
                href='mailto:chandrikakvenu@email.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaEnvelope
                  size={30}
                  className='hover:text-pink-600 transition'
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className='mt-10 md:mt-0 md:w-1/2'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className='w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4'
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4'
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                rows={4}
                className='w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4'
              ></textarea>
              <button
                type='submit'
                className='w-full bg-red-400 text-white p-3 rounded-lg hover:bg-red-500 transition'
              >
                SEND MESSAGE
              </button>

              {status.success && (
                <p className='text-green-500 mt-2 text-center'>
                  ✅ Message sent successfully!
                </p>
              )}
              {status.error && (
                <p className='text-red-500 mt-2 text-center'>
                  ❌ Failed to send message. Try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
