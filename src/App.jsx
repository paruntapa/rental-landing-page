import React from 'react';
import houseImage from './assets/house.jpg';
import { motion } from 'motion/react';
import { div } from 'framer-motion/client';

export default function App() {

  const stats = [
    { value: "115k+", label: "Capital Raised", delay: 1.0 },
    { value: "70k+", label: "Happy Customers", delay: 1.1 },
    { value: "100k+", label: "Rentals", delay: 1.2 },
  ];

  const profileImages = [
    { src: "https://images.pexels.com/photos/7821915/pexels-photo-7821915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Profile 1", className: 'h-14 w-14 rounded-full'},
    { src: "https://images.pexels.com/photos/1129615/pexels-photo-1129615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Profile 2", className: 'h-7 w-7 rounded-full' },
    { src: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Profile 3", className: 'h-9 w-9 rounded-full' },
  ];


  return (
    <div className="h-screen w-screen overflow-hidden relative py-5 px-10">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src={houseImage}
        alt="Background"
        className="h-full w-full object-center object-cover absolute inset-0 z-0"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-full w-full bg-transparent z-10 relative rounded-2xl border-[20px] border-white flex"
      >
        {/* Main Content */}
        <div className="w-1/2 h-full flex flex-col bg-white px-5 py-5 pr-10 overflow-hidden">
          <div className="flex w-full">
            <div className="tracking-tight text-6xl font-[500] w-fit flex flex-col mr-2">
              <h2 className='h-18 flex items-center overflow-hidden'> 
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut"
                  }}
                >Reserve Your</motion.span> 
              </h2> 
              <h2 className='h-18 flex items-center overflow-hidden'> 
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: "easeOut"
                  }}
                >Ideal Holiday</motion.span> 
              </h2>
            </div>

            {/* Profile Images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex w-[80px] h-[80px] mt-2 flex-wrap gap-1"
            >
              {profileImages.map((profile) => (
                <div className={profile.className}>
                  <img 
                  src={profile.src} 
                  alt={profile.alt} 
                  className='h-full w-full object-cover rounded-full' />
                </div>
              ))}

            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex mt-5 mb-5 items-center w-full gap-5"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-nowrap text-sm font-bold"
            >
              Let's get acquainted!
            </motion.p>
            <div className="h-[1px] w-full bg-black/10" />
          </motion.div>

          {/* Description */}
          <div className="flex w-full gap-6">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xs font-black"
            >
              05
            </motion.span>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="leading-[1.3] text-sm"
            >
              We specialize in curating exceptional villa rentals, providing an unparalleled level of comfort, privacy, and convenience for your dream vacation.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-96 h-10 rounded-full flex items-center justify-center text-white font-light text-sm bg-black"
            >
              More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex w-full my-5 items-center justify-between">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="flex gap-0 flex-col"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-sm text-black/80">{stat.label}</span>
                </motion.div>
                {index < 2 && <div className="h-7 w-[2px] bg-black/20" />}
              </React.Fragment>
            ))}
          </div>

          {/* Property Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="w-[90%] min-h-64 max-h-[50%] mx-auto mt-auto rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1568605115459-4b731184f961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-1/2 h-full relative flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0" />
          
          {/* Location Ticket */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-sm relative z-10 flex bg-white w-56 font-medium leading-[1.2] border-[10px] border-white rounded-2xl mt-5 ms-5"
          >
            <div>
              <p>Melbourne VIC, Australia</p>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black text-white mt-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              </div>
            </div>
            <img src={houseImage} alt="Location thumbnail" className="w-24 h-20 object-cover rounded-2xl" />
          </motion.div>

          {/* Location Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-white/70 text-sm px-5 mt-auto leading-relaxed z-10 w-1/2"
          >
            Enjoy your luxurious Melbourne vacation in a villa with breathtaking city views and easy access to the vibrant city life and culinary delights.
          </motion.p>

          {/* Action Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="z-10 relative bg-[#E9BA6C] text-black my-5 ms-5 px-10 h-10 rounded-full flex items-center justify-center font-medium text-sm w-fit"
          >
            Get Your Room Today!
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}