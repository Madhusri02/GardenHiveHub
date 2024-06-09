import React from 'react';
import about from './images/about.jpg'
import Navbar from './Navbar';

const AboutPage = () => {
  <Navbar />
  return (
    
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
            Welcome to Garden Hive Hub, where our journey began with a vision to cultivate a community of passionate gardeners and nature enthusiasts. Established in 2024, Garden Hive Hub has blossomed into a thriving hub for gardeners of all levels, from beginners to seasoned experts.

At the core of Garden Hive Hub is our deep-rooted commitment to fostering a love for gardening and sustainable living. Our mission is to empower individuals to connect with nature, cultivate beautiful gardens, and nurture a greener, healthier world. With sustainability and environmental stewardship as our guiding principles, we strive to inspire and educate gardeners to make a positive impact on their surroundings.

Our team at Garden Hive Hub is comprised of dedicated individuals who share a common passion for gardening and environmental conservation. Together, we curate a wealth of resources, from expert gardening tips and techniques to eco-friendly gardening products, to support our community in their gardening journey. </p>
            <p className="text-gray-700 leading-relaxed mt-4">
            Customer satisfaction is paramount to us. We are committed to providing exceptional service and value to our customers, helping them create vibrant gardens that flourish year-round. From garden design consultations to personalized gardening recommendations, we are here to help our customers achieve their gardening goals.

Beyond our commitment to our customers, Garden Hive Hub is deeply invested in giving back to the community. Through initiatives such as community garden projects, educational workshops, and partnerships with local environmental organizations, we strive to make a meaningful difference in the lives of people and the planet.

As we continue to grow and expand our reach, our dedication to promoting gardening as a rewarding and sustainable lifestyle choice remains unwavering. We are excited about the journey ahead and invite you to join us in cultivating a greener, more vibrant world, one garden at a time. </p>
            
          </div>
          <div className="md:w-1/2">
            <img src={about} alt="Photo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
