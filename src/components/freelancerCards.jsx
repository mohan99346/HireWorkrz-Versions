import React, { useRef, useEffect } from "react";
import "./freelancerCards.css";

const freelancers = [
 {
    id: 1,
    name: "Arjun",
    title: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    skills: "React, Node.js, MongoDB"
  },
  {
    id: 2,
    name: "Priya",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    skills: "Figma, Adobe XD, Photoshop"
  },
  {
    id: 3,
    name: "Vikram",
    title: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    skills: "Java, Spring Boot, MySQL"
  },
  {
    id: 4,
    name: "Sneha",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    skills: "React, Express.js, PostgreSQL"
  },
  {
    id: 5,
    name: "Ravi",
    title: "Mobile App Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    skills: "Flutter, Dart, Firebase"
  },
  {
    id: 6,
    name: "Meera",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    skills: "Python, Pandas, Machine Learning"
  },
  {
    id: 7,
    name: "Karthik",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    skills: "AWS, Docker, Kubernetes"
  },
  {
    id: 8,
    name: "Ananya",
    title: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    skills: "HTML, CSS, JavaScript"
  },
  {
    id: 9,
    name: "Siddharth",
    title: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    skills: "Network Security, Ethical Hacking, SIEM"
  },
  {
    id: 10,
    name: "Divya",
    title: "Cloud Engineer",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    skills: "Azure, Terraform, Linux"
  },
  {
    id: 11,
    name: "Harish",
    title: "Machine Learning Engineer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    skills: "TensorFlow, PyTorch, Scikit-learn"
  },
  {
    id: 12,
    name: "Nisha",
    title: "QA Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    skills: "Selenium, JUnit, Postman"
  },
  {
    id: 13,
    name: "Rohit",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    skills: "C++, Java, Python"
  },
  {
    id: 14,
    name: "Pooja",
    title: "Business Analyst",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    skills: "JIRA, Excel, SQL"
  },
  {
    id: 15,
    name: "Manoj",
    title: "Game Developer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    skills: "Unity, C#, Blender"
  }
  
];

const FreelancerList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
  };

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 40000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="freelancer-section">
      <h2>Top Freelancers</h2>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>←</button>
        <button onClick={scrollRight}>→</button>
      </div>
      <div className="freelancer-scroll" ref={scrollRef}>
        {freelancers.map((f) => (
          <div className="freelancer-card" key={f.id}>
            <img src={f.image} alt={f.name} />
            <h4>{f.name}</h4>
            <p className="title">{f.title}</p>
            <p className="skills">{f.skills}</p>
            <button>View Profile</button>
          </div>
         
        ))}
         
      </div>
    </div>
  );
};

export default FreelancerList;
