// JobCardList.jsx
import "./JobCards.css";

const jobList = [
  {
    id: 1,
    title: "Frontend Developer for Ecommerse website",
    Client:"K Vikram",
    location: "Remote",
    skills: ["React", "CSS", "JavaScript"],
    Rating: "4.5 ⭐",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Chennai",
    skills: ["Node.js", "Express", "MongoDB"],
    Rating: "4.2 ⭐",
    posted: "5 days ago"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Hyderabad",
    skills: ["Figma", "Adobe XD"],
    Rating: "4.8 ⭐",
    posted: "1 week ago"
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  },
   {
    id: 4,
    title: "Full Stack Developer",
    location: "Hyderabad",
    skills: ["React", "Node.js", "MongoDB"],
    Rating: "4.3 ⭐",
    posted: "1 week ago"
  }
];

function JobCardList() {
  

  return (
    <div className="job-card-container">
    

   
   
        {jobList.map((job) => (
          <div className="job-card" key={job.id}>
             <p className="posted">{job.posted}</p>
            <h3>{job.title}</h3>
            <h4>Client - {job.Client}</h4>
          
            <p>{job.location}</p>
            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
                
              ))}
                <p className="Rating">{job.Rating}</p>
            </div>
            <button>Apply</button>
           
          </div>
        ))}
      </div>
  
  );
}

export default JobCardList;
