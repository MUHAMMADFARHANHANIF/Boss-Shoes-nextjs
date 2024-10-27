// import React from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import leftArrow from './asset/leftarrow.png';
import rightarrow from './asset/rightarrow.png';
import yellowshoe from './asset/yellowshoe.png';
import deliverybox from './asset/deliverybox.png';
import productBackRoundImag from './asset/productBackRoundImag.png';
import rotatediv from './asset/rotatediv.png';
import Products from './components/Products';
import singleProductShoe from './asset/singleProductShoe.png';

import logo from './asset/logo.png'; // For logo image
import hamburger from './asset/hamburger.png';
import shoppingBagNavbar from './asset/shoppingBagNavbar.png';
import searchIconImage from './asset/navSearchIcon.png';
import Link from 'next/link';
// ... (imports remain the same)

const page = () => {
  return (
    <React.Fragment>
<React.Fragment>
            <nav className=' sm:py-[50px] py-[20px] flex items-center justify-between absolute w-full top-1'>
                <Image
                    src={logo} // main logo
                    className='sm:ml-[49px] ml-[30px] mr-5 sm:w-[96.41px] sm:h-[33px] w-[50px] h-[20.96px]' // Responsive positioning
                    width={96.41}
                    height={42.96}
                    alt='logo'
                // Responsive sizing
                />
                <div id='MainDivFirstDiv' className='md:w-[600px] sm:w-[400px] w-[100px] z-20 sm:h-16 h-10 bg-[rgb(139,201,236)] bg-opacity-60 backdrop-blur-sm flex items-center justify-between'>
                    <Link href={'#home'}>
                        <p className=' ml-5 hidden md:inline-block text-sm sm:text-base cursor-pointer '>HOME</p>
                    </Link>
                    <Link href={'#product'}>
                        <p className='  cursor-pointer hidden md:inline-block text-sm sm:text-base'>OUR PRODUCT'S</p>
                    </Link>
                    <Image
                        src={shoppingBagNavbar}
                        className=' cursor-pointer hidden md:inline-block'
                        width={25}
                        height={25}
                        alt='shopping bag'
                    />
                    <Image
                        src={searchIconImage}
                        className=' cursor-pointer hidden mr-10 md:inline-block'
                        width={25}
                        height={25}
                        alt='search icon'
                    />
                    <Image
                        src={hamburger}
                        id='hamburger'
                        className="  mx-auto inline-block md:hidden w-[10px] h-[8px] sm:w-[15px] sm:h-[12px] md:w-[30px] md:h-[25px] cursor-pointer"
                        width={300}
                        height={300}
                        alt='hamburger menu'
                    />

                </div>
            </nav>
        </React.Fragment>
      {/* hero,main section */}
      <main id='home' className="relative w-full mt-[-20px]">
        <div className="absolute  left-0 w-2/5 h-full bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url(${roundDivHead.src})`,
          }}></div>
        <Image
          src={headerLeagShoes}
          className='relative z-10 left-[24%] h-auto w-[65vw] sm:w-[55vw]'
          alt='headerLeagShoes'
        />

        <h1 className="relative w-full text-[28vw] bottom-[190px] lg:bottom-[92vh] md:bottom-[40vh] font-bold text-center">
          BIGAIR
        </h1>
        <h3 className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'>
          Walk Like a Boss
        </h3>
        <p className='ml-4 md:ml-6 text-sm md:text-base mb-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className='absolute mt-3 left-0 right-0 w-full flex flex-wrap gap-5 items-center justify-around'>
          <div>
            <Stack spacing={2} direction="row">
              <Button
                sx={{
                  width: { xs: '5rem', sm: '5rem', md: '7rem' },
                  color: 'white',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                variant="outlined"
              >
                Explore
              </Button>
            </Stack>
          </div>

          <div className='flex items-center gap-28 sm:gap-40 justify-center'>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' className='cursor-pointer' />
            <div className='flex items-center justify-center'>
              <p className='text-[1.1rem]'>01/ </p><p className='text-[0.8rem]'>05</p>
            </div>
            <Image src={rightarrow} width={20} height={20} alt='rightarrow' className='cursor-pointer' />
          </div>
          <div className='flex h-[5.8rem] bg-[rgb(139,201,236)] justify-center items-center'>
            <div className="flex items-center w-36 h-36 mr-10">
              <div className="w-1/2 bg-[#77C0E9] h-full sm:inline-block md:inline-block hidden" />
              <div className="w-1/2 bg-[rgb(139,201,236)] h-[80px]" />
              <Image
                className="absolute z-10 w-36 h-36 rounded-xl"
                src={yellowshoe}
                width={150}
                height={150}
                alt="yellowshoe"
              />
            </div>

            <div className='flex flex-col justify-center h-[5.8rem] w-32 items-center bg-[rgb(139,201,236)]'>
              <h5 className='text-[0.7rem]'>Our Trending Arivals</h5>
              <p className='text-[0.5rem]'>Lorem ipsum dolor sit amet, </p>
              <p className='text-[0.5rem]'>consectetur adipiscing elit</p>
              <Stack sx={{ marginTop: 1 }} spacing={2} direction="row">
                <Button
                  sx={{
                    width: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    color: 'white',
                    fontSize: { xs: '0.3rem', sm: '0.4rem', md: '0.5rem' },
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  variant="outlined"
                >
                  Explore
                </Button>
              </Stack>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-5 mt-64 sm:mt-40 py-8">
          {/* Free Shipping Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 mb-4 sm:mb-0">
            <Image src={deliverybox} width={40} height={40} alt="deliverybox" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Free Shipping Worldwide</p>
              <p className='text-[rgb(142 199 232)]'>Tell us about your service</p>
            </div>
          </div>

          {/* Money Back Guarantee Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 mb-4 sm:mb-0">
            <Image src={deliverybox} width={40} height={40} alt="moneyback" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Money Back Guarantee</p>
              <p className='text-[rgb(142 199 232)]'>Within 30 Days for an Exchange</p>
            </div>
          </div>

          {/* Online Support Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2">
            <Image src={deliverybox} width={40} height={40} alt="support" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Online Support</p>
              <p className='text-[rgb(142 199 232)]'>24 Hours a 7 Day</p>
            </div>
          </div>
        </div>
      </main>

      <div className="flex items-center mt-16 flex-col gap-3 justify-center">
        <h4 className="text-2xl sm:text-4xl font-semibold">Our Product's</h4>
        <div className="border w-20"></div>
      </div>

      {/* Product Section with Background Image */}
      <div className="relative  w-full h-auto   sm:h-[277vh]">
        <div className='ml-[10%] w-full sm:w-full overflow-hidden sm:h-full  '
          style={{
            overflow: 'hidden',
            backgroundImage: `url(${productBackRoundImag.src})`,
            // backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '126%',
            position: 'absolute',
            top: -110,
            left: -60,
          }}
        ></div>

        <Products />
        <Products />
        <Products />

        <div className="flex items-center mt-20 flex-col gap-3 justify-center">
          <h4 className="text-2xl sm:text-4xl font-semibold">Our Product Quality</h4>
          <div className="border w-32"></div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-around">
          <div className="space-y-4 md:space-y-6 w-full md:w-1/2">
            {/* Feature 1 */}
            <div className="p-2 flex items-center space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Best Quality Shoes</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-2 flex items-center space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Long Lasting</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-2 flex items-center  space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Best Value</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="relative  flex items-center  justify-center mt-10 md:mt-0 w-full md:w-1/2">
            <div className="absolute w-80 h-80 sm:w-72 sm:h-72 md:w-96 md:h-96  bg-gradient-to-b from-blue-500 to-[#77C0E9] rounded-full z-10"></div>
            <Image
              src={singleProductShoe}
              className="relative z-10"
              width={450}
              height={450}
              alt="singleProductShoe"
              style={{ transform: 'rotate(-15deg)' }}
            />
          </div>
        </div>
      </div>

      <div className=''>
        <div className="bg-[#77C0E9] w-full min-h-screen overflow-hidden justify-center items-start p-4 sm:p-10 z-[10] ">
          <div className='w-full '
            style={{
              backgroundImage: `url(${rotatediv.src})`,
              backgroundSize: 'cover',
              
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
              height: '290%',
              position: 'absolute',
              top: 2400,
              right: 0,
            }}
          ></div>

          <div className="text-center mt-20 sm:mt-60 z-2">
            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight z-10">
              What Our Happy
              <br />
              Customer Says
            </h1>
          </div>
          <hr className="w-32 mx-auto mt-5" />
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
              <p className="text-sm font-semibold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="mt-auto">
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black h-96 mt-10 overflow-hidden     bottom-0 text-white w-full py-6  sm:py-10">
            {/* Logo */}
            <div className="flex justify-center items-center mb-6 sm:mb-10">
                <div className="text-center mt-12">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Boss
                        <span className="block mt-1">Shoes</span>
                    </h1>
                </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center items-center px-4 sm:px-10 gap-4 sm:gap-8 mb-6 sm:mb-10">
                <a href="#" className="text-sm sm:text-base hover:underline">Terms of Service</a>
                <a href="#" className="text-sm sm:text-base hover:underline">Privacy Policy</a>
                <a href="#" className="text-sm sm:text-base hover:underline">Security</a>
                <a href="#" className="text-sm sm:text-base hover:underline">FAQ</a>
            </nav>

            {/* Bottom footer section */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 gap-4 sm:gap-0">
                {/* Language selector */}
                <div className="text-center sm:text-left">
                    <select className="bg-black text-white text-sm sm:text-base border border-white rounded px-2 py-1">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                    </select>
                </div>

                {/* Social media links */}
                <div className="flex justify-center gap-4 sm:gap-6">
                    <a href="#" className="text-sm sm:text-base hover:text-gray-300">FB</a>
                    <a href="#" className="text-sm sm:text-base hover:text-gray-300">TW</a>
                    <a href="#" className="text-sm sm:text-base hover:text-gray-300">LI</a>
                    <a href="#" className="text-sm sm:text-base hover:text-gray-300">IN</a>
                </div>

                {/* Copyright */}
                <div className="text-center sm:text-right">
                    <p className="text-sm sm:text-base">
                        BOSS SHOES © All rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default page