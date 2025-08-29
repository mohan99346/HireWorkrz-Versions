import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/postjob.css"; // Importing the separate CSS file

const PostJobForm = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    category: "",
    skills: [],
    budget: "",
    deadline: "",
    visibility: "public",
  });

  const categories = ["Web Development", "Graphic Design", "Writing", "Marketing"];
  const skillsList = ["React", "Node.js", "MongoDB", "Python", "UI/UX"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSkillToggle = (skill) => {
    setJobData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", jobData);
    // Here you can send jobData to the backend
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>

      <form onSubmit={handleSubmit} className="post-job-form">
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" value={jobData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Required Skills</label>
          <div className="skills-container">
            {skillsList.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={jobData.skills.includes(skill) ? "skill selected" : "skill"}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <input
            type="number"
            name="budget"
            value={jobData.budget}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={jobData.deadline}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Visibility</label>
          <select name="visibility" value={jobData.visibility} onChange={handleChange}>
            <option value="public">Public</option>
            <option value="private">Private (Invite Only)</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobForm;