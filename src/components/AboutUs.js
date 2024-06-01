import React from 'react'
import cartoon from "../assets/baad.jpeg";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden bg-gray-500">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="dream-time-background.jpg" 
          alt="Dream Time Background"
          className="w-full h-full object-cover transform scale-150"
        />
      </div>

      <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${cartoon})`}}>
            <div className="h-[500px] bg-opacity-75 flex justfy-center pt-[80px]">
    
            </div>
            
          </div> 

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center text-black py-20">


      


        <h2 className="text-5xl font-Italic text-center mb-12">About Dreams</h2>
        <div className="max-w-2xl px-6">
          <p className="text-2xl leading-relaxed">
            Dreams are stories and images that our minds create while we sleep. Dreaming may have some benefits, such as helping the brain process information gathered during the day. They are an enduring source of mystery for scientists and psychological doctors. Why do dreams occur? What causes them? Can we control them? What do they mean?
          </p>
          <p className="text-2xl leading-relaxed mt-4">
            There are several theories about why we dream. Are dreams merely part of the sleep cycle, or do they serve some other purpose?
          </p>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;








