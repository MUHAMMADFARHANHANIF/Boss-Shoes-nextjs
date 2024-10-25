"use client"

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen absolute overflow-hidden"
      >
        <motion.div 
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -45, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="bg-blue-100 bg-blue-200 bg-opacity-30 backdrop-filter -rotate-45 w-[719.55px] h-[1500.05px] absolute z-[0] overflow-hidden" 
          style={{top: '-600px', right: '-220px'}}
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#77C0E9] w-full min-h-screen justify-center items-start p-4 sm:p-10 z-[10]"
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center z-2"
        >
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight z-10">
            What Our Happy
            <br />
            Customer Says
          </h1>
        </motion.div>
        <motion.hr 
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-32 mx-auto mt-5"
        />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-5"
        >
          <h1 className="text-white text-lg sm:text-xl font-bold leading-tight">
            We value our customers' feedback and strive to
            provide the best experience possible.
            <br />
            Here's what our happy customers have to say
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row text-white justify-around items-center gap-8 md:gap-20 mt-10 md:mt-20">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5"
          >
            <div className="flex justify-between items-center mb-4">
              <motion.img whileHover={{ scale: 1.1 }} src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="testimonial" className="w-12 h-12 rounded-full cursor-pointer" />
              <motion.img whileHover={{ scale: 1.1 }} src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-message-icon-for-your-project-png-image_5214044.jpg" alt="testimonial" className="w-10 h-10 rounded-full cursor-pointer" />
            </div>
            <p className="text-sm font-semibold mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="mt-auto">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm">CEO, Company Name</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5"
          >
            <div className="flex justify-between items-center mb-4">
              <motion.img whileHover={{ scale: 1.1 }} src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="testimonial" className="w-12 h-12 rounded-full cursor-pointer" />
              <motion.img whileHover={{ scale: 1.1 }} src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-message-icon-for-your-project-png-image_5214044.jpg" alt="testimonial" className="w-10 h-10 rounded-full cursor-pointer" />
            </div>
            <p className="text-sm font-semibold mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="mt-auto">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm">CEO, Company Name</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-black w-full h-screen absolute z-0"
      >
        <div className="" />
      </motion.div>

      {/* Footer section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black w-full py-8 sm:py-12 z-1 absolute"
      >
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center text-wrap mb-6 sm:mb-10"
        >
          <div className="leading-tight">
            <h1 className="text-white text-2xl sm:text-3xl font-bold">
              Boss
              <br />
              <h1 className="px-5">
                Shoes
              </h1> 
            </h1>
          </div>
        </motion.div>

        {/* Navigation links */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center px-4 sm:px-10 gap-4 sm:gap-8 mb-6 sm:mb-10"
        >
          <motion.p whileHover={{ scale: 1.05 }}  className="text-white text-sm sm:text-xl leading-3">
            Terms of Service
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}  className="text-white text-sm sm:text-xl leading-3">
            Privacy Policy
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}  className="text-white text-sm sm:text-xl leading-3">
            Security
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}  className="text-white text-sm sm:text-xl leading-3">
            FAQ
          </motion.p>
        </motion.div>

        {/* Bottom footer section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center px-4 sm:px-10 gap-4 sm:gap-0"
        >
          {/* Language selector */}
          <div className="text-center sm:text-left sm:w-1/3">
            <motion.h1 whileHover={{ scale: 1.05 }} className="text-white text-sm sm:text-xl">
              <p >English</p>
            </motion.h1>
          </div>

          {/* Social media links */}
          <div className="flex justify-center sm:w-1/3 gap-4 sm:gap-8">
            <motion.p whileHover={{ scale: 1.2 }}  className="text-white text-sm sm:text-xl">
              FB
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }}  className="text-white text-sm sm:text-xl">
              TW
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }}  className="text-white text-sm sm:text-xl">
              LI
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }}  className="text-white text-sm sm:text-xl">
              IN
            </motion.p>
          </div>

          {/* Copyright */}
          <div className="sm:w-1/3 text-white text-center sm:text-right">
            <motion.p 
              whileHover={{ scale: 1.05 }} 
              
            >
              <h1 className="text-white text-sm sm:text-xl">
                BOSS SHOES © All rights Reserved
              </h1>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Page;