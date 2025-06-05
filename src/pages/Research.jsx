import React from 'react';

{/*All boxes*/}
const boxData = [
  { header: "Systematic Literature Review", 
    content: "Together we read eight papers, all of which explored technological solutions of some form to the problem of social media having negative impacts on kids. Some of the proposed solutions mirrored social media sites themselves and sought to provide kids with a greater understanding of the real-world social media environment, albeit in a controlled context. One solution, InstaClone, served as a walled-garden environment to teach students data literacy concepts. It resembled Instagram but included educational features to teach students about data collection and the underlying algorithms on social media platforms. Another solution, CHAITok, resembled TikTok but made students more aware in real-time of algorithmic effects and data collection on their age group. These papers provided a lot of useful research and insights, making us realize that our solution would need to engage and teach students at the same time.",
    images: [
      "/cybernautwebsite/images/image7.png",
      "/cybernautwebsite/images/image17.png",
      "/cybernautwebsite/images/image19.png",
      "/cybernautwebsite/images/image2.png",
      "/cybernautwebsite/images/image3.png"
    ] 
  },

  { header: "System Analysis", 
    content: "We analyzed eight different systems related to our topic. Due to a scarcity of existing solutions for the social media problem, we often reviewed systems meant to teach students other educational content. These systems generally included features meant to be interactive and engaging for students, and we were happy to take notes on what worked well so we could incorporate those features into our prototype. One system that stood out, Be Internet Awesome, included a full narrative game with good visual appeal, and it contributed meaningfully to the direction of our prototype. We also adapted the quiz feature from Kahoot!, a general education platform, into our updated prototype.",
    images: [
      "/cybernautwebsite/images/image10.png",
      "/cybernautwebsite/images/image18.png",
      "/cybernautwebsite/images/image11.png",
      "/cybernautwebsite/images/image1.png",
      "/cybernautwebsite/images/image4.png",
      "/cybernautwebsite/images/image15.png",
      "/cybernautwebsite/images/image16.png",
      "/cybernautwebsite/images/image8.png",
    ] 
  },

{ 
  header: "User Studies", 
  content: (
    <>
      <p className="mb-4">
        Each member of our team conducted an interview with a different user. Users interviewed ranged from primary users (3 interviewed) to secondary users (1 interviewed). While all of our users liked the prototype and found it engaging, we were able to glean some additional insights for our design process. Some takeaways included:
      </p>
      <ul className="list-disc list-inside text-left mb-4">
        <li>Making the site more accessible by providing audio to complement written dialogue (e.g., in speech bubbles, game instructions)</li>
        <li>Include visual effects</li>
        <li>Lean into competitive nature of games for students, making it more interactive and collaborative</li>
        <li>Remove interview pages</li>
      </ul>
      <p>
        Some of these changes will be included in our final prototype. However, due to deadline constraints, some will be included in our Future Work section.
      </p>
    </>
  ),
  images: [
      "/cybernautwebsite/images/image12.png",
      "/cybernautwebsite/images/image9.png",
      "/cybernautwebsite/images/image4.png",
      "/cybernautwebsite/images/image6.png",
      "/cybernautwebsite/images/image14.png",
      "/cybernautwebsite/images/image5.png",
  ]
}
];

const Research = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen text-center p-6 flex flex-col items-center">
      <h1 className="font-zing text-4xl font-bold text-[#275481] mb-10">
        Project Research
      </h1>
      <div className="flex flex-col items-center space-y-10 w-full">
        {boxData.map((box, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg w-full max-w-5xl shadow"
          >
            <h2 className="text-2xl font-bold text-[#275481] mb-2">
              {box.header}
            </h2>

            <p className="text-black text-lg mb-4 ">{box.content}</p>

            {box.images && box.images.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {box.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${box.header} image ${i + 1}`}
                    className="w-78 h-auto object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
