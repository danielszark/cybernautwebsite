import React from 'react';

{/*All boxes*/}
const boxData = [
  { header: "User Accounts", 
    content: "We want the users of our website to be able to create an account so we can track their module/learning progress, as well as other aspects of being a user. Upon logging in, users will have access to the Profile and Dashboard pages. The profile contains username, email, and password fields. Users have the option to change their username and password, as well as delete their account. The dashboard contains data relevant to gameplay, such as XP points and module progress.",
    images: ["../images/UserLogin.png", "../images/UserProfile.png"]
  },

  { header: "Story Mode", 
    content: "Upon entering the site, users will be able to navigate to the Destinations page to begin the game. Destinations contains three different major game sections to complete: Data Detox Pit, Social Media Safe Passage, and Mountains of Mystery. Each section is divided up into modules. Upon starting the game for the first time, users will be taken through an overarching storyline that ties all the different sections together. Starting each individual section also unlocks section-specific stories. After going through the stories, users will have to complete the modules in order. Each module contains relevant content that aims to teach users about important social media concepts. The goal is to help students become more resilient, confident, and aware navigators of social media in the real world. After the last module is completed, users will have to complete a quiz with a passing score to test their knowledge and fully complete the section.",
    images: ["../images/TestModule.png"]
  },

  { header: "Navigation",
    content: "Our site contains a header that links to all necessary pages users may want to need to navigate to. In addition, users will be able to navigate into Story Mode directly from the home page through a series of buttons.",
    images: ["../images/Navigation.png"]
  },

  { header: "Cybernaut",
    content: "Entering the site reveals a user’s personal companion, Cybernaut. Cybernaut is a digital character that accompanies the user into the story and helps them navigate the challenges they will face.",
    images: []
  },

  { header: "Progress Bar",
    content: "Each game section contains a progress bar that shows the user how far along they are in the section. Each progress bar is also tied to XP points, another gamifying feature linked to user accounts.",
    images: []
  }
];

const FinalProduct = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen text-center p-6 flex flex-col items-center">
      <h1 className="font-zing text-4xl font-bold text-[#275481] mb-10">
        Final Product
      </h1>

      {/* Project Features */}
      <h2 className="text-3xl font-semibold text-[#275481] mb-6">
        Features & Flow
      </h2>
      
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col justify-center indent 8">
            <h3 className="text-2xl font-bold text-[#275481] mb-2">{boxData[0].header}</h3>
            <p className="text-black text-lg text-left">{boxData[0].content}</p>
          </div>
          {boxData[0].images && boxData[0].images.length > 0 && (
            <div className="flex flex-row md:flex-col gap-4 justify-center items-center">
              {boxData[0].images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${boxData[0].header} img ${i + 1}`}
                  className="w-120 h-70 rounded border-1"
                />
              ))}
            </div>
          )}
        </div>
        {[1, 2].map(idx => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-lg shadow">
            {/* Text */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-[#275481] mb-2">{boxData[idx].header}</h3>
              <p className="text-black text-lg text-left indent-8">{boxData[idx].content}</p>
            </div>
            {/* Image */}
            {boxData[idx].images && boxData[idx].images.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-end">
                {boxData[idx].images.map((src, i) => (
                  <img
                  key={i}
                  src={src}
                  alt={`${boxData[idx].header} img ${i + 1}`}
                  className="w-120 h-70 rounded border-1"
                />
              ))}
              </div>
            )}
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boxData.slice(3, 5).map((box, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow w-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#275481] mb-2">{box.header}</h3>
              <p className="text-black text-lg text-left indent-8">{box.content}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Technology Used */}
      <h2 className="text-3xl font-semibold text-[#275481] mt-12 mb-6">
        Technology Used
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-[#275481] mb-2">MERN Stack</h3>
          <p className="text-black text-lg">
            We followed the MERN stack for our project development (MongoDB for the database, Express server built atop Node.js, and React on the frontend). REST API conventions were followed for client-server communication. Git and GitHub were used for version control and team collaboration.
          </p>
        </div>
      </div>

      {/* Future Work */}
      <h2 className="text-3xl font-semibold text-[#275481] mt-12 mb-6">
        Future Work
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-[#275481] mb-2">Extended Usability</h3>
          <p className="text-black text-lg">
            Future iterations of our prototype could include many useful new features. We would like to design a section of our website for educators, such as teachers or parents. We would also implement tailored content for students of different age groups. For instance, a 6th grader would be exposed to different content than a 12th grader, with content and game difficulty scaled appropriately. Additional accessibility features, such as language selection and audio, would be useful for students with learning disabilities or for whom English isn’t a native language. Finally, building game rooms in the server would be a competitive and interactive feature to include for students in a classroom setting, as it could both increase engagement and social collaboration among peers.
          </p>
        </div>
      </div>

      {/* GitHub Repository Link */}
       <a
        href="https://github.com/danielszark/cybernaut"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 text-[#275481] hover:underline text-xl"
      >
        Click Here to View our GitHub Repository
      </a>
    </div>
  );
};

export default FinalProduct;
