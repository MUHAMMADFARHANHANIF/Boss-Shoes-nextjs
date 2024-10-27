import React from 'react'
import Image from 'next/image';
import shoppingBagNavbar from '../asset/shoppingBagNavbar.png';


const Products = ({image}:{image:string}) => {
  return (
    <React.Fragment>

      <div className="relative flex  z-10 flex-wrap justify-center  items-center ">
         
          {/* <div className="rounded-2xl pb-10 bg-gradient-to-b from-[rgb(119,192,233)] to-[rgb(150,205,236)] flex flex-col items-center gap-3 shadow-sm"> */}
            <Image src={image} alt="Yellow Shoe" width={370} height={500} className="rounded-xl" />
            {/* <h5 className="text-2xl self-start ml-[50px] font-bold">Green AIR</h5>
            <div>
              <p className="text-md ">Lorem ipsum dolor sit amet</p>

              <p className="text-md ">consectetur adipiscing elit</p>
            </div>
            <div className="flex items-center justify-evenly  w-full">
              <p className="text-xl font-semibold">Rs. 1,20,000</p>
              <div className="p-2 rounded-xl border-2">
                <Image src={shoppingBagNavbar} alt="Shopping Bag" width={20} height={15} />
              </div> */}
            {/* </div> */}
          </div>





          {/* <div className="rounded-2xl pb-10 bg-gradient-to-b from-[rgb(119,192,233)] to-[rgb(150,205,236)] flex flex-col items-center gap-3 shadow-sm">
            <div className='h-48  flex items-center justify-center '>

            <Image src={yellowshoe} alt="Yellow Shoe" width={300} height={300} className="rounded-xl" />
            </div>
            <h5 className="text-2xl self-start ml-[50px] font-bold">Green AIR</h5>
            <div>
              <p className="text-md ">Lorem ipsum dolor sit amet</p>

              <p className="text-md ">consectetur adipiscing elit</p>
            </div>
            <div className="flex items-center justify-evenly  w-full">
              <p className="text-xl font-semibold">Rs. 1,20,000</p>
              <div className="p-2 rounded-xl border-2">
                <Image src={shoppingBagNavbar} alt="Shopping Bag" width={20} height={15} />
              </div>
            </div>
          </div>
          <div className="rounded-2xl pb-10 bg-gradient-to-b from-[rgb(119,192,233)] to-[rgb(150,205,236)] flex flex-col items-center gap-3 shadow-sm">
            <div className='h-48  flex items-center justify-center '>

            <Image src={yellowshoe} alt="Yellow Shoe" width={300} height={300} className="rounded-xl" />
            </div>
            <h5 className="text-2xl self-start ml-[50px] font-bold">Green AIR</h5>
            <div>
              <p className="text-md ">Lorem ipsum dolor sit amet</p>

              <p className="text-md ">consectetur adipiscing elit</p>
            </div>
            <div className="flex items-center justify-evenly  w-full">
              <p className="text-xl font-semibold">Rs. 1,20,000</p>
              <div className="p-2 rounded-xl border-2">
                <Image src={shoppingBagNavbar} alt="Shopping Bag" width={20} height={15} />
              </div>
            </div>
          </div> */}


        {/* </div> */}
    </React.Fragment>
  )
}

export default Products
