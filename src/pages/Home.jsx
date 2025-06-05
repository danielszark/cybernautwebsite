import React from 'react'
import emptyProfile from '../assets/emptyprofilepic.jpg'
import andrewProfile from '../assets/andrewprofilepic.jpg'
import linneaProfile from '../assets/linneaprofilepicture.jpg'

const Home = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen text-center p-6 flex flex-col items-center">
      {/* Main headline */}
      <h1 className="text-4xl font-extrabold text-[#275481] mb-2">What Is My Social Media Doing To Me?</h1>
      {/* Subheadings */}
      <h2 className="text-2xl font-semibold text-[#4b6b99] mb-1">CSCI436/536, Spring 2025, Dr. Shameem Ahmed</h2>
      <h3 className="text-lg text-[#6b7280] mb-6">Contributing Developers</h3>
      <div className="flex flex-col items-center space-y-10">
        {/*Developer 1*/}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-xl w-full max-w-3xl">
          <img src={emptyProfile} alt="Profile picture" className="w-24 h-24 rounded-full object-cover"/>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#275481]">Charlotte Larsen Freeman</h3>
              <h4 className="text-lg text-black">larson95@wwu.edu</h4>
              <p className="text-sm">Head developer</p>
            </div>
        </div>
        {/*Developer 2*/}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-xl w-full max-w-3xl">
          <img src={andrewProfile} alt="Profile picture" className="w-24 h-24 rounded-full object-cover"/>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#275481]">Andrew Essex (Graduate)</h3>
              <h4 className="text-lg text-black">essexa@wwu.edu</h4>
              <p className="text-sm">Backend developer</p>
            </div>
        </div>

        {/*Developer 3*/}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-xl w-full max-w-3xl">
          <img src={emptyProfile} alt="Profile picture" className="w-24 h-24 rounded-full object-cover"/>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#275481]">Daniel Szarkowicz</h3>
              <h4 className="text-lg text-black">szarkod@wwu.edu</h4>
              <p className="text-sm">Frontend developer</p>
            </div>
        </div>

        {/*Developer 4*/}
        <div className="flex items-center space-x-4 bg-white p-4 rounded-xl w-full max-w-3xl">
          <img src={linneaProfile} alt="Profile picture" className="w-24 h-24 rounded-full object-cover"/>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#275481]">Linnea Olix</h3>
              <h4 className="text-lg text-black">olixl@wwu.edu</h4>
              <p className="text-sm">Frontend developer</p>
            </div>
        </div>
      </div>
      {/* Project Video Section */}
      <div className="w-full max-w-3xl mt-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#275481] mb-4">Project Video</h2>
        <div className="w-full flex justify-center">
          <iframe
            width="560"
            height="315"
            src="/cybernautwebsite/videos/436video.mp4"
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow max-w-full"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home