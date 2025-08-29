import React from "react";
import "./SampleCard.css";
 const jobData = [
    {
    id: 1,
    title: "React Developer for E-Commerce Website",
    clientName: "Tech Solutions Pvt Ltd",
    clientLogo: "https://randomuser.me/api/portraits/men/33.jpg",
    description: "Build a responsive e-commerce platform with payment integration and admin panel.",
    budget: "₹25,000 - ₹35,000",
    deadline: "3 weeks",
    location: "Remote",
    skills: ["React", "JavaScript", "CSS", "REST API"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "WordPress Website Redesign",
    clientName: "Creative Minds Co.",
    clientLogo: "https://randomuser.me/api/portraits/men/34.jpg",
    description: "Redesign an outdated WordPress site to a modern, mobile-friendly layout.",
    budget: "₹15,000 - ₹20,000",
    deadline: "1 month",
    location: "Remote",
    skills: ["WordPress", "PHP", "HTML", "CSS"],
    posted: "1 day ago"
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design",
    clientName: "Pixel Perfect Ltd",
    clientLogo: "https://randomuser.me/api/portraits/men/35.jpg",
    description: "Create an intuitive and modern UI/UX for a new food delivery app.",
    budget: "₹18,000 - ₹25,000",
    deadline: "2 weeks",
    location: "Remote",
    skills: ["Figma", "UI/UX", "Adobe XD"],
    posted: "4 days ago"
  },
  {
    id: 4,
    title: "Backend API Developer",
    clientName: "NextGen Techies",
    clientLogo: "https://randomuser.me/api/portraits/men/36.jpg",
    description: "Develop secure RESTful APIs for a financial dashboard application.",
    budget: "₹40,000 - ₹50,000",
    deadline: "1 month",
    location: "On-site, Bangalore",
    skills: ["Node.js", "Express", "MongoDB", "JWT"],
    posted: "6 days ago"
  },
  {
    id: 5,
    title: "SEO Specialist for Blog Website",
    clientName: "BlogBoost Agency",
    clientLogo: "https://randomuser.me/api/portraits/men/37.jpg",
    description: "Improve search engine rankings for a travel blog with organic SEO techniques.",
    budget: "₹10,000 - ₹15,000",
    deadline: "2 weeks",
    location: "Remote",
    skills: ["SEO", "Google Analytics", "Content Writing"],
    posted: "3 days ago"
  },
  {
    id: 6,
    title: "Full Stack Developer",
    clientName: "CloudBridge Pvt Ltd",
    clientLogo: "https://randomuser.me/api/portraits/men/38.jpg",
    description: "Work on both frontend and backend for a SaaS product.",
    budget: "₹60,000 - ₹80,000",
    deadline: "2 months",
    location: "Remote",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    posted: "7 days ago"
  },
  {
    id: 7,
    title: "Graphic Designer for Marketing Campaign",
    clientName: "AdVantage Media",
    clientLogo: "https://randomuser.me/api/portraits/men/39.jpg",
    description: "Design creative ads and banners for a product launch campaign.",
    budget: "₹8,000 - ₹12,000",
    deadline: "10 days",
    location: "Remote",
    skills: ["Photoshop", "Illustrator", "Canva"],
    posted: "1 day ago"
  },
  {
    id: 8,
    title: "Data Analyst for Sales Dashboard",
    clientName: "MarketView Analytics",
    clientLogo: "https://randomuser.me/api/portraits/men/42.jpg",
    description: "Analyze sales data and create interactive Power BI dashboards.",
    budget: "₹25,000 - ₹35,000",
    deadline: "1 month",
    location: "Remote",
    skills: ["Power BI", "Excel", "SQL"],
    posted: "5 days ago"
  },
  {
    id: 9,
    title: "Flutter Mobile App Developer",
    clientName: "AppCraft Labs",
    clientLogo: "https://randomuser.me/api/portraits/men/43.jpg",
    description: "Build a cross-platform mobile app for a fitness tracking startup.",
    budget: "₹30,000 - ₹40,000",
    deadline: "1.5 months",
    location: "Remote",
    skills: ["Flutter", "Dart", "Firebase"],
    posted: "2 days ago"
  },
  {
    id: 10,
    title: "Social Media Manager",
    clientName: "Trendset Digital",
    clientLogo: "https://randomuser.me/api/portraits/men/53.jpg",
    description: "Manage Instagram, Facebook, and LinkedIn pages for brand engagement.",
    budget: "₹12,000 - ₹18,000",
    deadline: "Ongoing",
    location: "Remote",
    skills: ["Social Media", "Content Creation", "Canva"],
    posted: "3 days ago"
  },
  {
    id: 11,
    title: "Cybersecurity Consultant",
    clientName: "SecureNet Solutions",
    clientLogo: "https://randomuser.me/api/portraits/men/63.jpg",
    description: "Audit and secure a company's network and cloud infrastructure.",
    budget: "₹50,000 - ₹70,000",
    deadline: "1 month",
    location: "On-site, Hyderabad",
    skills: ["Cybersecurity", "Penetration Testing", "AWS Security"],
    posted: "1 week ago"
  },
  {
    id: 12,
    title: "Content Writer for Tech Blog",
    clientName: "WriteUp Hub",
    clientLogo: "https://randomuser.me/api/portraits/men/73.jpg",
    description: "Write engaging and SEO-optimized articles for a tech blog.",
    budget: "₹500 per article",
    deadline: "Ongoing",
    location: "Remote",
    skills: ["Content Writing", "SEO", "WordPress"],
    posted: "2 days ago"
  },
  {
    id: 13,
    title: "Video Editor for YouTube Channel",
    clientName: "ViralVision Media",
    clientLogo: "https://randomuser.me/api/portraits/men/83.jpg",
    description: "Edit and enhance videos for a gaming YouTube channel.",
    budget: "₹7,000 - ₹10,000",
    deadline: "Per Project",
    location: "Remote",
    skills: ["Premiere Pro", "After Effects", "Photoshop"],
    posted: "4 days ago"
  },
  {
    id: 14,
    title: "Python Automation Script Developer",
    clientName: "AutoBot Systems",
    clientLogo: "https://randomuser.me/api/portraits/men/93.jpg",
    description: "Develop Python scripts to automate repetitive data entry tasks.",
    budget: "₹15,000 - ₹22,000",
    deadline: "2 weeks",
    location: "Remote",
    skills: ["Python", "Selenium", "Pandas"],
    posted: "1 day ago"
  },
  {
    id: 15,
    title: "Game UI Designer",
    clientName: "PlayNext Studios",
    clientLogo: "https://randomuser.me/api/portraits/men/21.jpg",
    description: "Design immersive UI screens for a new RPG game.",
    budget: "₹35,000 - ₹50,000",
    deadline: "1.5 months",
    location: "Remote",
    skills: ["UI/UX", "Photoshop", "Figma"],
    posted: "6 days ago"
  }
];
function SampleCard()  {
  return (
    <div className="job-card-container">
      {/* Title & Client */}
     
        {jobData.map((job)=>(
             <div className="job-card" key={job.id}>
        <img
          src={job.clientLogo || "https://randomuser.me/api/portraits/men/3.jpg"}
          alt="Client Logo"
          className="client-logo" />
        <div> 
 
           <h2 className="job-title">{job.title}</h2>
          <p className="client-name">{job.clientName}</p>
        
      </div>

      {/* Short Description */}
      <p className="job-description">{job.description}</p>

      {/* Key Details */}
      <div className="job-details">
        <span>💰 {job.budget}</span>
        <span>📅 {job.deadline}</span>
        <span>📍 {job.location}</span>
      </div>

      {/* Skills */}
      <div className="skills">
        {job.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="job-footer">
        <span className="posted">Posted {job.posted}</span>
    
        
        <button className="apply-btn">Apply Now</button>
        
      </div>
      
    </div>
        ))}
    </div>

  );
};

export default SampleCard;
