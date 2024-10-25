import React from "react";

const page = () => {
  return (
    <>
      <div className=" bg-black w-full h-[400px] ">
        <div className="flex justify-center items-center   text-wrap  ">
          <div className="p-10">
            <h1 className="text-white text-3xl font-bold  leading-3">Boss</h1>
            <h1 className="text-white text-3xl font-bold px-3  leading-tight">
              Shoes
            </h1>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center  p-10 gap-20">
            {/* <div className='p-10'> */}
            <a href="" className="text-white text-xl   leading-3">
              Term of Servise
            </a>
            <a href="" className="text-white text-xl   leading-3">
              Privecy Polecy
            </a>
            <a href="" className="text-white text-xl   leading-3">
              Security
            </a>
            <a href="" className="text-white text-xl   leading-3">
              Faq
            </a>

            {/* </div> */}
          </div>

<div className="flex  items-center  p-10  justify-around">


<div className="text-left   w-full">
        <h1 className="text-white text-xl">
          <a href="">English</a>
            
          </h1>  
          
          </div>
          <div className="flex w-full  justify-center items-left  m-10 gap-10">
            {/* <div className='p-10'> */}
            <a href="" className="text-white text-xl   ">
              FB
            </a>
            <a href="" className="text-white text-xl   ">
              TW
            </a>
            <a href="" className="text-white text-xl   ">
              LI
            </a>
            <a href="" className="text-white text-xl   ">
              IN
            </a>

            {/* </div> */}
          </div>

       <div className=" w-full text-white text-right">
        
          <h1 className="text-white  text-xl">
          BOSS SHOES © All right Reserved
          </h1> 
        </div>   
</div>
        </div>
      </div>
    </>
  );
};

export default page;
