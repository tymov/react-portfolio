import React from "react";

export const About = () => {
  return (
    <div className="bg-cyberpunk-900 text-white min-h-screen flex flex-col justify-center items-center z-10" id="about">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-8">
          Hi there! I'm Tymo Verhaegen, a passionate application developer and AI enthusiast based in Belgium. I love building innovative solutions and exploring the latest technologies.
        </p>
        <p className="text-lg mb-8">
          With a background in both application development and AI, I bring a unique perspective to my projects. Whether it's creating intuitive user interfaces or implementing machine learning algorithms, I'm always up for a challenge.
        </p>
        <p className="text-lg mb-8">
          When I'm not coding, you can find me exploring new video games, experimenting in the kitchen, or planning my next travel adventure. Feel free to reach out if you'd like to collaborate on a project or just chat about technology and gaming!
        </p>
      </div>
    </div>
  );
};