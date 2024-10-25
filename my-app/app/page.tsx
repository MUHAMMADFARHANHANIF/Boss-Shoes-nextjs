import React from "react";

const Page = () => {
  return (
      <>
      <div className="w-full h-screen absolute overflow-hidden">

      <div className="bg-blue-100 bg-blue-200 bg-opacity-30 backdrop-filter  -rotate-45 w-[719.55px] h-[1500.05px] absolute z-[0] overflow-hidden" style={{top: '-600px', right: '-220px'}}>
      </div>
      </div>
      <div className="bg-[#77C0E9]  w-full min-h-screen   justify-center items-start p-4 sm:p-10 z-[10]">
        <div className="text-center  z-2">
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight z-10">
            What Our Happy
            <br />
            Customer Says
          </h1>
        </div>
        <hr className="w-32  mx-auto mt-5"/>
        <div className="text-center mt-5">
          <h1 className="text-white text-lg sm:text-xl font-bold leading-tight">
          We value our customers' feedback and strive to
           provide the best experience possible.
           <br />
          Here's what our happy customers have to say
          </h1>
        </div>

        <div className="flex flex-col md:flex-row text-white justify-around items-center gap-8 md:gap-20 mt-10 md:mt-20">
        <div className="bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <img src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="testimonial" className="w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" />
            <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-message-icon-for-your-project-png-image_5214044.jpg" alt="testimonial" className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" />
          </div>
          <p className="text-sm font-semibold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="mt-auto">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm">CEO, Company Name</p>
          </div>
        </div>
        <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <img src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="testimonial" className="w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" />
            <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-message-icon-for-your-project-png-image_5214044.jpg" alt="testimonial" className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" />
          </div>
          <p className=" text-sm font-semibold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="mt-auto">
            <h2 className=" text-xl font-bold">John Doe</h2>
            <p className=" text-sm">CEO, Company Name</p>
          </div>

          </div>
        </div>
        
      </div>

      {/* Footer section */}
      <div className="bg-black w-full py-8 sm:py-12 z-1 absolute">
        {/* Logo */}
        <div className="flex justify-center items-center text-wrap mb-6 sm:mb-10">
          <div className="leading-tight  ">
            <h1 className="text-white text-2xl sm:text-3xl font-bold ">
              Boss
              <br />
             <h1 className="px-5">
              Shoes
              </h1> 
            </h1>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center items-center px-4 sm:px-10 gap-4 sm:gap-8 mb-6 sm:mb-10">
          <a href="" className="text-white text-sm sm:text-xl leading-3">
            Terms of Service
          </a>
          <a href="" className="text-white text-sm sm:text-xl leading-3">
            Privacy Policy
          </a>
          <a href="" className="text-white text-sm sm:text-xl leading-3">
            Security
          </a>
          <a href="" className="text-white text-sm sm:text-xl leading-3">
            FAQ
          </a>
        </div>

        {/* Bottom footer section */}
        <div className="flex flex-col sm:flex-row items-center px-4 sm:px-10 gap-4 sm:gap-0">
          {/* Language selector */}
          <div className="text-center sm:text-left sm:w-1/3">
            <h1 className="text-white text-sm sm:text-xl">
              <a href="">English</a>
            </h1>
          </div>

          {/* Social media links */}
          <div className="flex justify-center sm:w-1/3 gap-4 sm:gap-8">
            <a href="" className="text-white text-sm sm:text-xl">
              FB
            </a>
            <a href="" className="text-white text-sm sm:text-xl">
              TW
            </a>
            <a href="" className="text-white text-sm sm:text-xl">
              LI
            </a>
            <a href="" className="text-white text-sm sm:text-xl">
              IN
            </a>
          </div>

          {/* Copyright */}
          <div className="sm:w-1/3 text-white text-center sm:text-right">
            <a href="">
              <h1 className="text-white text-sm sm:text-xl">
                BOSS SHOES © All rights Reserved
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;