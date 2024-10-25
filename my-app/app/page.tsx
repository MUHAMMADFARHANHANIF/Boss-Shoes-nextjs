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
          className="bg-blue-100 bg-blue-200 bg-opacity-30 backdrop-filter w-[719.55px] h-[1500.05px] absolute z-[0] overflow-hidden"
          style={{ top: '-600px', right: '-220px' }}
        />
      </motion.div>
      <div className="bg-[#77C0E9] w-full min-h-screen justify-center items-start p-4 sm:p-10 z-[10]">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-2"
        >
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight z-10">
            What Our Happy<br />Customer Says
          </h1>
        </motion.div>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-5"
        />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-5"
        >
          <h1 className="text-white text-lg sm:text-xl font-bold leading-tight">
            We value our customers' feedback and strive to
            provide the best experience possible.<br />
            Here's what our happy customers have to say
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row text-white justify-around items-center gap-8 md:gap-20 mt-10 md:mt-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5"
          >
            {/* Testimonial content */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5"
          >
            {/* Testimonial content */}
          </motion.div>
        </div>
      </div>

      {/* Footer section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="bg-black w-full py-8 sm:py-12 z-1 absolute"
      >
        {/* Footer content */}
      </motion.div>
    </>
  );
};

export default Page;